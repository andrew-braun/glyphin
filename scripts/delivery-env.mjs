import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function firstValue(environment, dotEnv, keys) {
	for (const key of keys) {
		const value = environment[key] ?? dotEnv[key];
		if (value) return value;
	}

	return "";
}

export function resolveDeliveryCredentials(environment, dotEnv) {
	return {
		url: firstValue(environment, dotEnv, [
			"SUPABASE_DELIVERY_URL",
			"PUBLIC_SUPABASE_URL",
			"API_URL",
		]),
		anonKey: firstValue(environment, dotEnv, [
			"SUPABASE_DELIVERY_ANON_KEY",
			"PUBLIC_SUPABASE_ANON_KEY",
			"PUBLISHABLE_KEY",
		]),
	};
}

export function loadDeliveryCredentials(repoRoot) {
	const filePath = resolve(repoRoot, ".env");
	const dotEnv = {};

	if (existsSync(filePath)) {
		for (const rawLine of readFileSync(filePath, "utf8").split(/\r?\n/u)) {
			const line = rawLine.trim();
			if (!line || line.startsWith("#")) continue;

			const equalsIndex = line.indexOf("=");
			if (equalsIndex < 0) continue;

			const key = line.slice(0, equalsIndex).trim();
			let value = line.slice(equalsIndex + 1).trim();
			if (
				(value.startsWith('"') && value.endsWith('"')) ||
				(value.startsWith("'") && value.endsWith("'"))
			) {
				value = value.slice(1, -1);
			}

			dotEnv[key] = value;
		}
	}

	return resolveDeliveryCredentials(process.env, dotEnv);
}
