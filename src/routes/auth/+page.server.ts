import { fail, redirect } from "@sveltejs/kit";

import {
	getSafeRedirectPath,
	getSupabaseClient,
	getVerifiedUser,
	normalizeEmail,
	normalizeEmailOtp,
	readOptionalFormString,
	readRequiredFormString,
} from "$lib/server/auth";
import { buildPageMetadata } from "$lib/server/page-metadata";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, url }) => {
	const user = await getVerifiedUser(locals);

	return {
		authConfigured: locals.authConfigured,
		// `noindex, follow`: account utility. The canonical is the bare /auth path
		// so the `?next=` parameter cannot mint a second indexable URL. Description
		// omitted per docs/seo.md.
		metadata: buildPageMetadata({
			title: "Sign In or Manage Your Account",
			canonicalPath: "/auth",
			robots: "noindex, follow",
		}),
		next: getSafeRedirectPath(url.searchParams.get("next") ?? "/auth"),
		userEmail: user?.email ?? null,
	};
};

export const actions: Actions = {
	requestCode: async ({ locals, request }) => {
		const formData = await request.formData();
		const email = normalizeEmail(readRequiredFormString(formData, "email"));

		if (!email) {
			return fail(400, {
				email: "",
				requestError: "Enter a valid email address.",
			});
		}

		// SECURITY: captchaToken is only read/sent on OTP request (this action), not
		// on verifyCode — Supabase's own SDK marks captchaToken on verifyOtp as
		// deprecated, since the abuse vector (unsolicited email sends) lives at
		// request time, not at verification time.
		const captchaToken = readOptionalFormString(formData, "cf-turnstile-response");

		const supabase = getSupabaseClient(locals);
		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				shouldCreateUser: true,
				...(captchaToken ? { captchaToken } : {}),
			},
		});

		if (error) {
			return fail(400, {
				email,
				requestError: "We could not send a code right now. Try again in a moment.",
			});
		}

		return {
			codeRequested: true,
			email,
		};
	},
	verifyCode: async ({ locals, request }) => {
		const formData = await request.formData();
		const email = normalizeEmail(readRequiredFormString(formData, "email"));
		const token = normalizeEmailOtp(readRequiredFormString(formData, "token"));
		const next = getSafeRedirectPath(readRequiredFormString(formData, "next"));

		if (!email || !token) {
			return fail(400, {
				codeRequested: true,
				email: email ?? "",
				verifyError: "Enter the 6-digit code from your email.",
			});
		}

		const supabase = getSupabaseClient(locals);
		const { error } = await supabase.auth.verifyOtp({
			email,
			token,
			type: "email",
		});

		if (error) {
			return fail(400, {
				codeRequested: true,
				email,
				verifyError: "That code did not work. Check the code and try again.",
			});
		}

		redirect(303, next);
	},
};
