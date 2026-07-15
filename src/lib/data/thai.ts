/**
 * Thai Language Curriculum Data
 *
 * This sequence rewrites the original curriculum around the frequency-first,
 * real-world reading strategy captured in docs/concept/approach-thai.md.
 * The order now starts with high-payoff words and grapheme chunks that unlock
 * menus, storefronts, simple adjectives, and everyday survival vocabulary.
 *
 * Stage groups progress as follows:
 *   Stage 1 - Core payoff words and the first high-frequency vowels
 *   Stage 2 - Market and movement words with reusable syllable frames
 *   Stage 3 - Before-vowels and tone marks taught through sight words
 *   Stage 4 - Sibilants, short vowels, and price/menu language
 *   Stage 5 - High-class survival words, silent carriers, and food lexicon
 */
import type { CourseStage, LanguagePack, Lesson, LessonVocabularyEntry, Word } from "./types";

type BaseLesson = Omit<Lesson, "vocabulary">;

function createWord(
	thai: string,
	meaning: string,
	pronunciation: string,
	category: Word["category"],
	syllables: Word["syllables"],
	contextNote?: string,
): Word {
	return {
		thai,
		meaning,
		pronunciation,
		category,
		syllables,
		contextNote,
	};
}

function createPracticeEntry(
	word: Word,
	options: {
		tier?: LessonVocabularyEntry["tier"];
		sourceType?: LessonVocabularyEntry["sourceType"];
		drillTarget?: boolean;
	} = {},
): LessonVocabularyEntry {
	return {
		tier: options.tier ?? "core",
		sourceType: options.sourceType ?? "real",
		drillTarget: options.drillTarget ?? true,
		word,
	};
}

const baseLessons: BaseLesson[] = [
	{
		id: 1,
		stage: 1,
		title: "มาก — Your First High-Payoff Word",
		anchorWord: {
			thai: "มาก",
			meaning: "very / a lot",
			pronunciation: "mâak",
			category: "daily",
			syllables: [
				{ thai: "มา", sound: "maa" },
				{ thai: "ก", sound: "k" },
			],
			contextNote:
				"You'll hear and read มาก everywhere: ดีมาก (very good), เผ็ดมาก (very spicy), and discount copy that promises a lot.",
		},
		newLetters: [
			{
				character: "ม",
				romanization: "m",
				pronunciation: 'm as in "mother"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ม is ม ม้า (mor ma, horse). Picture the tall middle stroke as a horse's neck and the small loop as its head, then tie that horse word to the m sound.",
				position: "standalone",
			},
			{
				character: "า",
				romanization: "aa",
				pronunciation: 'long "aa" as in "father"',
				type: "vowel",
				mnemonic:
					"า is the right-side long aa stroke. It stands after the consonant and stretches the syllable into the long vowel you hear in มา and กา.",
				position: "right",
			},
			{
				character: "ก",
				romanization: "g/k",
				pronunciation: 'hard g/k sound; final ก closes like "k"',
				type: "consonant",
				class: "mid",
				mnemonic:
					"ก is ก ไก่ (gor gai, chicken), the classic Thai alphabet anchor. Picture the hook as the chicken's head and beak for the hard g/k sound.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "long-aa-right",
				name: "Long า Stretches Right",
				shortDescription: "า is written after the consonant and gives you a long aa sound",
				explanation:
					"Thai often places vowels around a consonant instead of in a straight line like English. The long vowel า sits to the right of the consonant and stretches the syllable into a clear aa sound.",
				examples: ["มาก = mâak", "ตา = taa"],
			},
			{
				id: "final-k-stop",
				name: "Final ก Ends in a Stop",
				shortDescription: "At the end of a syllable, ก closes sharply as a k sound",
				explanation:
					"Thai final consonants are often clipped. In มาก, the last ก does not open into a full English g. It closes the syllable with a short unreleased k sound.",
				examples: ["มาก = mâak"],
			},
			{
				id: "implied-short-o",
				name: 'Two Bare Consonants Often Add a Short "o"',
				shortDescription:
					"When Thai stacks two consonants with no written vowel, a short o often appears between them",
				explanation:
					"Once you know a few consonants, you can read more than long-vowel forms. In many short Thai syllables, two consonants written together with no vowel sign are read with an implied short o sound between them.",
				examples: ["นก = nok", "รถ = rot"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "m" sound?',
				options: ["ก", "ม", "น", "ด"],
				correctIndex: 1,
			},
			{
				type: "recognize",
				prompt: 'Which symbol makes the long "aa" sound?',
				options: ["า", "ิ", "ี", "ั"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does มาก mean?",
				options: ["mother", "very / a lot", "shop", "rice"],
				correctIndex: 1,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "very / a lot"?',
				options: ["มาก", "กาม", "มกา", "ดาก"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How does the final ก sound in มาก?",
				options: ["m", "k", "g", "n"],
				correctIndex: 1,
			},
			{
				type: "sound",
				prompt: "If two consonants appear together with no written vowel, what sound often shows up between them?",
				options: ['long "aa"', 'long "ee"', 'short "o"', 'long "oo"'],
				correctIndex: 2,
			},
		],
	},
	{
		id: 2,
		stage: 1,
		title: "ดี — A Core Word for Good Things",
		anchorWord: {
			thai: "ดี",
			meaning: "good",
			pronunciation: "dii",
			category: "daily",
			syllables: [{ thai: "ดี", sound: "dii" }],
			contextNote:
				"You'll see ดี inside greetings, reviews, and product copy. It is one of the most reusable positive words in beginner Thai.",
		},
		newLetters: [
			{
				character: "ด",
				romanization: "d/t",
				pronunciation: 'd as in "dog" at the start; clipped t at the end',
				type: "consonant",
				class: "mid",
				mnemonic:
					"ด is ด เด็ก (dor dek, child). Picture the loop as a child's round head beside a small body; ด starts words with d and closes as t.",
				position: "standalone",
			},
			{
				character: "ี",
				romanization: "ii",
				pronunciation: 'long "ee" as in "see"',
				type: "vowel",
				mnemonic:
					"ี is ิ with an extra length stroke on top. That extra stroke is your clue to hold the sound longer: short i becomes long ii.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "long-ii-above",
				name: "Long ี Sits Above",
				shortDescription: "ี is written above the consonant and gives you a long ee sound",
				explanation:
					"Thai vowels are often placed above, below, or around the consonant. In ดี, the consonant comes first and the long vowel ี sits above it, so you read ด then stretch into ee.",
				examples: ["ดี = dii", "สี = sii"],
			},
			{
				id: "initial-d-sound",
				name: "Initial ด Starts Cleanly",
				shortDescription: "At the start of a syllable, ด gives you a plain d sound",
				explanation:
					"Thai consonants can behave differently at the start and the end of a syllable. In ดี, ด is initial, so you read it as a straightforward d sound before the vowel.",
				examples: ["ดี = dii", "ดา = daa"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter starts with the "d" sound?',
				options: ["ก", "ด", "ม", "น"],
				correctIndex: 1,
			},
			{
				type: "recognize",
				prompt: 'Which vowel gives the long "ee" sound?',
				options: ["ี", "า", "ิ", "ั"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ดี mean?",
				options: ["good", "road", "eat", "shop"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "good"?',
				options: ["ดี", "ดิ", "ดา", "มี"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In ดี, where is the vowel written?",
				options: [
					"before the consonant",
					"after the consonant",
					"above the consonant",
					"below the consonant",
				],
				correctIndex: 2,
			},
		],
		reviewLetters: ["ม", "า", "ก"],
	},
	{
		id: 3,
		stage: 1,
		title: "กิน — The Everyday Food Verb",
		anchorWord: {
			thai: "กิน",
			meaning: "to eat",
			pronunciation: "gin",
			category: "food",
			syllables: [
				{ thai: "กิ", sound: "gi" },
				{ thai: "น", sound: "n" },
			],
			contextNote:
				"กิน appears everywhere in daily life, from restaurant invitations to questions about what you want to eat.",
		},
		newLetters: [
			{
				character: "น",
				romanization: "n",
				pronunciation: 'n as in "no"',
				type: "consonant",
				class: "low",
				mnemonic:
					"น is น หนู (nor nuu, mouse). Picture the curl as a little mouse body and tail, and use หนู to lock in the n sound.",
				position: "standalone",
			},
			{
				character: "ิ",
				romanization: "i",
				pronunciation: 'short "i" as in "sit"',
				type: "vowel",
				mnemonic:
					"ิ is the short i mark above the consonant. It has no extra length stroke, so keep the vowel quick in words like กิน.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "short-i-above",
				name: "Short ิ Sits Above",
				shortDescription: "The short i vowel appears above the consonant you read first",
				explanation:
					"Thai often asks you to scan above the line as you read. In กิน, the consonant ก comes first and the short vowel ิ is written above it, giving you gi before the final consonant closes the syllable.",
				examples: ["กิน = gin", "บิน = bin"],
			},
			{
				id: "final-n-stays-n",
				name: "Final น Stays N",
				shortDescription: "At the end of a syllable, น keeps a clear n sound",
				explanation:
					"Not every Thai final consonant gets clipped into a stop. Final น stays nasal and easy to hear, so กิน closes with a clear n sound.",
				examples: ["กิน = gin", "บิน = bin"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "n" sound?',
				options: ["ก", "น", "ด", "ม"],
				correctIndex: 1,
			},
			{
				type: "recognize",
				prompt: 'Which vowel gives the short "i" sound?',
				options: ["ิ", "ี", "า", "ั"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does กิน mean?",
				options: ["to eat", "market", "ten", "fresh"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "to eat"?',
				options: ["กิน", "กีน", "นิก", "มิน"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you read the end of กิน?",
				options: ["gii", "gin", "git", "gim"],
				correctIndex: 1,
			},
		],
		reviewLetters: ["ก", "ด", "ี", "ม", "า"],
	},
	{
		id: 4,
		stage: 2,
		title: "ตลาด — Read the Market Sign",
		anchorWord: {
			thai: "ตลาด",
			meaning: "market",
			pronunciation: "tà-làat",
			category: "place",
			syllables: [
				{ thai: "ตล", sound: "tà-l" },
				{ thai: "า", sound: "aa" },
				{ thai: "ด", sound: "t" },
			],
			contextNote:
				"Markets are everywhere in Thailand. You'll see ตลาด on signs for night markets, floating markets, and neighborhood markets.",
		},
		newLetters: [
			{
				character: "ต",
				romanization: "t",
				pronunciation: 't as in "stop" (unaspirated)',
				type: "consonant",
				class: "mid",
				mnemonic:
					"ต is ต เต่า (tor tao, turtle). Picture the rounded part as a turtle shell with a small head, then read it as the plain t/dt sound.",
				position: "standalone",
			},
			{
				character: "ล",
				romanization: "l",
				pronunciation: 'l as in "love"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ล is ล ลิง (lor ling, monkey). Let the long lower curve be the monkey's tail, and connect ลิง to the l sound.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "hidden-vowel-market",
				name: 'Hidden Short "a" Vowel',
				shortDescription:
					'When two consonants can\'t blend, a short "a" hides between them',
				explanation:
					'In Thai, when two consonants appear next to each other but can\'t form a natural cluster, a short "a" sound is inserted between them. In ตลาด, the ต and ล can\'t blend, so you say "tà-làat" not "tlàat". This hidden vowel is never written.',
				examples: [
					'ตล = tà-l (hidden "a" between ต and ล)',
					'ถนน = thà-nǒn (hidden "a" between ถ and น)',
				],
			},
			{
				id: "final-stop-market",
				name: "Final Consonants are Stopped",
				shortDescription: 'Consonants at the end of a syllable are "swallowed"',
				explanation:
					'When ด appears at the end of a word, it doesn\'t make a full "d" sound. Instead, your tongue touches the roof of your mouth but you don\'t release it. This is why ตลาด sounds like "tà-làat" and not "tà-làad".',
				examples: ["ตลาด = tà-làat", "หมด = mòt"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the plain "t" sound?',
				options: ["ถ", "ต", "ด", "ล"],
				correctIndex: 1,
			},
			{
				type: "recognize",
				prompt: 'Which letter makes the "l" sound?',
				options: ["ม", "น", "ล", "ก"],
				correctIndex: 2,
			},
			{
				type: "match",
				prompt: "What does ตลาด mean?",
				options: ["road", "market", "mother", "airport"],
				correctIndex: 1,
			},
			{
				type: "sound",
				prompt: 'Why is there an "a" between ต and ล in ตลาด?',
				options: [
					"Because it is written but invisible",
					'Because Thai inserts a short "a" when the consonants do not blend naturally',
					"Because the tone mark creates it",
					"Because ล always starts with a vowel",
				],
				correctIndex: 1,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "market"?',
				options: ["ตลาด", "ตาลด", "ลาดต", "ดาลต"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "ม", "า", "ด", "น", "ิ", "ี"],
	},
	{
		id: 5,
		stage: 2,
		title: "บิน — Reuse the -ิน Pattern",
		anchorWord: {
			thai: "บิน",
			meaning: "to fly",
			pronunciation: "bin",
			category: "transport",
			syllables: [
				{ thai: "บิ", sound: "bi" },
				{ thai: "น", sound: "n" },
			],
			contextNote:
				"บิน appears in airport language, travel offers, and casual talk about planes and trips. It also helps you see how reusable the -ิน frame is.",
		},
		newLetters: [
			{
				character: "บ",
				romanization: "b/p",
				pronunciation: 'b as in "bat" at the start; clipped p at the end',
				type: "consonant",
				class: "mid",
				mnemonic:
					"บ is บ ใบไม้ (bor bai mai, leaf). The open bowl shape can hold a leaf, and ใบไม้ gives you the b sound at the start.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "initial-b-sound",
				name: "Initial บ Starts With B",
				shortDescription: "At the start of a syllable, บ gives you a plain b sound",
				explanation:
					"Thai consonants often shift between initial and final positions. In บิน, บ comes first, so it sounds like a clean b before the short vowel and final consonant close the word.",
				examples: ["บิน = bin", "บา = baa"],
			},
			{
				id: "in-frame-pattern",
				name: "The -ิน Frame Repeats",
				shortDescription:
					"Once you know a syllable frame, swapping the first consonant unlocks more words",
				explanation:
					"กิน, บิน, and similar short words share the same short-i plus final-น frame. Thai gets much easier once you start seeing these reusable patterns instead of single isolated words.",
				examples: ["กิน = gin", "บิน = bin", "ดิน = din"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "b" sound at the start?',
				options: ["บ", "ด", "ม", "น"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does บิน mean?",
				options: ["to fly", "to eat", "market", "rice"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "to fly"?',
				options: ["บิน", "นบิ", "บีน", "ดิน"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Which word keeps the same -ิน pattern as บิน?",
				options: ["กิน", "มาก", "แม่", "ร้าน"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you pronounce บิน?",
				options: ["bin", "baan", "boon", "bii"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "น", "ิ", "ด", "ต", "ล", "า"],
	},
	{
		id: 6,
		stage: 3,
		title: "แม่ — Before Vowels and First Tone Marks",
		anchorWord: {
			thai: "แม่",
			meaning: "mother",
			pronunciation: "mâae",
			category: "daily",
			syllables: [
				{ thai: "แม", sound: "mae" },
				{ thai: "่", sound: "tone change" },
			],
			contextNote:
				"You'll see แม่ in family words, shop names, and cultural phrases. It also gives you your first look at a vowel written before the consonant.",
		},
		newLetters: [
			{
				character: "แ",
				romanization: "ae",
				pronunciation: 'long "ae" as in the vowel of "care"',
				type: "vowel",
				mnemonic:
					"แ is a double left-side vowel. The two front posts tell your eye to look left first, then come back to the consonant for ae.",
				position: "left",
			},
			{
				character: "่",
				romanization: "mai ek",
				pronunciation: "first tone mark written above the consonant",
				type: "tone_mark",
				mnemonic:
					"่ is mai ek, the first tone mark. It is one small stroke above the consonant, so read it as a compact tone cue.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "before-vowels-left",
				name: "Some Vowels Sit on the Left",
				shortDescription: "The vowel แ is written before the consonant you pronounce first",
				explanation:
					"Thai does not always place vowels after the consonant. In แม่, your eye has to notice แ on the left, then come back to read ม with that vowel sound attached.",
				examples: ["แม = mae", "แต่ = dtàae"],
			},
			{
				id: "mai-ek-tone-mark",
				name: "Meet Your First Tone Mark",
				shortDescription:
					"Tone marks sit above the consonant and change the sound of the whole syllable",
				explanation:
					"You do not need the full tone system at once. Start by recognizing that ่ lives above the consonant and changes the word you say. High-frequency sight words make tone marks easier to remember than abstract charts.",
				examples: ["แม่ = mâae", "แต่ = dtàae"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which vowel is written before the consonant?",
				options: ["แ", "า", "ิ", "ี"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which mark is mai ek?",
				options: ["่", "้", "แ", "ั"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does แม่ mean?",
				options: ["mother", "shop", "road", "fresh"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "mother"?',
				options: ["แม่", "แม", "มา", "แน"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "What changes when you add ่ above แม?",
				options: [
					"the vowel disappears",
					"the tone changes",
					"the final consonant changes",
					"the word becomes longer",
				],
				correctIndex: 1,
			},
		],
		reviewLetters: ["ม", "า", "ด", "ี", "ก", "น", "ิ"],
	},
	{
		id: 7,
		stage: 3,
		title: "ร้าน — The Word on Every Storefront",
		anchorWord: {
			thai: "ร้าน",
			meaning: "shop",
			pronunciation: "râan",
			category: "place",
			syllables: [
				{ thai: "ร้า", sound: "raa" },
				{ thai: "น", sound: "n" },
			],
			contextNote:
				"You'll see ร้าน everywhere: ร้านกาแฟ, ร้านอาหาร, ร้านยา. Learning it early pays off on almost every street.",
		},
		newLetters: [
			{
				character: "ร",
				romanization: "r",
				pronunciation: 'r as in "run" at the start; n at the end in some words',
				type: "consonant",
				class: "low",
				mnemonic:
					"ร is ร เรือ (ror ruea, boat). Picture the main curve as a boat hull rocking forward, and use เรือ to remember the r sound.",
				position: "standalone",
			},
			{
				character: "้",
				romanization: "mai tho",
				pronunciation: "second tone mark written above the consonant",
				type: "tone_mark",
				mnemonic:
					"้ is mai tho, the second tone mark. It looks heavier than mai ek, a good cue that this is the second above-letter tone mark.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "initial-r-sound",
				name: "Initial ร Gives You R",
				shortDescription: "At the start of a syllable, ร is read as an r sound",
				explanation:
					"Thai ร has a few different jobs, but in ร้าน it is straightforward: it starts the word with an r sound before the tone mark and vowel shape do the rest of the work.",
				examples: ["รา = raa", "ร้าน = râan"],
			},
			{
				id: "mai-tho-above",
				name: "Tone Marks Sit Above the Consonant",
				shortDescription:
					"Even when the vowel is on the right, the tone mark still sits above the main consonant",
				explanation:
					"In ร้าน, the long vowel า is on the right, but the tone mark ้ still sits above ร. Thai asks you to scan the whole syllable block, not just read from left to right.",
				examples: ["ร้า = râa", "ร้าน = râan"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter starts with the "r" sound?',
				options: ["ร", "ล", "น", "ม"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which mark is mai tho?",
				options: ["่", "้", "ี", "แ"],
				correctIndex: 1,
			},
			{
				type: "match",
				prompt: "What does ร้าน mean?",
				options: ["mother", "shop", "ten", "very"],
				correctIndex: 1,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "shop"?',
				options: ["ร้าน", "ร่าน", "ราน", "น้าร"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Where is the tone mark written in ร้าน?",
				options: [
					"under the consonant",
					"above the consonant",
					"before the vowel",
					"after the final consonant",
				],
				correctIndex: 1,
			},
		],
		reviewLetters: ["น", "า", "ม", "ด", "ต", "ล", "แ", "่"],
	},
	{
		id: 8,
		stage: 4,
		title: "ชุด — Short U in Menu Combos",
		anchorWord: {
			thai: "ชุด",
			meaning: "set / combo",
			pronunciation: "chút",
			category: "food",
			syllables: [
				{ thai: "ชุ", sound: "chu" },
				{ thai: "ด", sound: "t" },
			],
			contextNote:
				"ชุด shows up in set menus, school uniforms, and clothing signs. On menus, it often means a fixed combo or meal set.",
		},
		newLetters: [
			{
				character: "ช",
				romanization: "ch",
				pronunciation: 'ch as in "check"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ช is ช ช้าง (chor chaang, elephant). Picture the long dropping stroke as an elephant trunk, and use ช้าง for the ch sound.",
				position: "standalone",
			},
			{
				character: "ุ",
				romanization: "u",
				pronunciation: 'short "u" as in "put"',
				type: "vowel",
				mnemonic:
					"ุ is the short u mark tucked under the consonant. Low on the page and short in sound: use it for the quick u in ชุด.",
				position: "below",
			},
		],
		rulesIntroduced: [
			{
				id: "short-u-below",
				name: "Short ุ Sits Below",
				shortDescription:
					"The short u vowel is written below the consonant you pronounce first",
				explanation:
					"Thai keeps asking you to scan vertically. In ชุด, the consonant ช comes first and the short vowel ุ is tucked underneath, so you read chu before the final consonant closes the syllable.",
				examples: ["ชุ = chu", "ชุด = chút"],
			},
			{
				id: "dead-syllable-stop",
				name: "Short Vowels Feel Clipped in Closed Syllables",
				shortDescription:
					"A short vowel plus a final stop makes the whole word feel quick and closed",
				explanation:
					"ชุด feels short because the vowel is short and the final consonant is stopped. This clipped rhythm shows up in lots of practical Thai words on menus and signs.",
				examples: ["ชุด = chút", "มุด = mút"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "ch" sound?',
				options: ["ช", "ส", "บ", "ร"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which vowel is written below the consonant?",
				options: ["ุ", "ิ", "า", "แ"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ชุด mean on a menu?",
				options: ["set / combo", "fresh", "rice", "to fly"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "set / combo"?',
				options: ["ชุด", "ชาด", "สด", "ชดุ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How does the final ด sound in ชุด?",
				options: ["d", "t", "n", "silent"],
				correctIndex: 1,
			},
		],
		reviewLetters: ["ด", "ต", "น", "ิ", "า", "ร", "้"],
	},
	{
		id: 9,
		stage: 4,
		title: "สิบ — Read Prices Faster",
		anchorWord: {
			thai: "สิบ",
			meaning: "ten",
			pronunciation: "sìp",
			category: "sign",
			syllables: [
				{ thai: "สิ", sound: "si" },
				{ thai: "บ", sound: "p" },
			],
			contextNote:
				"สิบ helps with prices, receipts, and quantity labels. Even one number word gives you real payoff in markets and transit.",
		},
		newLetters: [
			{
				character: "ส",
				romanization: "s",
				pronunciation: 's as in "sun"',
				type: "consonant",
				class: "high",
				mnemonic:
					"ส is ส เสือ (sor suea, tiger). The pointed, striped-looking shape can cue a tiger, and เสือ starts with the crisp s sound.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "initial-s-sound",
				name: "Initial ส Gives You S",
				shortDescription: "At the start of a syllable, ส is a clean s sound",
				explanation:
					"Thai has several letters that can map to an s-like sound, but you do not need them all at once. Start with ส because it appears constantly in useful words, labels, and polite formulas.",
				examples: ["สิบ = sìp", "สด = sòt"],
			},
			{
				id: "final-b-to-p",
				name: "Final บ Closes as P",
				shortDescription: "At the end of a word, บ does not stay a full b sound",
				explanation:
					"Like several Thai final consonants, บ gets clipped at the end of a syllable. In สิบ, your lips close for p without the full released English b sound.",
				examples: ["สิบ = sìp", "บัส = bát"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "s" sound?',
				options: ["ส", "ช", "ร", "บ"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does สิบ mean?",
				options: ["rice", "shop", "ten", "mother"],
				correctIndex: 2,
			},
			{
				type: "sound",
				prompt: "Why does final บ in สิบ sound like p?",
				options: [
					"Thai drops all final consonants",
					"final บ closes as p in Thai",
					"the tone mark changes it",
					"the vowel makes it silent",
				],
				correctIndex: 1,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "ten"?',
				options: ["สิบ", "บิส", "สด", "สบิ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you pronounce สิบ?",
				options: ["sib", "sii", "sip", "sup"],
				correctIndex: 2,
			},
		],
		reviewLetters: ["บ", "ิ", "น", "ด", "ช", "ุ"],
	},
	{
		id: 10,
		stage: 5,
		title: "ข้าว — A Survival Food Word",
		anchorWord: {
			thai: "ข้าว",
			meaning: "rice",
			pronunciation: "khâao",
			category: "food",
			syllables: [
				{ thai: "ข้า", sound: "khaa" },
				{ thai: "ว", sound: "w glide" },
			],
			contextNote:
				"ข้าว is one of the highest-value food words in Thailand. It appears on menus, in meal names, and in everyday conversation.",
		},
		newLetters: [
			{
				character: "ข",
				romanization: "kh",
				pronunciation: 'kh with a puff of air, like the start of "khaki"',
				type: "consonant",
				class: "high",
				mnemonic:
					"ข is ข ไข่ (khor khai, egg). Picture the open curve as an eggshell; ไข่ starts with the puffed kh sound that separates ข from ก.",
				position: "standalone",
			},
			{
				character: "ว",
				romanization: "w",
				pronunciation: 'w as in "water"; can help form vowel glides',
				type: "consonant",
				class: "low",
				mnemonic:
					"ว is ว แหวน (wor waen, ring). The rounded curl looks like a ring, and แหวน gives you the w sound.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "kh-vs-k",
				name: "ข Adds Air to K",
				shortDescription: "ข is not the same as ก; it has a stronger puff of air",
				explanation:
					"Thai distinguishes plain k sounds from aspirated kh sounds. If you hold your hand in front of your mouth, ข pushes out a little air in a way ก does not.",
				examples: ["กา = gaa", "ข่าว = khàao", "ข้าว = khâao"],
			},
			{
				id: "aaw-glide",
				name: "ว Can Help Build a Vowel Glide",
				shortDescription:
					"In words like ข้าว, ว helps shape the ending vowel sound instead of behaving like a full separate consonant",
				explanation:
					"Not every written consonant is heard as a clean standalone consonant. In ข้าว, ว helps form the -าว ending, so you hear a smooth glide rather than a sharp final w.",
				examples: ["ข่าว = khàao", "ข้าว = khâao"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter gives the aspirated "kh" sound?',
				options: ["ก", "ข", "บ", "ห"],
				correctIndex: 1,
			},
			{
				type: "recognize",
				prompt: "Which letter helps build the -าว ending in ข้าว?",
				options: ["น", "ว", "ร", "ล"],
				correctIndex: 1,
			},
			{
				type: "match",
				prompt: "What does ข้าว mean?",
				options: ["rice", "fresh", "ten", "mother"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "rice"?',
				options: ["ข้าว", "ขาว", "ข้า", "ขน"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What is the key difference between ก and ข?",
				options: [
					"ก is nasal and ข is silent",
					"ข has a puff of air and ก does not",
					"they sound the same",
					"ข is only used at the end of words",
				],
				correctIndex: 1,
			},
		],
		reviewLetters: ["า", "ก", "ม", "ร", "้", "น"],
	},
	{
		id: 11,
		stage: 5,
		title: "หมู — Leading ห in a Real Menu Word",
		anchorWord: {
			thai: "หมู",
			meaning: "pork",
			pronunciation: "mǔu",
			category: "food",
			syllables: [
				{ thai: "ห", sound: "leading h" },
				{ thai: "มู", sound: "muu" },
			],
			contextNote:
				"หมู is everywhere on Thai menus. It is also the cleanest early example of the leading-ห pattern that learners need sooner rather than later.",
		},
		newLetters: [
			{
				character: "ห",
				romanization: "h",
				pronunciation: 'h as in "hello"; often used as a leading tone helper',
				type: "consonant",
				class: "high",
				mnemonic:
					"ห is ห หีบ (hor hiip, chest). Picture the tall shape as a chest with a lid; in words like หมู, this h-letter can also guide the tone.",
				position: "standalone",
			},
			{
				character: "ู",
				romanization: "uu",
				pronunciation: 'long "oo" as in "food"',
				type: "vowel",
				mnemonic:
					"ู is the long uu mark below the consonant. It is like ุ with a longer lower tail, so let the oo sound run longer.",
				position: "below",
			},
		],
		rulesIntroduced: [
			{
				id: "leading-h-pattern",
				name: "Leading ห Changes the Tone Pattern",
				shortDescription:
					"In common words like หมู, ห helps a following low consonant behave differently",
				explanation:
					"This is one of the Thai chunks worth learning as a whole. In words like หมู, the ห is not there to give you a full h sound before every letter. It helps control the syllable pattern of the low consonant that follows.",
				examples: ["หมู = mǔu", "หมอ = mǎaw"],
			},
			{
				id: "long-uu-below",
				name: "Long ู Sits Below",
				shortDescription: "The long oo vowel is written below the consonant",
				explanation:
					"Thai uses the space below the line too. In หมู and หู, the vowel ู sits under the consonant and gives you a long oo sound.",
				examples: ["หมู = mǔu", "ดู = duu"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which letter is the leading ห in หมู?",
				options: ["ห", "ม", "ข", "อ"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: 'Which vowel makes the long "oo" sound?',
				options: ["ุ", "ู", "ิ", "ี"],
				correctIndex: 1,
			},
			{
				type: "match",
				prompt: "What does หมู mean?",
				options: ["pork", "rice", "shop", "food"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "pork"?',
				options: ["หมู", "มู", "หมา", "ขู"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Why is ห useful in words like หมู?",
				options: [
					"It adds a final consonant",
					"It changes the tone pattern of the low consonant that follows",
					"It marks plural",
					"It makes the vowel longer all by itself",
				],
				correctIndex: 1,
			},
		],
		reviewLetters: ["ม", "ข", "า", "ว"],
	},
	{
		id: 12,
		stage: 5,
		title: "อาหาร — Silent Carrier, Useful Sign",
		anchorWord: {
			thai: "อาหาร",
			meaning: "food",
			pronunciation: "aa-hǎan",
			category: "food",
			syllables: [
				{ thai: "อา", sound: "aa" },
				{ thai: "หา", sound: "hǎa" },
				{ thai: "ร", sound: "n" },
			],
			contextNote:
				"อาหาร appears on restaurant signs, food courts, and delivery labels. Once you can read ร้านอาหาร, the street starts feeling more legible.",
		},
		newLetters: [
			{
				character: "อ",
				romanization: "silent carrier",
				pronunciation:
					"placeholder consonant used when a syllable begins with a vowel sound",
				type: "consonant",
				class: "mid",
				mnemonic:
					"อ is อ อ่าง (or aang, basin). The round basin shape can hold a vowel, which fits its job as a silent carrier in อา and อาหาร.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "silent-carrier",
				name: "อ Can Carry a Vowel Silently",
				shortDescription:
					"Thai still wants a consonant slot even when the syllable begins with a vowel sound",
				explanation:
					"In อาหาร, the first syllable sounds like aa, but Thai still writes a consonant letter to hold that opening vowel. อ acts as the carrier without adding a strong sound of its own.",
				examples: ["อา = aa", "อาหาร = aa-hǎan"],
			},
			{
				id: "final-r-to-n",
				name: 'Final ร Often Sounds Like "n"',
				shortDescription:
					'At the end of a syllable, ร is often heard as "n" instead of a full r',
				explanation:
					"Thai final consonants do not always match their initial sounds. In อาหาร, the final ร is not read as a strong r. It closes the word with an n-like ending instead.",
				examples: ["อาหาร = aa-hǎan", "สาร = sǎan"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which letter is the silent carrier?",
				options: ["อ", "ห", "ร", "ว"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does อาหาร mean?",
				options: ["food", "set menu", "mother", "to fly"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "food"?',
				options: ["อาหาร", "หารอา", "หมู", "ผัด"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How does the final ร sound in อาหาร?",
				options: ["r", "l", "n", "silent"],
				correctIndex: 2,
			},
			{
				type: "recognize",
				prompt: "Why does อาหาร begin with อ?",
				options: [
					"It marks plural",
					"Thai needs a consonant slot, so อ carries the opening vowel",
					"It is only decorative",
					"It always means the word is formal",
				],
				correctIndex: 1,
			},
		],
		reviewLetters: ["ห", "ร", "า", "ด", "น"],
	},
	{
		id: 13,
		stage: 5,
		title: "ผัด — Unlock Stir-Fry Words",
		anchorWord: {
			thai: "ผัด",
			meaning: "stir-fry",
			pronunciation: "phàt",
			category: "food",
			syllables: [
				{ thai: "ผั", sound: "pha" },
				{ thai: "ด", sound: "t" },
			],
			contextNote:
				"ผัด appears on some of the most common Thai dishes, from ผัดไทย to vegetable stir-fries. It is one of the highest-value cooking words you can learn.",
		},
		newLetters: [
			{
				character: "ผ",
				romanization: "ph",
				pronunciation:
					'ph with a puff of air, like the start of "photo" without the f sound',
				type: "consonant",
				class: "high",
				mnemonic:
					"ผ is ผ ผึ้ง (phor phueng, bee). Picture the open shape as wings and body; ผึ้ง starts with the puffed ph sound.",
				position: "standalone",
			},
			{
				character: "ั",
				romanization: "a",
				pronunciation: 'short "a" as in "cut"',
				type: "vowel",
				mnemonic:
					"ั is the short a cap above the consonant. It sits close and quick, just like the clipped a in ผัด and ผัก.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "ph-vs-b",
				name: "ผ Gives You an Airy Ph Sound",
				shortDescription: "ผ is not the same as บ; it starts with a stronger puff of air",
				explanation:
					"Thai distinguishes plain b/p-like sounds from aspirated ph sounds. In ผัด, you can feel a burst of air at the start that you do not get with บ.",
				examples: ["ผัด = phàt", "ผัน = phan"],
			},
			{
				id: "short-a-above",
				name: "Short ั Sits Above",
				shortDescription: "The short a vowel is written above the consonant",
				explanation:
					"Thai uses a small mark above the consonant for the short a sound in words like ผัด. It is quicker and more clipped than the long right-side vowel า you learned earlier.",
				examples: ["ผัด = phàt", "ผัน = phan"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the aspirated "ph" sound?',
				options: ["ผ", "บ", "ห", "ข"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: 'Which vowel gives the short "a" sound above the consonant?',
				options: ["ั", "า", "แ", "ุ"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ผัด mean?",
				options: ["stir-fry", "food court", "shop", "ten"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "stir-fry"?',
				options: ["ผัด", "ผาด", "ผาก", "ชุด"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Which word shares the same ผั- opening as ผัด?",
				options: ["ผัก", "ข้าว", "บิน", "แม่"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ด", "ต", "ข", "ห", "อ", "ม", "า"],
	},
	{
		id: 14,
		stage: 6,
		title: "ของ — The ng Sound and the aw Vowel",
		anchorWord: {
			thai: "ของ",
			meaning: "of / belonging to",
			pronunciation: "khǎwng",
			category: "daily",
			syllables: [
				{ thai: "ขอ", sound: "khǎw" },
				{ thai: "ง", sound: "ng" },
			],
			contextNote:
				"ของ is one of the most common words in Thai. It links things to owners (ของผม, mine), labels stuff to buy or eat (ของกิน, things to eat), and shows up constantly on signs and menus.",
		},
		newLetters: [
			{
				character: "ง",
				romanization: "ng",
				pronunciation: 'ng as in "singer"; used at the start or end of a syllable',
				type: "consonant",
				class: "low",
				mnemonic:
					"ง is ง งู (ngor nguu, snake). Picture the curving body of a snake; ง makes the ng sound that English only uses at the ends of words.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "ng-sound",
				name: "ง Is the ng Sound",
				shortDescription: "ง gives the ng sound at the start or end of a syllable",
				explanation:
					"English only uses ng at the ends of words like 'song'. Thai uses ง freely, including at the start of a syllable. Either way it is the same soft nasal ng.",
				examples: ["ของ = khǎwng", "งา = ngaa"],
			},
			{
				id: "final-ng",
				name: "Final ง Closes With ng",
				shortDescription: "At the end of a syllable, ง closes it with the nasal ng",
				explanation:
					"Final ง is extremely common in Thai. It is fully pronounced as the ng you hear at the end of 'song', not clipped like the final stops you learned earlier.",
				examples: ["ของ = khǎwng", "ทาง = thaang"],
			},
			{
				id: "aw-vowel-or",
				name: "อ Can Be the aw Vowel",
				shortDescription: "After a consonant, อ gives the long aw sound",
				explanation:
					"You met อ as a silent carrier earlier. When อ is written after a consonant with no other vowel, it instead acts as the long aw vowel you hear in ของ and รอ.",
				examples: ["ของ = khǎwng", "รอ = raw"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "ng" sound?',
				options: ["ง", "ม", "น", "ก"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "At the end of a syllable, how does ง sound?",
				options: ["k", "ng", "n", "m"],
				correctIndex: 1,
			},
			{
				type: "sound",
				prompt: "When อ comes after a consonant as a vowel, what sound does it give?",
				options: ['long "aw"', 'long "ee"', 'short "a"', 'long "oo"'],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ของ mean?",
				options: ["of / belonging to", "way", "game", "medicine"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "of / belonging to"?',
				options: ["ของ", "งอข", "ขงอ", "ของน"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Which sound ends the word ของ?",
				options: ["ng", "k", "t", "m"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ข", "อ", "ร", "ก"],
	},
	{
		id: 15,
		stage: 6,
		title: "ทาง — Aspirated th and Wayfinding",
		anchorWord: {
			thai: "ทาง",
			meaning: "way / direction",
			pronunciation: "thaang",
			category: "sign",
			syllables: [
				{ thai: "ทา", sound: "thaa" },
				{ thai: "ง", sound: "ng" },
			],
			contextNote:
				"ทาง marks routes and directions on signs everywhere. ทางออก (way out / exit) is one of the most useful sign words you can learn to spot.",
		},
		newLetters: [
			{
				character: "ท",
				romanization: "th",
				pronunciation: 'th with a puff of air, like the "t" in "top" (not the th in "the")',
				type: "consonant",
				class: "low",
				mnemonic:
					"ท is ท ทหาร (thor thahaan, soldier). Picture a soldier standing tall; ท gives the aspirated th sound with a clear puff of air.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "low-th",
				name: "ท Is an Aspirated th",
				shortDescription: "ท starts with a puff of air, like the t in 'top'",
				explanation:
					"Thai ท is not the soft th in 'the'. It is a t sound released with a clear puff of air, the same way English starts the word 'top'.",
				examples: ["ทาง = thaang", "ทา = thaa"],
			},
			{
				id: "th-vs-t",
				name: "ท and ต Are Different t Sounds",
				shortDescription: "ต is a tight, unaspirated t (dt); ท adds a puff of air",
				explanation:
					"ต and ท both involve the tongue behind the teeth, but ต is clipped with no air (closer to a d/t blend) while ท releases a puff of air. Keeping them apart changes the word.",
				examples: ["ตา = dtaa", "ทา = thaa"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the aspirated "th" sound?',
				options: ["ท", "ต", "ด", "บ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How is ท different from ต?",
				options: [
					"ท is released with a puff of air",
					"they are identical",
					"ท is a vowel",
					"ต is nasal",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ทาง mean?",
				options: ["way / direction", "of", "closed", "medicine"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "way / direction"?',
				options: ["ทาง", "งทา", "ทงา", "ทาน"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Which sound ends the word ทาง?",
				options: ["ng", "th", "k", "aa"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["า", "ง", "ต", "อ"],
	},
	{
		id: 16,
		stage: 6,
		title: "จะ — j and the Short-a Glottal Stop",
		anchorWord: {
			thai: "จะ",
			meaning: "will (future particle)",
			pronunciation: "jà",
			category: "daily",
			syllables: [{ thai: "จะ", sound: "jà" }],
			contextNote:
				"จะ is a core grammar word placed before a verb to mean something will happen: จะกิน (will eat), จะมา (will come). You'll read it in countless sentences.",
		},
		newLetters: [
			{
				character: "จ",
				romanization: "j",
				pronunciation: 'j as in "jar", but lighter and unaspirated',
				type: "consonant",
				class: "mid",
				mnemonic:
					"จ is จ จาน (jor jaan, plate). Picture a round dinner plate; จ gives a light, crisp j sound.",
				position: "standalone",
			},
			{
				character: "ะ",
				romanization: "a",
				pronunciation: 'short "a" cut off by a quick glottal stop, like a clipped "ah!"',
				type: "vowel",
				mnemonic:
					"ะ is the two-dot short-a written to the right of the consonant. It ends the syllable abruptly, like catching your breath after 'ah'.",
				position: "right",
			},
		],
		rulesIntroduced: [
			{
				id: "j-sound",
				name: "จ Is a Light j",
				shortDescription: "จ gives an unaspirated j sound",
				explanation:
					"จ is close to the English j in 'jar' but lighter, with no puff of air. It is a mid-class consonant, which keeps its tones predictable.",
				examples: ["จะ = jà", "จาน = jaan"],
			},
			{
				id: "short-a-glottal",
				name: "ะ Is a Clipped Short a",
				shortDescription: "ะ sits after the consonant and ends with a glottal stop",
				explanation:
					"The ะ vowel gives a short a, then closes the syllable sharply with a glottal stop (the catch in the middle of 'uh-oh'). It is quicker than the long า.",
				examples: ["จะ = jà", "กะ = gà"],
			},
			{
				id: "three-a-vowels",
				name: "Three Ways to Write a",
				shortDescription: "า is long; ั is short above; ะ is short with a hard stop",
				explanation:
					"You now know all three core a-vowels: า stretches long to the right, ั is a quick short a above the consonant, and ะ is a short a after it that ends in a glottal stop.",
				examples: ["มา = maa", "มัน = man", "จะ = jà"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "j" sound?',
				options: ["จ", "ช", "ต", "ด"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: 'Which vowel is the short "a" that ends with a glottal stop?',
				options: ["ะ", "า", "ั", "ิ"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does จะ mean?",
				options: ["will (future)", "way", "of", "game"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How does the syllable จะ end?",
				options: [
					"with a quick glottal stop",
					"with a long aa",
					"with an ng sound",
					"with a k sound",
				],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: "Which Thai spelling is the future particle?",
				options: ["จะ", "ชะ", "จา", "ตะ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "ช", "า", "ั"],
	},
	{
		id: 17,
		stage: 6,
		title: "เกม — Your First Leading Vowel",
		anchorWord: {
			thai: "เกม",
			meaning: "game",
			pronunciation: "geem",
			category: "daily",
			syllables: [
				{ thai: "เก", sound: "gee" },
				{ thai: "ม", sound: "m" },
			],
			contextNote:
				"เกม is a loanword you'll see on phones, arcades, and shopfronts like ร้านเกม (game shop). It's a clean way to learn how leading vowels work.",
		},
		newLetters: [
			{
				character: "เ",
				romanization: "e",
				pronunciation: 'long "e" as in "they"',
				type: "vowel",
				mnemonic:
					"เ is the long-e vowel written BEFORE the consonant, even though you say the consonant first. Spot เ, jump to the consonant after it, then add the e.",
				position: "left",
			},
		],
		rulesIntroduced: [
			{
				id: "leading-e-vowel",
				name: "เ Is Written Before the Consonant",
				shortDescription: "เ appears to the left but is pronounced after the consonant",
				explanation:
					"Some Thai vowels are written in front of their consonant even though they are spoken after it. เ is the first of these: it gives a long e, but you read the consonant that follows it first.",
				examples: ["เก = gee", "เกม = geem"],
			},
			{
				id: "scan-left-rule",
				name: "Scan Left for Leading Vowels",
				shortDescription: "When a word starts with เ, read the next consonant first",
				explanation:
					"When you see a leading vowel like เ at the front of a syllable, do not read straight across. Read the consonant after it, then wrap the vowel around. This same habit covers ไ, ใ, and โ next.",
				examples: ["เกม = geem", "เท = thee"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which vowel is written before the consonant and gives a long "e"?',
				options: ["เ", "แ", "า", "ิ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In เกม, where is เ written and when is it pronounced?",
				options: [
					"before the consonant, but pronounced after it",
					"after the consonant",
					"above the consonant",
					"below the consonant",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เกม mean?",
				options: ["game", "way", "medicine", "closed"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "game"?',
				options: ["เกม", "แกม", "เมก", "กเม"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you read a word that starts with เ?",
				options: [
					"read the next consonant first, then add the vowel",
					"read strictly left to right",
					"ignore the เ",
					"the เ is silent",
				],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "ม", "แ"],
	},
	{
		id: 18,
		stage: 6,
		title: "ไก่ — The Two ai Vowels",
		anchorWord: {
			thai: "ไก่",
			meaning: "chicken",
			pronunciation: "gài",
			category: "food",
			syllables: [{ thai: "ไก่", sound: "gài" }],
			contextNote:
				"ไก่ means chicken and appears on menus everywhere — ข้าวมันไก่ (chicken rice) is a national favorite. It also teaches the two leading ai vowels.",
		},
		newLetters: [
			{
				character: "ไ",
				romanization: "ai",
				pronunciation: 'the "ai" sound as in "Thai"',
				type: "vowel",
				mnemonic:
					"ไ (ไม้มลาย, mai malai) is the common ai vowel, written before the consonant. Note the small flag curling off the top.",
				position: "left",
			},
			{
				character: "ใ",
				romanization: "ai",
				pronunciation: 'the same "ai" sound as ไ',
				type: "vowel",
				mnemonic:
					"ใ (ไม้ม้วน, mai muan) sounds identical to ไ but appears in only about 20 specific words you memorize. Note the curled-in top.",
				position: "left",
			},
		],
		rulesIntroduced: [
			{
				id: "leading-ai",
				name: "ไ and ใ Are Leading ai Vowels",
				shortDescription: "Both sound like 'ai' and are written before the consonant",
				explanation:
					"ไ and ใ are leading vowels, just like เ: written in front of the consonant, pronounced after it. Both give the same ai sound you hear in the word 'Thai'.",
				examples: ["ไก่ = gài", "ใจ = jai"],
			},
			{
				id: "mai-malai-vs-muan",
				name: "Two Spellings, One Sound",
				shortDescription: "ไ is the common ai; ใ covers only about 20 must-know words",
				explanation:
					"ไ (mai malai) is by far the more common spelling. ใ (mai muan) sounds exactly the same but is used in roughly 20 fixed words, such as ใจ (heart), ใหม่ (new), and ใช่ (yes). Those are worth memorizing as a set.",
				examples: ["ไก่ = gài", "ใจ = jai"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which vowel gives the "ai" sound and is the common one?',
				options: ["ไ", "ใ", "เ", "แ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do ไ and ใ differ in sound?",
				options: ["they sound identical", "ไ is longer", "ใ is a tone mark", "ไ is silent"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ไก่ mean?",
				options: ["chicken", "game", "way", "medicine"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "chicken"?',
				options: ["ไก่", "ใก่", "ไก", "กไ่"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "ใ (mai muan) is used in roughly how many words?",
				options: ["about 20", "over a thousand", "none", "about two hundred"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "่", "จ"],
	},
	{
		id: 19,
		stage: 6,
		title: "โต — The Leading Long-o Vowel",
		anchorWord: {
			thai: "โต",
			meaning: "big / to grow",
			pronunciation: "dtoo",
			category: "daily",
			syllables: [{ thai: "โต", sound: "dtoo" }],
			contextNote:
				"โต means big or to grow up. It teaches the leading long-o vowel โ, which — like เ and ไ — is written before the consonant but spoken after it.",
		},
		newLetters: [
			{
				character: "โ",
				romanization: "o",
				pronunciation: 'long "o" as in "go"',
				type: "vowel",
				mnemonic:
					"โ is the long-o vowel with a tall vertical stroke, written before the consonant. Like เ and ไ, read the consonant after it first.",
				position: "left",
			},
		],
		rulesIntroduced: [
			{
				id: "leading-long-o",
				name: "โ Is a Leading Long o",
				shortDescription: "โ sits before the consonant and gives a long o",
				explanation:
					"โ is another leading vowel. It is written in front of the consonant and gives a clean long o, like the vowel in English 'go'.",
				examples: ["โต = dtoo", "โล = loo"],
			},
			{
				id: "leading-vowel-family",
				name: "The Leading-Vowel Family",
				shortDescription: "เ, ไ, ใ, and โ are all written before the consonant",
				explanation:
					"You now know four leading vowels: เ (e), ไ and ใ (ai), and โ (o). All four break the left-to-right order — write them first, but read the following consonant before adding the vowel.",
				examples: ["เกม = geem", "ไก่ = gài", "โต = dtoo"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which vowel gives a long "o" and is written before the consonant?',
				options: ["โ", "เ", "แ", "ไ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In โต, which sound do you say first?",
				options: [
					"the consonant ต, then the o",
					"the o, then ต",
					"they blend together",
					"ต is silent",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does โต mean?",
				options: ["big / to grow", "chicken", "closed", "game"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "big"?',
				options: ["โต", "โด", "เต", "ตโ"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which of these vowels is NOT written before the consonant?",
				options: ["ี", "เ", "ไ", "โ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ต", "เ", "ไ"],
	},
	{
		id: 20,
		stage: 6,
		title: "ปิด — Mid p and the Open/Closed Pair",
		anchorWord: {
			thai: "ปิด",
			meaning: "closed",
			pronunciation: "bpìt",
			category: "sign",
			syllables: [
				{ thai: "ปิ", sound: "bpì" },
				{ thai: "ด", sound: "t" },
			],
			contextNote:
				"ปิด (closed) and เปิด (open) are the most useful sign pair in Thailand — on shops, doors, and opening hours. ป is a tight p, easy to confuse with บ.",
		},
		newLetters: [
			{
				character: "ป",
				romanization: "bp",
				pronunciation:
					'a tight, unaspirated p, like the p in "spin" (between English b and p)',
				type: "consonant",
				class: "mid",
				mnemonic:
					"ป is ป ปลา (bpor bplaa, fish). Picture a tall fish standing on its tail; ป is the unaspirated p that pairs with the dt sound of ต.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "mid-p",
				name: "ป Is a Tight, Unaspirated p",
				shortDescription: "ป has no puff of air, like the p in 'spin'",
				explanation:
					"ป is a mid-class p with no aspiration. To an English ear it sits between b and p, like the p in 'spin'. It is distinct from the airy ผ you already know.",
				examples: ["ปิด = bpìt", "ปา = bpaa"],
			},
			{
				id: "p-vs-b",
				name: "ป and บ Look and Sound Close",
				shortDescription: "ป (bp) and บ (b) are easy to mix up",
				explanation:
					"ป and บ have similar shapes and similar sounds. ป is taller with a flag on top and is slightly tighter. Compare ปิด (closed) with บิน (to fly) to feel the difference.",
				examples: ["ปิด = bpìt", "บิน = bin"],
			},
			{
				id: "open-closed-pair",
				name: "เปิด / ปิด: Open and Closed",
				shortDescription: "Adding the leading vowel เ turns ปิด (closed) into เปิด (open)",
				explanation:
					"This is the highest-value sign pair you can learn. ปิด means closed; put the leading vowel เ in front and you get เปิด, meaning open. You'll read both on doors every day.",
				examples: ["ปิด = bpìt (closed)", "เปิด = bpèrt (open)"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is the tight, unaspirated "p"?',
				options: ["ป", "บ", "ผ", "ด"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How does ป differ from ผ?",
				options: [
					"ป has no puff of air; ผ does",
					"they are identical",
					"ป is a vowel",
					"ผ is nasal",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ปิด mean?",
				options: ["closed", "open", "big", "chicken"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "closed"?',
				options: ["ปิด", "บิด", "ผิด", "ปิน"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เปิด mean?",
				options: ["open", "closed", "medicine", "way"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["บ", "ผ", "ิ", "ด", "เ"],
	},
	{
		id: 21,
		stage: 6,
		title: "ยา — y and Glide Finals",
		anchorWord: {
			thai: "ยา",
			meaning: "medicine",
			pronunciation: "yaa",
			category: "sign",
			syllables: [{ thai: "ยา", sound: "yaa" }],
			contextNote:
				"ยา means medicine — ร้านขายยา (pharmacy) is a key sign to recognize. ย also closes many words as a y-glide, alongside ว as a w-glide.",
		},
		newLetters: [
			{
				character: "ย",
				romanization: "y",
				pronunciation:
					'y as in "yes"; at the end of a syllable it forms a glide like the "y" in "boy"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ย is ย ยักษ์ (yor yak, giant). Picture a towering giant; ย gives the y sound at the start and a y-glide at the end.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "y-sound",
				name: "ย Is a y Glide",
				shortDescription: "ย gives the y sound at the start of a syllable",
				explanation:
					"At the start of a syllable, ย is the y in 'yes'. It is a low-class consonant. The same letter can also close a syllable as a y-glide.",
				examples: ["ยา = yaa", "ยาย = yaai"],
			},
			{
				id: "glide-final-y-w",
				name: "ย and ว Can Close a Syllable as Glides",
				shortDescription: "Final ย adds an i/y glide; final ว adds a w glide",
				explanation:
					"At the end of a syllable, ย and ว do not act as full consonants. ย adds a short i/y glide (as in ขาย) and ว adds a w glide (as in ขาว). You first met the w-glide back in ข้าว.",
				examples: ["ขาย = khǎai", "ขาว = khǎao"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "y" sound?',
				options: ["ย", "ว", "ร", "ล"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "At the end of a syllable, what does ว add?",
				options: ["a w glide", "a k stop", "an ng sound", "nothing"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ยา mean?",
				options: ["medicine", "chicken", "closed", "game"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "medicine"?',
				options: ["ยา", "วา", "ยาม", "รา"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Which sound ends the word ขาย?",
				options: ["a y glide", "a k stop", "an ng sound", "a long aa"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ร", "ว", "า", "ข"],
	},
	{
		id: 22,
		stage: 7,
		title: "คน — The Low-Class kh",
		anchorWord: {
			thai: "คน",
			meaning: "person",
			pronunciation: "khon",
			category: "daily",
			syllables: [{ thai: "คน", sound: "khon" }],
			contextNote:
				"คน (person) is one of the highest-frequency words in Thai. It opens countless compounds — คนไทย (Thai person), คนขับ (driver) — and shows the low-class partner of the kh sound you met in ข.",
		},
		newLetters: [
			{
				character: "ค",
				romanization: "kh",
				pronunciation: 'kh with a puff of air, like the "c" in "cat"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ค is ค ควาย (khaw khwaai, buffalo). Picture a broad water buffalo; ค gives the same breathy kh as ข but belongs to the low class.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "low-kh",
				name: "ค Is a Low-Class kh",
				shortDescription: "ค makes the aspirated kh sound and is a low-class consonant",
				explanation:
					"ค gives the same breathy kh you learned from ข, released with a puff of air. What differs is its class: ค is low class, so it follows the low-class tone rules rather than the high-class ones.",
				examples: ["คน = khon", "คิด = khít"],
			},
			{
				id: "kh-pair-class",
				name: "ค and ข Share a Sound",
				shortDescription: "ข and ค both sound kh; ข is high class, ค is low class",
				explanation:
					"ข and ค are pronounced the same way, but their class decides the tone. This high/low pairing repeats across Thai, so learning both members together makes later tone rules easier.",
				examples: ["ขา = khǎa", "คา = khaa"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is the low-class "kh"?',
				options: ["ค", "ข", "ก", "ง"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ค make?",
				options: ["kh with a puff of air", "hard g", "ng", "s"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do ข and ค differ?",
				options: [
					"they sound the same but differ in class",
					"ค is a vowel",
					"ข is nasal",
					"they are unrelated",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does คน mean?",
				options: ["person", "way", "fish", "medicine"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "person"?',
				options: ["คน", "นค", "ขน", "คง"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ข", "น", "ร"],
	},
	{
		id: 23,
		stage: 7,
		title: "แพง — The Low-Class ph",
		anchorWord: {
			thai: "แพง",
			meaning: "expensive",
			pronunciation: "phaeng",
			category: "sign",
			syllables: [{ thai: "แพง", sound: "phaeng" }],
			contextNote:
				"แพง (expensive) is a core price-tag adjective. It also completes the trio of p letters: ป (bp), ผ (ph, high), and now พ (ph, low).",
		},
		newLetters: [
			{
				character: "พ",
				romanization: "ph",
				pronunciation: 'ph with a puff of air, like the "p" in "pin"',
				type: "consonant",
				class: "low",
				mnemonic:
					"พ is พ พาน (phaw phaan, a footed offering tray). Picture the tall pedestal tray; พ gives the aspirated ph sound in the low class.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "low-ph",
				name: "พ Is a Low-Class ph",
				shortDescription: "พ makes an aspirated ph and is low class",
				explanation:
					"พ is a ph released with a puff of air, the same breathy sound as ผ. The difference is class: พ is low class, ผ is high class, so the two take different tones.",
				examples: ["แพง = phaeng", "พูด = phûut"],
			},
			{
				id: "three-p-letters",
				name: "Thai Has Three p Letters",
				shortDescription: "ป is bp (no air), ผ is high ph, พ is low ph",
				explanation:
					"Keep the three apart by air and class: ป (bp) is tight with no puff, while ผ and พ both add a puff of air — ผ high class, พ low class. The puff and the class together decide the word.",
				examples: ["ปา = bpaa", "ผา = phǎa", "พา = phaa"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is the low-class "ph"?',
				options: ["พ", "ผ", "ป", "บ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does พ make?",
				options: ["ph with a puff of air", "bp with no air", "f", "m"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Which letter has NO puff of air?",
				options: ["ป", "ผ", "พ", "ค"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does แพง mean?",
				options: ["expensive", "cheap", "open", "person"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "expensive"?',
				options: ["แพง", "พงแ", "แผง", "แพน"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["แ", "ง", "ผ", "ป"],
	},
	{
		id: 24,
		stage: 7,
		title: "น้ำ — The am Vowel",
		anchorWord: {
			thai: "น้ำ",
			meaning: "water",
			pronunciation: "náam",
			category: "daily",
			syllables: [{ thai: "น้ำ", sound: "náam" }],
			contextNote:
				"น้ำ (water) is everywhere — bottles, menus, and compounds like น้ำแข็ง (ice) and น้ำมัน (oil). It introduces ◌ำ, a vowel that carries its own final m.",
		},
		newLetters: [
			{
				character: "ำ",
				romanization: "am",
				pronunciation: 'short "am", like the "um" in "hum"',
				type: "vowel",
				mnemonic:
					"ำ is sara am: a little circle rides above and a tail hooks down on the right. It always ends in an m, so you never add a separate final.",
				position: "right",
			},
		],
		rulesIntroduced: [
			{
				id: "am-vowel",
				name: "◌ำ Is the am Vowel",
				shortDescription: "◌ำ gives a short 'am' with a built-in final m",
				explanation:
					"◌ำ is a short vowel that already includes its final m, so ทำ is read tham and คำ is read kham. You never write a separate ม after it.",
				examples: ["ทำ = tham", "คำ = kham"],
			},
			{
				id: "naam-length",
				name: "น้ำ Stretches Long on Its Own",
				shortDescription: "น้ำ is long by itself but short inside compounds",
				explanation:
					"By itself น้ำ is pronounced long (náam). Inside a compound the vowel shortens, as in น้ำมัน (nám-man, oil). It is the one common exception to the short ◌ำ.",
				examples: ["น้ำ = náam", "น้ำมัน = nám-man"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which vowel makes the "am" sound?',
				options: ["ำ", "า", "ั", "ู"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound ends every ◌ำ syllable?",
				options: ["m", "n", "ng", "k"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How is น้ำ pronounced on its own?",
				options: ["long: náam", "short: nám", "with a k", "with an ng"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does น้ำ mean?",
				options: ["water", "word", "person", "fire"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "water"?',
				options: ["น้ำ", "นำ", "ทำ", "คำ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["น", "้", "ท", "ค"],
	},
	{
		id: 25,
		stage: 7,
		title: "เขา — The Wrap-Around ao Vowel",
		anchorWord: {
			thai: "เขา",
			meaning: "he / she / they",
			pronunciation: "khǎo",
			category: "daily",
			syllables: [{ thai: "เขา", sound: "khǎo" }],
			contextNote:
				"เขา is the everyday pronoun for he, she, or they. It shows how เ and า wrap around a consonant to make the short ao diphthong.",
		},
		newLetters: [
			{
				character: "เ◌า",
				romanization: "ao",
				pronunciation: 'short "ao", like the "ow" in "cow"',
				type: "vowel",
				mnemonic:
					"เ leads on the left and า trails on the right, wrapping the consonant. Read the consonant first, then the ao that surrounds it.",
				position: "around",
			},
		],
		rulesIntroduced: [
			{
				id: "ao-frame",
				name: "เ + า Wrap to Make ao",
				shortDescription: "เ before and า after a consonant give the short ao vowel",
				explanation:
					"You already know เ and า on their own. Together, with เ on the left and า on the right, they frame the consonant and produce a short ao. Always read the consonant before the vowel sound.",
				examples: ["เขา = khǎo", "เรา = rao"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which frame makes the "ao" sound?',
				options: ["เ◌า", "โ◌", "ไ◌", "เ◌"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In เขา, which sound comes first?",
				options: ["the consonant kh", "the า", "the เ", "an m"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How is the เ-า vowel written?",
				options: ["wrapped around the consonant", "only above", "only below", "only after"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เขา mean?",
				options: ["he / she / they", "we", "water", "person"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "he / she / they"?',
				options: ["เขา", "ขาว", "เรา", "เขาน"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["เ", "า", "ข", "ร"],
	},
	{
		id: 26,
		stage: 8,
		title: "ซอย — The Low-Class s",
		anchorWord: {
			thai: "ซอย",
			meaning: "lane / soi",
			pronunciation: "sawy",
			category: "sign",
			syllables: [{ thai: "ซอย", sound: "sawy" }],
			contextNote:
				"ซอย (a lane off a main road) is part of nearly every Thai address. It introduces ซ, the low-class partner of the s sound.",
		},
		newLetters: [
			{
				character: "ซ",
				romanization: "s",
				pronunciation: 's as in "sun"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ซ is ซ โซ่ (saw sôo, a chain). Picture the links of a chain; ซ gives a plain s in the low class.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "low-s",
				name: "ซ Is a Low-Class s",
				shortDescription: "ซ makes a plain s and is low class",
				explanation:
					"ซ is a straightforward s sound, but unlike the high-class ส you met earlier, it is low class and follows the low-class tone rules.",
				examples: ["ซอย = sawy", "ซื้อ = súe"],
			},
			{
				id: "s-look-alikes",
				name: "ซ, ส, and ช Look Similar",
				shortDescription: "ซ and ส both sound s; ช is a different ch sound",
				explanation:
					"ซ (low s) and ส (high s) share a sound but differ in class. ช looks similar but is a ch. Check the small details of each letter before you read it.",
				examples: ["ซอง = sawng", "สอง = sǎwng"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is the low-class "s"?',
				options: ["ซ", "ส", "ช", "จ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ซ make?",
				options: ["s", "ch", "z as in zoo", "sh"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do ซ and ส differ?",
				options: [
					"they sound the same but differ in class",
					"ซ is a vowel",
					"ส is nasal",
					"they are unrelated",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ซอย mean?",
				options: ["lane / soi", "road", "left", "envelope"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "lane / soi"?',
				options: ["ซอย", "สอย", "ซอง", "ยอซ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["อ", "ย", "ส", "ช"],
	},
	{
		id: 27,
		stage: 8,
		title: "ไฟ — The Low-Class f",
		anchorWord: {
			thai: "ไฟ",
			meaning: "fire / light",
			pronunciation: "fai",
			category: "sign",
			syllables: [{ thai: "ไฟ", sound: "fai" }],
			contextNote:
				"ไฟ means fire, light, or electricity. It powers everyday signs like ไฟฟ้า (electricity) and ไฟแดง (red light), and introduces the low-class f.",
		},
		newLetters: [
			{
				character: "ฟ",
				romanization: "f",
				pronunciation: 'f as in "fan"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ฟ is ฟ ฟัน (faw fan, teeth). Picture a row of teeth; ฟ gives a plain f in the low class.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "low-f",
				name: "ฟ Is a Low-Class f",
				shortDescription: "ฟ makes a plain f and is low class",
				explanation:
					"ฟ is a simple f sound and is low class. You will meet its rarer high-class partner ฝ later; for now, ฟ covers almost every f word you will read.",
				examples: ["ไฟ = fai", "ฟัง = fang"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter makes the "f" sound?',
				options: ["ฟ", "พ", "ผ", "ป"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ฟ make?",
				options: ["f", "ph with a puff", "bp", "v"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ไฟ mean?",
				options: ["fire / light", "water", "road", "cheap"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "fire / light"?',
				options: ["ไฟ", "ฟไ", "ไพ", "ไฟฟ"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ไฟฟ้า mean?",
				options: ["electricity", "firewood", "candle", "sunlight"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ไ", "แ", "ด", "ง"],
	},
	{
		id: 28,
		stage: 8,
		title: "ถนน — The High-Class th and Leading Consonants",
		anchorWord: {
			thai: "ถนน",
			meaning: "road / street",
			pronunciation: "thà-nǒn",
			category: "sign",
			syllables: [
				{ thai: "ถ", sound: "thà" },
				{ thai: "นน", sound: "nǒn" },
			],
			contextNote:
				"ถนน (road) appears on every street sign. It also shows the leading-consonant rule: the high-class ถ reaches across and sets the tone of the next syllable.",
		},
		newLetters: [
			{
				character: "ถ",
				romanization: "th",
				pronunciation: 'th with a puff of air, like the "t" in "top"',
				type: "consonant",
				class: "high",
				mnemonic:
					"ถ is ถ ถุง (thǎw thǔng, a bag). Picture a drawstring sack; ถ gives an aspirated th in the high class.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "high-th",
				name: "ถ Is a High-Class th",
				shortDescription: "ถ makes an aspirated th and is high class",
				explanation:
					"ถ is a th released with a puff of air, the same sound as low-class ท. Because ถ is high class, it follows high-class tone rules instead.",
				examples: ["ถาม = thǎam", "ถูก = thùuk"],
			},
			{
				id: "leading-consonant",
				name: "A Lone Consonant Can Lead the Next Syllable",
				shortDescription: "In ถนน, ถ has no vowel and passes its class to นน",
				explanation:
					"When a consonant has no vowel of its own, it borrows a short 'a' and leads into the next syllable, lending its class. In ถนน the high-class ถ makes the second syllable rise: thà-nǒn.",
				examples: ["ถนน = thà-nǒn", "ขนม = khà-nǒm"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is the high-class "th"?',
				options: ["ถ", "ท", "ต", "ด"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do ถ and ท differ?",
				options: [
					"same sound, different class",
					"ถ is a vowel",
					"ท is unaspirated",
					"they are unrelated",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In ถนน, what does the leading ถ do?",
				options: [
					"sets the tone of the next syllable",
					"stays silent",
					"adds an m",
					"nothing",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ถนน mean?",
				options: ["road / street", "bag", "to ask", "cheap"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "road / street"?',
				options: ["ถนน", "ทนน", "ถนม", "นนถ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["น", "ท", "า", "ง"],
	},
	{
		id: 29,
		stage: 8,
		title: "มือ — The ue Vowels",
		anchorWord: {
			thai: "มือ",
			meaning: "hand",
			pronunciation: "mue",
			category: "daily",
			syllables: [{ thai: "มือ", sound: "mue" }],
			contextNote:
				"มือ (hand) shows the long ue vowel and its silent อ seat. It builds mobile-age words like มือถือ (mobile phone), literally 'hand-hold'.",
		},
		newLetters: [
			{
				character: "ื",
				romanization: "ue",
				pronunciation: 'long "ue" — say "ee" with your lips relaxed and pulled back',
				type: "vowel",
				mnemonic:
					"◌ื is the long ue vowel; the two marks above stretch the sound. Say a long ee but unround your lips.",
				position: "above",
			},
			{
				character: "ึ",
				romanization: "ue",
				pronunciation: 'short "ue" — a quick, clipped version of the long ◌ื',
				type: "vowel",
				mnemonic:
					"◌ึ is the short ue; a single hook above gives one short beat of the same unrounded sound.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "ue-vowels",
				name: "◌ื and ◌ึ Are the ue Vowels",
				shortDescription: "◌ื is long ue, ◌ึ is short ue",
				explanation:
					"Both make the unrounded ue sound; length is the only difference. ◌ื is held long, ◌ึ is clipped short. Watch which one sits above the consonant.",
				examples: ["ลืม = luem", "หนึ่ง = nùeng"],
			},
			{
				id: "silent-aw-seat",
				name: "A Bare ◌ื Rests on a Silent อ",
				shortDescription: "With no final, ◌ื is written ◌ือ and the อ stays silent",
				explanation:
					"When a long ◌ื has no final consonant, Thai writes a silent อ as a seat, so มือ is read mue. The อ here adds no sound of its own.",
				examples: ["มือ = mue", "คือ = khue"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which vowel is the long "ue"?',
				options: ["ื", "ึ", "ี", "ู"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do ◌ื and ◌ึ differ?",
				options: [
					"length: long vs short",
					"one is a tone mark",
					"one is nasal",
					"they are the same",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In มือ, what does the อ do?",
				options: [
					"it is a silent seat",
					"it adds an aw sound",
					"it is a final k",
					"it is a tone mark",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does มือ mean?",
				options: ["hand", "night", "hair", "one"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "hand"?',
				options: ["มือ", "มอ", "มู", "อืม"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ม", "อ", "ถ", "ค"],
	},
	{
		id: 30,
		stage: 9,
		title: "เบียร์ — The ia Vowel and the Silent Mark",
		anchorWord: {
			thai: "เบียร์",
			meaning: "beer",
			pronunciation: "biia",
			category: "food",
			syllables: [{ thai: "เบียร์", sound: "biia" }],
			contextNote:
				"เบียร์ (beer) is a loanword that shows two new tools: the ia diphthong and ◌์, the mark that silences a consonant — here the final ร.",
		},
		newLetters: [
			{
				character: "เ◌ีย",
				romanization: "ia",
				pronunciation: 'the "ia" glide, like "ea" in "ear"',
				type: "vowel",
				mnemonic:
					"เ leads on the left, ◌ี rides above, and ย trails on the right. Together they glide from ee into a, the ia diphthong.",
				position: "around",
			},
			{
				character: "์",
				romanization: "(silent)",
				pronunciation: "karan — it silences the consonant it sits above",
				type: "mark",
				mnemonic:
					"◌์ is the karan (thanthakhat). Think of it crossing out the consonant beneath it, so you do not pronounce that letter.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "ia-vowel",
				name: "เ-ีย Is the ia Diphthong",
				shortDescription: "เ + ◌ี + ย make a gliding ia sound",
				explanation:
					"The frame เ-ีย glides from an ee into an a. It is common in everyday words like เรียน (to study) and เขียน (to write).",
				examples: ["เรียน = rian", "เสีย = sǐia"],
			},
			{
				id: "karan-silent",
				name: "◌์ Silences a Consonant",
				shortDescription: "A consonant under ◌์ is not pronounced",
				explanation:
					"The karan mark cancels the consonant beneath it. It appears mostly in loanwords and Pali/Sanskrit spellings, as in เบียร์ (beer), where the final ร is silent.",
				examples: ["เบียร์ = biia", "อาทิตย์ = aa-thít"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which frame makes the "ia" sound?',
				options: ["เ◌ีย", "เ◌า", "◌ัว", "เ◌อ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What does the ◌์ mark do?",
				options: [
					"silences the consonant beneath it",
					"raises the tone",
					"adds an m",
					"lengthens the vowel",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In เบียร์, why is the ร silent?",
				options: [
					"it carries a karan mark",
					"it is a vowel",
					"it is doubled",
					"it is at the start",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เบียร์ mean?",
				options: ["beer", "week", "to study", "to lose"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "beer"?',
				options: ["เบียร์", "เบีย", "เรียน", "เบยร์"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["เ", "ี", "ย", "บ", "ร"],
	},
	{
		id: 31,
		stage: 9,
		title: "วัว — The ua Vowel",
		anchorWord: {
			thai: "วัว",
			meaning: "cow",
			pronunciation: "wuua",
			category: "daily",
			syllables: [{ thai: "วัว", sound: "wuua" }],
			contextNote:
				"วัว (cow) introduces the ua diphthong. It is a friendly word that also shows how ◌ั teams up with ว to make a gliding vowel.",
		},
		newLetters: [
			{
				character: "◌ัว",
				romanization: "ua",
				pronunciation: 'the "ua" glide, like "oo-a" said quickly',
				type: "vowel",
				mnemonic:
					"◌ั sits above the consonant and ว trails after it. Together they glide from oo into a — the ua diphthong.",
				position: "around",
			},
		],
		rulesIntroduced: [
			{
				id: "ua-vowel",
				name: "◌ัว Is the ua Diphthong",
				shortDescription: "◌ั + ว make a gliding ua sound when there is no final",
				explanation:
					"With no final consonant, ◌ั and ว together make ua, as in วัว (cow) and ตัว (body/classifier). Read the consonant, then glide oo-a.",
				examples: ["วัว = wuua", "ตัว = dtuua"],
			},
			{
				id: "ua-with-final",
				name: "ua Splits Around a Final",
				shortDescription: "With a final, the vowel is written ◌ว◌",
				explanation:
					"When the ua syllable has a final consonant, the vowel is written with ว in the middle, as in สวน (sǔuan, garden). It is the same ua sound, just reshaped to fit the final.",
				examples: ["สวน = sǔuan", "ด้วย = dûuai"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which frame makes the "ua" sound?',
				options: ["◌ัว", "เ◌ีย", "เ◌า", "◌ำ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ◌ัว make?",
				options: ["a gliding ua", "a short am", "a long aa", "an ao"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How is the ua vowel written when a final follows?",
				options: ["as ◌ว◌ around the final", "as ◌ำ", "it disappears", "as เ◌า"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does วัว mean?",
				options: ["cow", "head", "kitchen", "beautiful"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "cow"?',
				options: ["วัว", "ตัว", "หัว", "วว"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ว", "ั", "ต", "ห"],
	},
	{
		id: 32,
		stage: 9,
		title: "เจอ — The er Vowel",
		anchorWord: {
			thai: "เจอ",
			meaning: "to meet / to find",
			pronunciation: "jer",
			category: "daily",
			syllables: [{ thai: "เจอ", sound: "jer" }],
			contextNote:
				"เจอ (to meet, to run into) introduces the long er vowel. It is a high-frequency verb — เจอกัน (see you) closes countless conversations.",
		},
		newLetters: [
			{
				character: "เ◌อ",
				romanization: "er",
				pronunciation: 'long "er", like "her" without the r',
				type: "vowel",
				mnemonic:
					"เ leads on the left and อ trails on the right, giving a long er. Before a final it shrinks into เ◌ิ◌.",
				position: "around",
			},
		],
		rulesIntroduced: [
			{
				id: "er-vowel",
				name: "เ-อ Is the Long er Vowel",
				shortDescription: "เ + อ make a long er with no final",
				explanation:
					"When there is no final consonant, เ-อ is a long er, as in เจอ (to meet) and เธอ (you). Read the consonant, then the er.",
				examples: ["เจอ = jer", "เธอ = ther"],
			},
			{
				id: "er-before-final",
				name: "er Becomes เ-ิ- Before a Final",
				shortDescription: "With a final, er is written เ◌ิ◌; เงิน is short",
				explanation:
					"Before a final consonant the er vowel is reshaped to เ◌ิ◌, as in เดิน (dern, to walk). A few words like เงิน (ngern, money) shorten it.",
				examples: ["เดิน = dern", "เงิน = ngern"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which frame makes the long "er" sound?',
				options: ["เ◌อ", "เ◌า", "◌ัว", "เ◌ีย"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does เ-อ make with no final?",
				options: ["a long er", "a short am", "an ao", "an ia"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How is the er vowel written before a final?",
				options: ["as เ◌ิ◌", "as ◌ำ", "as เ◌า", "it disappears"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เจอ mean?",
				options: ["to meet / to find", "to walk", "money", "to open"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "to meet"?',
				options: ["เจอ", "เธอ", "เดิน", "จเอ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["เ", "อ", "จ", "ด", "น"],
	},
	{
		id: 33,
		stage: 9,
		title: "ปลา — True Consonant Clusters",
		anchorWord: {
			thai: "ปลา",
			meaning: "fish",
			pronunciation: "bplaa",
			category: "food",
			syllables: [{ thai: "ปลา", sound: "bplaa" }],
			contextNote:
				"ปลา (fish) opens with a true cluster, ปล: both consonants blend with no vowel between them. This lesson teaches how clusters differ from the hidden-vowel frame.",
		},
		newLetters: [],
		rulesIntroduced: [
			{
				id: "true-cluster",
				name: "True Clusters Blend Two Consonants",
				shortDescription: "A stop + ร/ล/ว is read together with no inserted vowel",
				explanation:
					"A true cluster joins a stop (ก ข ค ต ป พ) with ร, ล, or ว and blends them with no vowel between. The tone follows the first consonant's class, and any tone mark sits over the second consonant.",
				examples: ["ปลา = bplaa", "ครับ = khráp"],
			},
			{
				id: "cluster-vs-hidden",
				name: "Clusters Are Not the Hidden-Vowel Frame",
				shortDescription: "ปล blends, but ตล and ขน insert a short 'a'",
				explanation:
					"Compare ปลา (bplaa, blended) with ตลาด (dtà-làat) and ขนม (khà-nǒm), where a short 'a' is inserted between the consonants. Only a stop + ร/ล/ว truly blends; other pairs lead into a second syllable.",
				examples: ["ปลา = bplaa", "ขนม = khà-nǒm"],
			},
		],
		drills: [
			{
				type: "sound",
				prompt: "In a true cluster, how are the two consonants read?",
				options: [
					"blended, with no vowel between",
					"with an inserted 'a'",
					"as two syllables",
					"the second is silent",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "In ปลา, which consonant sets the tone?",
				options: [
					"the first consonant, ป",
					"the second consonant, ล",
					"the vowel",
					"neither",
				],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: "Which word is a TRUE cluster (no inserted vowel)?",
				options: ["ปลา", "ตลาด", "ขนม", "ถนน"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ปลา mean?",
				options: ["fish", "to return", "middle", "monk"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Where does a tone mark sit in a cluster?",
				options: [
					"over the second consonant",
					"over the first consonant",
					"over the vowel",
					"it is dropped",
				],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ป", "ล", "ร", "ว", "ก"],
	},
	{
		id: 34,
		stage: 10,
		title: "โต๊ะ — The Last Two Tone Marks",
		anchorWord: {
			thai: "โต๊ะ",
			meaning: "table",
			pronunciation: "dtó",
			category: "daily",
			syllables: [{ thai: "โต๊ะ", sound: "dtó" }],
			contextNote:
				"โต๊ะ (table) carries mai tri. With mai chattawa, this lesson completes all four Thai tone marks — the ones that appear mostly on mid-class, loan, and food words.",
		},
		newLetters: [
			{
				character: "๊",
				romanization: "(tone)",
				pronunciation:
					"mai tri — the third tone mark; on a mid consonant it gives a high tone",
				type: "tone_mark",
				mnemonic:
					"◌๊ mai tri stacks like a small figure that tops out high. It rides mostly on mid-class letters in loan and food words, pushing the tone high.",
				position: "above",
			},
			{
				character: "๋",
				romanization: "(tone)",
				pronunciation:
					"mai chattawa — the fourth tone mark; on a mid consonant it gives a rising tone",
				type: "tone_mark",
				mnemonic:
					"◌๋ mai chattawa is the plus-shaped fourth mark. On a mid-class letter it lifts the syllable into a rising tone.",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "four-tone-marks",
				name: "◌๊ and ◌๋ Complete the Four Tone Marks",
				shortDescription: "With ่ and ้, Thai now has all four tone marks",
				explanation:
					"You already knew mai ek (◌่) and mai tho (◌้). Mai tri (◌๊) and mai chattawa (◌๋) are the last two, completing the full set of four tone marks.",
				examples: ["โต๊ะ = dtó", "ก๋วยเตี๋ยว = gǔuai-dtǐiao"],
			},
			{
				id: "mid-class-marks",
				name: "These Two Marks Ride Mid Consonants",
				shortDescription: "◌๊ gives high tone and ◌๋ gives rising, mostly on mid class",
				explanation:
					"Mai tri and mai chattawa appear almost only on mid-class consonants, in colloquial, loan, and food words. On a mid consonant, ◌๊ makes a high tone and ◌๋ makes a rising tone.",
				examples: ["โต๊ะ = dtó (high)", "จ๋า = jǎa (rising)"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which mark is mai tri?",
				options: ["๊", "๋", "่", "้"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "On a mid consonant, what tone does ◌๊ give?",
				options: ["high", "rising", "low", "falling"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "On a mid consonant, what tone does ◌๋ give?",
				options: ["rising", "high", "low", "falling"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does โต๊ะ mean?",
				options: ["table", "noodles", "island", "child"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "table"?',
				options: ["โต๊ะ", "โต", "ต๊ะ", "โตะ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["โ", "ต", "่", "้"],
	},
	{
		id: 35,
		stage: 10,
		title: "ข่าว — The Full Tone System",
		anchorWord: {
			thai: "ข่าว",
			meaning: "news",
			pronunciation: "khàao",
			category: "sign",
			syllables: [{ thai: "ข่าว", sound: "khàao" }],
			contextNote:
				"ข่าว (news) anchors a review of the whole tone system. Here you pull class, tone mark, and syllable type together into one picture.",
		},
		newLetters: [],
		rulesIntroduced: [
			{
				id: "tone-matrix",
				name: "Tone Comes From Class + Mark + Syllable",
				shortDescription:
					"Consonant class, any tone mark, and live/dead together fix the tone",
				explanation:
					"Every Thai tone is decided by three things working together: the initial consonant's class (mid, high, low), any tone mark, and whether the syllable is live (open or ending in a sonorant) or dead (ending in a stop or short vowel). Read them in that order.",
				examples: ["ข่าว = khàao (high + mai ek)", "ค่า = khâa (low + mai ek)"],
			},
			{
				id: "class-minimal-pairs",
				name: "One Vowel, Three Classes, Different Tones",
				shortDescription: "กา, ขา, and คา differ in tone only because of class",
				explanation:
					"With the same vowel, class alone changes the tone: กา (mid) is mid, ขา (high) rises, คา (low) is mid. Add a mark and they split further — ข่า is low, ค่า is falling. Class is always the starting point.",
				examples: ["กา = gaa · ขา = khǎa · คา = khaa", "ข่า = khàa · ค่า = khâa"],
			},
		],
		drills: [
			{
				type: "sound",
				prompt: "What three things decide a Thai tone?",
				options: [
					"class, tone mark, and live/dead syllable",
					"only the tone mark",
					"only the vowel length",
					"the final consonant alone",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Why do กา, ขา, and คา have different tones?",
				options: [
					"their consonants are different classes",
					"different vowels",
					"different finals",
					"different marks",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "A syllable ending in a stop or short vowel is called…",
				options: ["dead", "live", "high", "rising"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ข่าว mean?",
				options: ["news", "leg", "rice", "value"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: "Which pair are the low-class members?",
				options: ["คา / ค่า", "ขา / ข่า", "กา / ก่า", "ตา / ต่า"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "ข", "ค", "่", "้"],
	},
	{
		id: 36,
		stage: 10,
		title: "เด็ก — The Vowel Shortener",
		anchorWord: {
			thai: "เด็ก",
			meaning: "child",
			pronunciation: "dèk",
			category: "daily",
			syllables: [{ thai: "เด็ก", sound: "dèk" }],
			contextNote:
				"เด็ก (child) introduces ◌็ (mai taikhu), a mark that shortens the vowel in a closed syllable without adding any sound of its own.",
		},
		newLetters: [
			{
				character: "็",
				romanization: "(shortener)",
				pronunciation: "mai taikhu — it shortens the vowel and carries no sound of its own",
				type: "mark",
				mnemonic:
					"◌็ mai taikhu is a tiny hook that clips the vowel short, mostly on เ and แ before a final, as in เด็ก (dèk).",
				position: "above",
			},
		],
		rulesIntroduced: [
			{
				id: "taikhu-shorten",
				name: "◌็ Shortens the Vowel",
				shortDescription: "◌็ clips เ or แ short before a final consonant",
				explanation:
					"The mai taikhu mark shortens the vowel of a closed syllable, mainly with เ and แ. It adds no sound itself — it only makes the vowel quick, as in เด็ก (dèk) and เล็ก (lék).",
				examples: ["เด็ก = dèk", "เล็ก = lék"],
			},
			{
				id: "taikhu-limits",
				name: "◌็ Doesn't Stack With Tone Marks",
				shortDescription: "◌็ cannot share the spot with a tone mark or above-vowel",
				explanation:
					"In standard Thai, ◌็ occupies the space above the consonant on its own, so it does not co-occur with a tone mark or an above-line vowel in the same syllable.",
				examples: ["เป็น = bpen", "เห็น = hěn"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which mark shortens the vowel?",
				options: ["็", "่", "้", "๊"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What does ◌็ add to the sound?",
				options: ["nothing — it only shortens", "a high tone", "an m", "an extra vowel"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "◌็ appears mostly with which vowels?",
				options: ["เ and แ", "า and ี", "ุ and ู", "◌ำ"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เด็ก mean?",
				options: ["child", "table", "small", "to see"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "child"?',
				options: ["เด็ก", "เดก", "เล็ก", "ด็ก"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["เ", "ด", "ก", "ป", "น"],
	},
	{
		id: 37,
		stage: 10,
		title: "ช้าๆ — The Repetition Mark",
		anchorWord: {
			thai: "ช้าๆ",
			meaning: "slowly / take it easy",
			pronunciation: "cháa-cháa",
			category: "daily",
			syllables: [
				{ thai: "ช้า", sound: "cháa" },
				{ thai: "ๆ", sound: "cháa" },
			],
			contextNote:
				"ช้าๆ (slowly) shows ◌ๆ (mai yamok), the mark that tells you to say the previous word again — for plurals, emphasis, or 'each and every'.",
		},
		newLetters: [
			{
				character: "ๆ",
				romanization: "(repeat)",
				pronunciation: "mai yamok — read the word before it a second time",
				type: "mark",
				mnemonic:
					"◌ๆ maiyamok is written after a word with a space; it means 'say that again', so ช้าๆ is read cháa-cháa.",
				position: "right",
			},
		],
		rulesIntroduced: [
			{
				id: "yamok-repeat",
				name: "◌ๆ Repeats the Previous Word",
				shortDescription: "Read the word before ◌ๆ twice",
				explanation:
					"The mai yamok mark doubles the word in front of it. Depending on the word, the repeat can mark a plural, add emphasis, or mean 'each/every'. Read the whole word again.",
				examples: ["ช้าๆ = cháa-cháa", "เด็กๆ = dèk-dèk"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which mark means 'repeat the previous word'?",
				options: ["ๆ", "ฯ", "์", "็"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you read ช้าๆ?",
				options: ["cháa-cháa", "cháa", "cháa-yaa", "cháang"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What can ◌ๆ signal?",
				options: [
					"plural, emphasis, or 'each/every'",
					"a silent letter",
					"a high tone",
					"a question",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ช้าๆ mean?",
				options: ["slowly / take it easy", "very fast", "children", "loudly"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which spelling means "children" (doubled)?',
				options: ["เด็กๆ", "เด็ก", "ช้าๆ", "ดๆ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ช", "้", "า", "เ"],
	},
	{
		id: 38,
		stage: 10,
		title: "เกาะ — Short Diphthongs and Unwritten o",
		anchorWord: {
			thai: "เกาะ",
			meaning: "island",
			pronunciation: "gàw",
			category: "place",
			syllables: [{ thai: "เกาะ", sound: "gàw" }],
			contextNote:
				"เกาะ (island) shows the short partner of the leading vowels. This lesson gathers the short diphthongs and the unwritten short o that hides between two consonants.",
		},
		newLetters: [
			{
				character: "เ◌าะ",
				romanization: "aw",
				pronunciation: 'short "aw", a clipped version of เ-า',
				type: "vowel",
				mnemonic:
					"เ◌าะ ends in ◌ะ, the short marker. It is the quick, clipped cousin of the long aw, as in เกาะ (gàw).",
				position: "around",
			},
			{
				character: "เ◌ะ",
				romanization: "e",
				pronunciation: 'short "e", a clipped version of เ',
				type: "vowel",
				mnemonic:
					"เ◌ะ is the short e: the ◌ะ on the right clips the long เ short, as in เตะ (dtè).",
				position: "around",
			},
			{
				character: "แ◌ะ",
				romanization: "ae",
				pronunciation: 'short "ae", a clipped version of แ',
				type: "vowel",
				mnemonic: "แ◌ะ is the short ae: ◌ะ shortens the long แ, as in แกะ (gàe).",
				position: "around",
			},
			{
				character: "โ◌ะ",
				romanization: "o",
				pronunciation: 'short "o", a clipped version of โ',
				type: "vowel",
				mnemonic: "โ◌ะ is the short o: ◌ะ shortens the long โ, as in โต๊ะ (dtó).",
				position: "around",
			},
		],
		rulesIntroduced: [
			{
				id: "short-diphthongs",
				name: "◌ะ Marks the Short Vowels",
				shortDescription:
					"เ-าะ, เ-ะ, แ-ะ, and โ-ะ are the short partners of the leading vowels",
				explanation:
					"Adding ◌ะ to a leading vowel makes its short version: เ-าะ (short aw), เ-ะ (short e), แ-ะ (short ae), and โ-ะ (short o). They sound clipped and are usually dead syllables.",
				examples: ["เกาะ = gàw", "แกะ = gàe"],
			},
			{
				id: "unwritten-short-o",
				name: "Two Consonants Alone = Short o",
				shortDescription:
					"A consonant-consonant syllable with no written vowel is a short o",
				explanation:
					"When a syllable is two consonants with no written vowel, a short 'o' hides between them, as in คน (khon) and นก (nók). Nothing on the page marks it — you supply the o.",
				examples: ["คน = khon", "นก = nók"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which frame is the short "aw"?',
				options: ["เ◌าะ", "เ◌า", "◌ัว", "เ◌อ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What does ◌ะ do to a leading vowel?",
				options: ["makes it short", "makes it long", "silences it", "raises the tone"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you read คน (two consonants, no vowel)?",
				options: ["khon — an unwritten short o", "khaan", "khun", "khn with no vowel"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does เกาะ mean?",
				options: ["island", "table", "sheep", "to kick"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "island"?',
				options: ["เกาะ", "เกา", "เตะ", "แกะ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["เ", "แ", "โ", "ะ"],
	},
	{
		id: 39,
		stage: 11,
		title: "๑๐ บาท — Thai Numerals",
		anchorWord: {
			thai: "๑๐ บาท",
			meaning: "10 baht",
			pronunciation: "sìp bàat",
			category: "sign",
			syllables: [
				{ thai: "๑๐", sound: "sìp" },
				{ thai: "บาท", sound: "bàat" },
			],
			contextNote:
				"Thai numerals still appear on temple and park entry signs, dual pricing, license plates, and banknotes. ๑๐ บาท (10 baht) is a typical price you will read.",
		},
		newLetters: [
			{
				character: "๐",
				romanization: "0",
				pronunciation: "sǔun (zero)",
				type: "numeral",
				mnemonic: "๐ is a small oval, like a 0. It is sǔun, zero.",
				position: "standalone",
			},
			{
				character: "๑",
				romanization: "1",
				pronunciation: "nùeng (one)",
				type: "numeral",
				mnemonic: "๑ has a single curl on top — one loop for the number one (nùeng).",
				position: "standalone",
			},
			{
				character: "๒",
				romanization: "2",
				pronunciation: "sǎwng (two)",
				type: "numeral",
				mnemonic:
					"๒ opens to the right with one belly. Watch it against ๓ — say sǎwng for two.",
				position: "standalone",
			},
			{
				character: "๓",
				romanization: "3",
				pronunciation: "sǎam (three)",
				type: "numeral",
				mnemonic: "๓ has two humps, like a rounded 3. It is sǎam, three.",
				position: "standalone",
			},
			{
				character: "๔",
				romanization: "4",
				pronunciation: "sìi (four)",
				type: "numeral",
				mnemonic: "๔ curls twice and tucks under. It is sìi, four.",
				position: "standalone",
			},
			{
				character: "๕",
				romanization: "5",
				pronunciation: "hâa (five)",
				type: "numeral",
				mnemonic: "๕ looks like a little cursive g. It is hâa, five.",
				position: "standalone",
			},
			{
				character: "๖",
				romanization: "6",
				pronunciation: "hòk (six)",
				type: "numeral",
				mnemonic: "๖ has a big loop swinging up. It is hòk, six.",
				position: "standalone",
			},
			{
				character: "๗",
				romanization: "7",
				pronunciation: "jèt (seven)",
				type: "numeral",
				mnemonic: "๗ has a tail that trails to the right. It is jèt, seven.",
				position: "standalone",
			},
			{
				character: "๘",
				romanization: "8",
				pronunciation: "bpàet (eight)",
				type: "numeral",
				mnemonic: "๘ is an open curl, like a broken 8. It is bpàet, eight.",
				position: "standalone",
			},
			{
				character: "๙",
				romanization: "9",
				pronunciation: "gâo (nine)",
				type: "numeral",
				mnemonic:
					"๙ loops around like a 9. It is gâo, nine — an auspicious number in Thailand.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "thai-numerals",
				name: "Thai Has Its Own Digits ๐–๙",
				shortDescription: "๐๑๒๓๔๕๖๗๘๙ map directly to 0–9",
				explanation:
					"Thai numerals work exactly like the Arabic 0–9 you know and combine the same way, so ๑๐ is 10 and ๒๕ is 25. You read them most on official signs, banknotes, and dual pricing.",
				examples: ["๑๐ = 10", "๒๕ = 25"],
			},
			{
				id: "confusable-2-3",
				name: "Watch ๒ and ๓",
				shortDescription: "๒ (2) and ๓ (3) look alike — check the number of humps",
				explanation:
					"๒ and ๓ are the easiest Thai numerals to confuse. ๒ has a single belly, while ๓ has two humps. Slow down and count the curves before you read the price.",
				examples: ["๒ = 2", "๓ = 3"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which numeral is 5?",
				options: ["๕", "๖", "๓", "๙"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What is ๑๐?",
				options: ["10", "1", "100", "20"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which numeral is 2?",
				options: ["๒", "๓", "๗", "๔"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ๑๐ บาท mean?",
				options: ["10 baht", "1 baht", "100 baht", "10 satang"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: "Which is the numeral for 9?",
				options: ["๙", "๖", "๕", "๘"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["บ", "า", "ท"],
	},
	{
		id: 40,
		stage: 11,
		title: "กรุงเทพฯ — The Abbreviation Mark",
		anchorWord: {
			thai: "กรุงเทพฯ",
			meaning: "Bangkok",
			pronunciation: "grung-thêep",
			category: "place",
			syllables: [
				{ thai: "กรุง", sound: "grung" },
				{ thai: "เทพ", sound: "thêep" },
			],
			contextNote:
				"กรุงเทพฯ (Bangkok) ends in ฯ (paiyannoi), which stands in for the rest of the city's ceremonial name. You read the short everyday form aloud.",
		},
		newLetters: [
			{
				character: "ฯ",
				romanization: "(abbrev.)",
				pronunciation: "paiyannoi — it marks a shortened well-known name",
				type: "mark",
				mnemonic:
					"ฯ paiyannoi is an abbreviation mark: it stands in for the long tail of a formal name, as in กรุงเทพฯ.",
				position: "right",
			},
		],
		rulesIntroduced: [
			{
				id: "paiyannoi-abbrev",
				name: "ฯ Abbreviates a Long Name",
				shortDescription: "ฯ shortens a well-known formal name in writing",
				explanation:
					"The paiyannoi mark shortens a long, familiar name on the page. กรุงเทพฯ writes the everyday form of Bangkok's ceremonial name. The related ฯลฯ means 'etc.'.",
				examples: ["กรุงเทพฯ = grung-thêep", "ฯลฯ = etc."],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: "Which mark abbreviates a long name?",
				options: ["ฯ", "ๆ", "์", "๙"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does กรุงเทพฯ mean?",
				options: ["Bangkok", "Thailand", "province", "capital letter"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What does ฯลฯ mean?",
				options: ["etc. / and so on", "the end", "please", "and you"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How do you read the ฯ in กรุงเทพฯ?",
				options: [
					"as the shortened everyday name",
					"as a separate sound",
					"as a number",
					"as silence forever",
				],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which spelling is "Bangkok"?',
				options: ["กรุงเทพฯ", "กรุงเทพ", "เทพกรุง", "กรุงเทพๆ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "ร", "ท", "พ"],
	},
	{
		id: 41,
		stage: 12,
		title: "ฉัน — The High-Class ch and f",
		anchorWord: {
			thai: "ฉัน",
			meaning: "I / me",
			pronunciation: "chǎn",
			category: "daily",
			syllables: [{ thai: "ฉัน", sound: "chǎn" }],
			contextNote:
				"ฉัน (I/me) is an everyday pronoun. It introduces two high-class letters: ฉ (ch) and ฝ (f), which complete the aspirate pairs.",
		},
		newLetters: [
			{
				character: "ฉ",
				romanization: "ch",
				pronunciation: 'ch as in "chair", with a puff of air',
				type: "consonant",
				class: "high",
				mnemonic:
					"ฉ is ฉ ฉิ่ง (chǎw chìng, small hand cymbals). Picture the tiny cymbals; ฉ is a high-class ch.",
				position: "standalone",
			},
			{
				character: "ฝ",
				romanization: "f",
				pronunciation: 'f as in "fan"',
				type: "consonant",
				class: "high",
				mnemonic:
					"ฝ is ฝ ฝา (fǎw fǎa, a lid). Picture a pot lid; ฝ is a high-class f, the partner of low-class ฟ.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "high-ch-f",
				name: "ฉ and ฝ Are High-Class",
				shortDescription: "ฉ is a high ch (vs low ช); ฝ is a high f (vs low ฟ)",
				explanation:
					"ฉ makes the same ch as ช and ฝ makes the same f as ฟ, but both new letters are high class. High-class consonants default to a rising tone and take only mai ek or mai tho.",
				examples: ["ฉัน = chǎn", "ฝน = fǒn"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is the high-class "ch"?',
				options: ["ฉ", "ช", "ซ", "จ"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: 'Which letter is the high-class "f"?',
				options: ["ฝ", "ฟ", "พ", "ผ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What is the default tone of a high-class consonant?",
				options: ["rising", "high", "low", "mid"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ฉัน mean?",
				options: ["I / me", "rain", "lid", "clever"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "I / me"?',
				options: ["ฉัน", "ชัน", "ฝัน", "ฉน"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ั", "น", "ช", "ฟ"],
	},
	{
		id: 42,
		stage: 12,
		title: "ใหญ่ — Four More Low-Class Letters",
		anchorWord: {
			thai: "ใหญ่",
			meaning: "big",
			pronunciation: "yài",
			category: "daily",
			syllables: [{ thai: "ใหญ่", sound: "yài" }],
			contextNote:
				"ใหญ่ (big) uses ญ. This lesson adds four more low-class letters — ญ, ธ, ภ, ฮ — that duplicate sounds you know but appear across everyday and formal words.",
		},
		newLetters: [
			{
				character: "ญ",
				romanization: "y",
				pronunciation: 'y as in "yes" at the start; an n sound as a final',
				type: "consonant",
				class: "low",
				mnemonic:
					"ญ is ญ หญิง (yaw yǐng, woman). It is a low-class y at the start and an n at the end of a syllable.",
				position: "standalone",
			},
			{
				character: "ธ",
				romanization: "th",
				pronunciation: "th with a puff of air, like ท",
				type: "consonant",
				class: "low",
				mnemonic:
					"ธ is ธ ธง (thaw thong, flag). Picture a flag; ธ is a low-class th, a partner of ท.",
				position: "standalone",
			},
			{
				character: "ภ",
				romanization: "ph",
				pronunciation: "ph with a puff of air, like พ",
				type: "consonant",
				class: "low",
				mnemonic:
					"ภ is ภ สำเภา (phaw sǎm-phao, a junk boat). Picture the sailing junk; ภ is a low-class ph, a partner of พ.",
				position: "standalone",
			},
			{
				character: "ฮ",
				romanization: "h",
				pronunciation: 'h as in "hat"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ฮ is ฮ นกฮูก (haw nók-hûuk, an owl). Picture the owl; ฮ is a low-class h, the partner of high-class ห.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "four-low-duplicates",
				name: "Four More Low-Class Letters",
				shortDescription: "ญ (y/final n), ธ (th), ภ (ph), and ฮ (h) are all low class",
				explanation:
					"These four duplicate sounds you already read: ญ is a y that closes as n, ธ is a th like ท, ภ is a ph like พ, and ฮ is an h like ห. All are low class and turn up in formal and Pali/Sanskrit words.",
				examples: ["ใหญ่ = yài", "ธนาคาร = thá-naa-khaan"],
			},
		],
		drills: [
			{
				type: "recognize",
				prompt: 'Which letter is a low-class "h"?',
				options: ["ฮ", "ห", "ธ", "ภ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ญ make at the end of a syllable?",
				options: ["n", "y", "ng", "m"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "ธ and ภ duplicate which sounds?",
				options: ["th and ph", "d and b", "s and f", "k and g"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ใหญ่ mean?",
				options: ["big", "small", "bank", "flag"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "big"?',
				options: ["ใหญ่", "ใหม่", "ใหย่", "หญ่ใ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ใ", "ห", "่", "า"],
	},
	{
		id: 43,
		stage: 13,
		title: "ประเทศ — The s and n Duplicates",
		anchorWord: {
			thai: "ประเทศ",
			meaning: "country",
			pronunciation: "bprà-thêet",
			category: "sign",
			syllables: [
				{ thai: "ประ", sound: "bprà" },
				{ thai: "เทศ", sound: "thêet" },
			],
			contextNote:
				"ประเทศ (country) ends in ศ, one of three Sanskrit-derived duplicates. ศ, ษ (both s) and ณ (n) show up in formal vocabulary and on signs.",
		},
		newLetters: [
			{
				character: "ศ",
				romanization: "s",
				pronunciation: 's as in "sun" at the start; a t sound as a final',
				type: "consonant",
				class: "high",
				mnemonic:
					"ศ is ศ ศาลา (sǎw sǎa-laa, a pavilion). It is a high-class s, common in Sanskrit-derived words.",
				position: "standalone",
			},
			{
				character: "ษ",
				romanization: "s",
				pronunciation: "s at the start; a t sound as a final",
				type: "consonant",
				class: "high",
				mnemonic:
					"ษ is ษ ฤๅษี (sǎw ruee-sǐi, a hermit). It is another high-class s from Sanskrit spellings.",
				position: "standalone",
			},
			{
				character: "ณ",
				romanization: "n",
				pronunciation: 'n as in "no"',
				type: "consonant",
				class: "low",
				mnemonic:
					"ณ is ณ เณร (naw neen, a novice monk). It is a low-class n, a formal partner of น.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "duplicate-s-n",
				name: "ศ, ษ, and ณ Duplicate s and n",
				shortDescription: "ศ and ษ sound s; ณ sounds n — mostly in formal words",
				explanation:
					"These three add no new sounds: ศ and ษ are high-class s, and ณ is a low-class n. They appear mainly in Pali/Sanskrit loanwords and formal vocabulary such as ประเทศ and คุณ.",
				examples: ["ประเทศ = bprà-thêet", "คุณ = khun"],
			},
		],
		drills: [
			{
				type: "sound",
				prompt: "What sound do ศ and ษ make?",
				options: ["s", "sh", "ch", "t only"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ณ make?",
				options: ["n", "ng", "m", "l"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which letter is a high-class s from Sanskrit?",
				options: ["ศ", "ณ", "น", "ช"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does ประเทศ mean?",
				options: ["country", "religion", "court", "student"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "country"?',
				options: ["ประเทศ", "ประเทด", "ประเทท", "เทศประ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ป", "ร", "เ", "ท"],
	},
	{
		id: 44,
		stage: 13,
		title: "กีฬา — The Rare Sanskrit Letters",
		anchorWord: {
			thai: "กีฬา",
			meaning: "sport(s)",
			pronunciation: "gii-laa",
			category: "daily",
			syllables: [
				{ thai: "กี", sound: "gii" },
				{ thai: "ฬา", sound: "laa" },
			],
			contextNote:
				"กีฬา (sports) uses the rare ฬ. This recognition lesson gathers eight uncommon Pali/Sanskrit letters that duplicate sounds you already read.",
		},
		newLetters: [
			{
				character: "ฐ",
				romanization: "th",
				pronunciation: "a th sound, like ถ",
				type: "consonant",
				class: "high",
				mnemonic: "ฐ is ฐ ฐาน (thǎw thǎan, a base/pedestal). A rare high-class th.",
				position: "standalone",
			},
			{
				character: "ฑ",
				romanization: "th",
				pronunciation: "a th sound, like ท",
				type: "consonant",
				class: "low",
				mnemonic: "ฑ is ฑ มณโฑ (thaw mon-thoo, a character's name). A rare low-class th.",
				position: "standalone",
			},
			{
				character: "ฒ",
				romanization: "th",
				pronunciation: "a th sound, like ท",
				type: "consonant",
				class: "low",
				mnemonic: "ฒ is ฒ ผู้เฒ่า (thaw phûu-thâo, an elder). A rare low-class th.",
				position: "standalone",
			},
			{
				character: "ฎ",
				romanization: "d",
				pronunciation: "a d sound, like ด",
				type: "consonant",
				class: "mid",
				mnemonic: "ฎ is ฎ ชฎา (daw chá-daa, a headdress). A rare mid-class d.",
				position: "standalone",
			},
			{
				character: "ฏ",
				romanization: "dt",
				pronunciation: "a tight t sound, like ต",
				type: "consonant",
				class: "mid",
				mnemonic: "ฏ is ฏ ปฏัก (dtaw bpà-dtàk, a goad). A rare mid-class t.",
				position: "standalone",
			},
			{
				character: "ฆ",
				romanization: "kh",
				pronunciation: "a kh sound, like ค",
				type: "consonant",
				class: "low",
				mnemonic: "ฆ is ฆ ระฆัง (khaw rá-khang, a bell). A rare low-class kh.",
				position: "standalone",
			},
			{
				character: "ฬ",
				romanization: "l",
				pronunciation: "an l sound, like ล",
				type: "consonant",
				class: "low",
				mnemonic: "ฬ is ฬ จุฬา (law jù-laa, a kite). A rare low-class l, as in กีฬา.",
				position: "standalone",
			},
			{
				character: "ฌ",
				romanization: "ch",
				pronunciation: "a ch sound, like ช",
				type: "consonant",
				class: "low",
				mnemonic: "ฌ is ฌ เฌอ (chaw choee, a tree). A rare low-class ch.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "rare-duplicates",
				name: "Eight Rare Sanskrit/Pali Letters",
				shortDescription:
					"These letters reuse sounds you know and appear only in formal words",
				explanation:
					"You do not need to produce these from memory. Recognize them by their familiar sound — ฬ is l, ฆ is kh, ฌ is ch, ฎ/ฏ are d/t, and ฐ/ฑ/ฒ are th. They live in formal, legal, and Pali/Sanskrit vocabulary.",
				examples: ["กีฬา = gii-laa", "รัฐบาล = rát-thà-baan"],
			},
		],
		drills: [
			{
				type: "sound",
				prompt: "What sound does ฬ make?",
				options: ["l", "n", "r", "th"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What sound does ฆ make?",
				options: ["kh", "ng", "g", "h"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Where do these eight letters mostly appear?",
				options: ["formal Pali/Sanskrit words", "everyday slang", "numbers", "tone marks"],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does กีฬา mean?",
				options: ["sport(s)", "clock", "bell", "degree"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "sport(s)"?',
				options: ["กีฬา", "กีลา", "กิฬา", "ฬากี"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ก", "ี", "า", "ล"],
	},
	{
		id: 45,
		stage: 13,
		title: "อังกฤษ — ฤ and Spelling Exceptions",
		anchorWord: {
			thai: "อังกฤษ",
			meaning: "England / English",
			pronunciation: "ang-grìt",
			category: "sign",
			syllables: [
				{ thai: "อัง", sound: "ang" },
				{ thai: "กฤษ", sound: "grìt" },
			],
			contextNote:
				"อังกฤษ (English) shows ฤ, a vowel-like letter read ri, rue, or rer by word. This lesson also gathers the leading-อ words and the silent-r spellings.",
		},
		newLetters: [
			{
				character: "ฤ",
				romanization: "rue",
				pronunciation: 'read as "ri", "rue", or "rer" depending on the word',
				type: "vowel",
				mnemonic:
					"ฤ (sara rue) bundles an r with a vowel. Its reading is lexical: ri in อังกฤษ, rue in ฤดู. Learn it word by word.",
				position: "standalone",
			},
		],
		rulesIntroduced: [
			{
				id: "rue-readings",
				name: "ฤ Reads ri / rue / rer",
				shortDescription: "ฤ has three possible readings, fixed per word",
				explanation:
					"ฤ stands in for an r plus a vowel, but which vowel depends on the word: ri in อังกฤษ, rue in ฤดู (season). There is no rule — memorize the reading with each word.",
				examples: ["อังกฤษ = ang-grìt", "ฤดู = rúe-duu"],
			},
			{
				id: "leading-aw-words",
				name: "Leading อ Makes ย Mid in Four Words",
				shortDescription:
					"อยู่, อย่า, อย่าง, อยาก — the อ is silent and shifts ย to mid class",
				explanation:
					"In exactly four common words, a silent leading อ turns the following ย into a mid-class consonant, giving a low tone: อยู่ (to be located), อย่า (don't), อย่าง (kind/way), and อยาก (to want).",
				examples: ["อยู่ = yùu", "อยาก = yàak"],
			},
			{
				id: "silent-r-thr",
				name: "Silent ร and ทร = s",
				shortDescription: "ร is silent in จริง; ทร is read as s in ทราย",
				explanation:
					"A few spellings hide their r. In จริง the ร is silent (jing), and the pair ทร is read as s, as in ทราย (saai, sand). Treat these as fixed spellings.",
				examples: ["จริง = jing", "ทราย = saai"],
			},
		],
		drills: [
			{
				type: "sound",
				prompt: "How is ฤ read?",
				options: [
					"ri, rue, or rer depending on the word",
					"always ru",
					"silent",
					"as an m",
				],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "How is ทราย read?",
				options: ["saai (ทร = s)", "traai", "raai", "thraai"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "What does the leading อ do in อยาก?",
				options: [
					"it is silent and makes ย mid class",
					"it adds an aw sound",
					"it is a tone mark",
					"it doubles the ย",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does อังกฤษ mean?",
				options: ["England / English", "season", "sand", "to want"],
				correctIndex: 0,
			},
			{
				type: "spot",
				prompt: 'Which Thai spelling means "England / English"?',
				options: ["อังกฤษ", "อังกฤด", "อักฤษ", "กฤษอัง"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["อ", "ั", "ง", "ก"],
	},
	{
		id: 46,
		stage: 14,
		title: "ฃวด — Obsolete Glyphs (Recognition Only)",
		anchorWord: {
			thai: "ฃวด",
			meaning: "bottle (archaic spelling of ขวด)",
			pronunciation: "khùuat",
			category: "daily",
			syllables: [{ thai: "ฃวด", sound: "khùuat" }],
			contextNote:
				"ฃวด is an old spelling of ขวด (bottle) using the obsolete ฃ. This closing lesson is recognition only: these glyphs no longer appear in modern Thai writing.",
		},
		newLetters: [
			{
				character: "ฃ",
				romanization: "kh",
				pronunciation: "obsolete high-class kh; modern Thai uses ข",
				type: "consonant",
				class: "high",
				mnemonic:
					"ฃ (khǎw khùuat, bottle) is obsolete. No modern words use it — ข took its place. Recognition only.",
				position: "standalone",
			},
			{
				character: "ฅ",
				romanization: "kh",
				pronunciation: "obsolete low-class kh; modern Thai uses ค",
				type: "consonant",
				class: "low",
				mnemonic:
					"ฅ (khaw khon, person) is obsolete. No modern words use it — ค took its place. Recognition only.",
				position: "standalone",
			},
			{
				character: "ฤๅ",
				romanization: "ruee",
				pronunciation: 'archaic long form of ฤ, read "ruee"',
				type: "vowel",
				mnemonic:
					"ฤๅ is a rare long ฤ, seen in old literary words like ฤๅษี (ruee-sǐi, hermit). Recognition only.",
				position: "standalone",
			},
			{
				character: "ฦ",
				romanization: "lue",
				pronunciation: "obsolete lue; modern words use ลึ",
				type: "vowel",
				mnemonic:
					"ฦ (lue) is obsolete. Modern words use ลึ instead (ลึก, deep). Recognition only.",
				position: "standalone",
			},
			{
				character: "ฦๅ",
				romanization: "luee",
				pronunciation: "obsolete long luee; modern words use ลือ",
				type: "vowel",
				mnemonic: "ฦๅ (luee) is obsolete. Modern words use ลือ instead. Recognition only.",
				position: "standalone",
			},
			{
				character: "ๅ",
				romanization: "(lengthener)",
				pronunciation: "lakkhangyao — lengthens ฤ or ฦ only; not a sound on its own",
				type: "mark",
				mnemonic:
					"ๅ (lakkhangyao) only stretches ฤ or ฦ into their long forms. It is never a sound by itself.",
				position: "right",
			},
		],
		rulesIntroduced: [
			{
				id: "archaic-recognition",
				name: "These Glyphs Are Obsolete",
				shortDescription: "ฃ, ฅ, ฦ, ฦๅ, and ฤๅ no longer appear in modern Thai",
				explanation:
					"You only need to recognize these, not decode them in daily reading. ฃ became ข and ฅ became ค; ฦ and ฦๅ were replaced by ลึ and ลือ; ฤๅ survives only in rare literary words.",
				examples: ["ฃวด → ขวด", "ฅน → คน"],
			},
		],
		drills: [
			{
				type: "sound",
				prompt: "The obsolete ฃ was replaced by which letter?",
				options: ["ข", "ค", "ก", "ง"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "The obsolete ฅ was replaced by which letter?",
				options: ["ค", "ข", "ก", "จ"],
				correctIndex: 0,
			},
			{
				type: "sound",
				prompt: "Do these glyphs appear in modern Thai?",
				options: [
					"no — recognition only",
					"yes, everywhere",
					"only in numbers",
					"only in tone marks",
				],
				correctIndex: 0,
			},
			{
				type: "match",
				prompt: "What does the archaic ฃวด spell?",
				options: ["bottle (now ขวด)", "person (now คน)", "hermit", "deep"],
				correctIndex: 0,
			},
			{
				type: "recognize",
				prompt: "Which pair are the obsolete kh letters?",
				options: ["ฃ and ฅ", "ข and ค", "ก and ง", "ฆ and ฅ"],
				correctIndex: 0,
			},
		],
		reviewLetters: ["ข", "ค", "ว", "ด"],
	},
];

// Practice vocabulary stays ordered and lesson-scoped so the app can present
// core transfer reads first, then optional extension work when it exists.
const practiceVocabularyByLessonId: Record<number, LessonVocabularyEntry[]> = {
	1: [
		createPracticeEntry(
			createWord(
				"มา",
				"to come",
				"maa",
				"daily",
				[{ thai: "มา", sound: "maa" }],
				"A basic movement verb you will hear in invitations, directions, and casual conversation.",
			),
		),
		createPracticeEntry(
			createWord(
				"กา",
				"crow / kettle / mark",
				"gaa",
				"daily",
				[{ thai: "กา", sound: "gaa" }],
				"A compact real word that reuses the same long-aa frame with no extra letters added.",
			),
		),
		createPracticeEntry(
			createWord(
				"กาม",
				"sensuality",
				"gaam",
				"daily",
				[{ thai: "กาม", sound: "gaam" }],
				"A low-frequency but fully decodable real word that stretches the same letters into a longer frame.",
			),
		),
		createPracticeEntry(
			createWord(
				"กาก",
				"residue / trashy (casual)",
				"gaak",
				"daily",
				[{ thai: "กาก", sound: "gaak" }],
				"A real word that also appears as casual slang online, so it is useful to recognize even if it is not polite.",
			),
		),
		createPracticeEntry(
			createWord(
				"กก",
				"reeds; to cuddle",
				"kok",
				"daily",
				[{ thai: "กก", sound: "kok" }],
				"This one introduces the implied short o pattern with a real dictionary word.",
			),
		),
		createPracticeEntry(
			createWord(
				"กากมาก",
				"really trashy (casual)",
				"gaak maak",
				"daily",
				[
					{ thai: "กาก", sound: "gaak" },
					{ thai: "มาก", sound: "maak" },
				],
				"A common casual online insult. Useful to recognize, but definitely not polite speech.",
			),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord(
				"มามาก",
				"comes a lot / heavy",
				"maa maak",
				"daily",
				[
					{ thai: "มา", sound: "maa" },
					{ thai: "มาก", sound: "maak" },
				],
				"A short everyday phrase built from the same two visible chunks repeating back to back.",
			),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord(
				"กามา",
				"sensual matters",
				"gaa maa",
				"daily",
				[
					{ thai: "กา", sound: "gaa" },
					{ thai: "มา", sound: "maa" },
				],
				"A formal compound that is low-frequency but cleanly decodable from this lesson alone.",
			),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord(
				"กม",
				"sound-only practice",
				"gom",
				"daily",
				[{ thai: "กม", sound: "gom" }],
				"This one is here just to train the implied short o pattern. It is not a normal dictionary word.",
			),
			{ sourceType: "nonsense" },
		),
		createPracticeEntry(
			createWord(
				"มก",
				"sound-only practice",
				"mok",
				"daily",
				[{ thai: "มก", sound: "mok" }],
				"A second sound-only target so you can rehearse the same hidden-vowel move from the other direction.",
			),
			{ sourceType: "nonsense" },
		),
	],
	2: [
		createPracticeEntry(
			createWord("ดีด", "to flick / pluck", "diit", "daily", [
				{ thai: "ดีด", sound: "diit" },
			]),
		),
		createPracticeEntry(
			createWord("มี", "to have", "mii", "daily", [{ thai: "มี", sound: "mii" }]),
		),
		createPracticeEntry(
			createWord("มีด", "knife", "miit", "food", [{ thai: "มีด", sound: "miit" }]),
		),
		createPracticeEntry(
			createWord("ดีมาก", "very good", "dii maak", "daily", [
				{ thai: "ดี", sound: "dii" },
				{ thai: "มาก", sound: "maak" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("มา", "to come", "maa", "daily", [{ thai: "มา", sound: "maa" }]),
		),
		createPracticeEntry(
			createWord("มาก", "very / a lot", "maak", "daily", [{ thai: "มาก", sound: "maak" }]),
		),
		createPracticeEntry(
			createWord("กา", "crow / kettle / mark", "gaa", "daily", [
				{ thai: "กา", sound: "gaa" },
			]),
		),
	],
	3: [
		createPracticeEntry(
			createWord("นิด", "a little bit", "nit", "daily", [{ thai: "นิด", sound: "nit" }]),
		),
		createPracticeEntry(
			createWord("ดิน", "soil / earth", "din", "daily", [{ thai: "ดิน", sound: "din" }]),
		),
		createPracticeEntry(
			createWord("นา", "rice field", "naa", "place", [{ thai: "นา", sound: "naa" }]),
		),
		createPracticeEntry(
			createWord("นาม", "name / noun", "naam", "sign", [{ thai: "นาม", sound: "naam" }]),
		),
		createPracticeEntry(
			createWord("มี", "to have", "mii", "daily", [{ thai: "มี", sound: "mii" }]),
		),
		createPracticeEntry(
			createWord("ดี", "good", "dii", "daily", [{ thai: "ดี", sound: "dii" }]),
		),
		createPracticeEntry(
			createWord("มีด", "knife", "miit", "food", [{ thai: "มีด", sound: "miit" }]),
		),
		createPracticeEntry(
			createWord("มาก", "very / a lot", "maak", "daily", [{ thai: "มาก", sound: "maak" }]),
		),
	],
	4: [
		createPracticeEntry(
			createWord("ตลก", "funny", "dta-lok", "daily", [
				{ thai: "ตะ", sound: "dta" },
				{ thai: "ลก", sound: "lok" },
			]),
		),
		createPracticeEntry(
			createWord("ตาล", "sugar palm", "dtaan", "daily", [{ thai: "ตาล", sound: "dtaan" }]),
		),
		createPracticeEntry(
			createWord("ตา", "eye", "dtaa", "daily", [{ thai: "ตา", sound: "dtaa" }]),
		),
		createPracticeEntry(
			createWord("ลา", "to leave", "laa", "daily", [{ thai: "ลา", sound: "laa" }]),
		),
		createPracticeEntry(
			createWord("ตี", "to hit", "dtii", "daily", [{ thai: "ตี", sound: "dtii" }]),
		),
		createPracticeEntry(
			createWord("ตาม", "to follow", "dtaam", "daily", [{ thai: "ตาม", sound: "dtaam" }]),
		),
		createPracticeEntry(
			createWord("ลม", "wind / air", "lom", "daily", [{ thai: "ลม", sound: "lom" }]),
		),
		createPracticeEntry(
			createWord("ลด", "to reduce", "lot", "sign", [{ thai: "ลด", sound: "lot" }]),
		),
		createPracticeEntry(
			createWord("ตก", "to fall", "dtok", "daily", [{ thai: "ตก", sound: "dtok" }]),
		),
		createPracticeEntry(
			createWord("มด", "ant", "mot", "daily", [{ thai: "มด", sound: "mot" }]),
		),
	],
	5: [
		createPracticeEntry(
			createWord("กบ", "frog", "gop", "daily", [{ thai: "กบ", sound: "gop" }]),
		),
		createPracticeEntry(
			createWord("ลาบ", "laab salad", "laap", "food", [{ thai: "ลาบ", sound: "laap" }]),
		),
		createPracticeEntry(
			createWord("ดิบ", "raw / unripe", "dip", "food", [{ thai: "ดิบ", sound: "dip" }]),
		),
		createPracticeEntry(
			createWord("บีบ", "to squeeze", "biip", "daily", [{ thai: "บีบ", sound: "biip" }]),
		),
		createPracticeEntry(
			createWord("บาน", "to bloom / open out", "baan", "daily", [
				{ thai: "บาน", sound: "baan" },
			]),
		),
		createPracticeEntry(
			createWord("บด", "to grind", "bot", "food", [{ thai: "บด", sound: "bot" }]),
		),
		createPracticeEntry(
			createWord("บิดา", "father (formal)", "bi-daa", "sign", [
				{ thai: "บิ", sound: "bi" },
				{ thai: "ดา", sound: "daa" },
			]),
		),
		createPracticeEntry(
			createWord("ตลาด", "market", "dta-laat", "place", [
				{ thai: "ตะ", sound: "dta" },
				{ thai: "ลาด", sound: "laat" },
			]),
		),
		createPracticeEntry(
			createWord("ตลก", "funny", "dta-lok", "daily", [
				{ thai: "ตะ", sound: "dta" },
				{ thai: "ลก", sound: "lok" },
			]),
		),
		createPracticeEntry(
			createWord("กิน", "to eat", "gin", "food", [{ thai: "กิน", sound: "gin" }]),
		),
		createPracticeEntry(
			createWord("ดี", "good", "dii", "daily", [{ thai: "ดี", sound: "dii" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ลด", "to reduce", "lot", "sign", [{ thai: "ลด", sound: "lot" }]),
			{ tier: "extension" },
		),
	],
	6: [
		createPracticeEntry(
			createWord("แต่", "but / however", "dtae", "daily", [{ thai: "แต่", sound: "dtae" }]),
		),
		createPracticeEntry(
			createWord("แก่", "old", "gae", "daily", [{ thai: "แก่", sound: "gae" }]),
		),
		createPracticeEntry(
			createWord("แดด", "sunlight", "daet", "daily", [{ thai: "แดด", sound: "daet" }]),
		),
		createPracticeEntry(
			createWord("แตก", "to break", "dtaek", "daily", [{ thai: "แตก", sound: "dtaek" }]),
		),
		createPracticeEntry(
			createWord("แบน", "flat", "baen", "daily", [{ thai: "แบน", sound: "baen" }]),
		),
		createPracticeEntry(
			createWord("บ่น", "to complain", "bon", "daily", [{ thai: "บ่น", sound: "bon" }]),
		),
		createPracticeEntry(
			createWord("แก", "you (casual)", "gae", "daily", [{ thai: "แก", sound: "gae" }]),
		),
	],
	7: [
		createPracticeEntry(
			createWord("ม้า", "horse", "maa", "daily", [{ thai: "ม้า", sound: "maa" }]),
		),
		createPracticeEntry(
			createWord("บ้าน", "house / home", "baan", "place", [{ thai: "บ้าน", sound: "baan" }]),
		),
		createPracticeEntry(
			createWord("น้า", "aunt / uncle", "naa", "daily", [{ thai: "น้า", sound: "naa" }]),
		),
		createPracticeEntry(
			createWord("ด้าน", "side / aspect", "daan", "sign", [{ thai: "ด้าน", sound: "daan" }]),
		),
		createPracticeEntry(
			createWord("ราด", "to pour over", "raat", "food", [{ thai: "ราด", sound: "raat" }]),
		),
		createPracticeEntry(
			createWord("รีด", "to iron", "riit", "daily", [{ thai: "รีด", sound: "riit" }]),
		),
		createPracticeEntry(
			createWord("รด", "to water", "rot", "daily", [{ thai: "รด", sound: "rot" }]),
		),
		createPracticeEntry(
			createWord("ร้านดี", "good shop", "raan dii", "place", [
				{ thai: "ร้าน", sound: "raan" },
				{ thai: "ดี", sound: "dii" },
			]),
			{ sourceType: "phrase" },
		),
	],
	8: [
		createPracticeEntry(
			createWord("ชา", "tea", "chaa", "food", [{ thai: "ชา", sound: "chaa" }]),
		),
		createPracticeEntry(
			createWord("ชม", "to admire", "chom", "daily", [{ thai: "ชม", sound: "chom" }]),
		),
		createPracticeEntry(
			createWord("ชาม", "bowl", "chaam", "food", [{ thai: "ชาม", sound: "chaam" }]),
		),
		createPracticeEntry(
			createWord("ชิด", "close together", "chit", "daily", [{ thai: "ชิด", sound: "chit" }]),
		),
		createPracticeEntry(
			createWord("ดุ", "fierce / strict", "du", "daily", [{ thai: "ดุ", sound: "du" }]),
		),
		createPracticeEntry(
			createWord("ลุก", "to get up", "luk", "daily", [{ thai: "ลุก", sound: "luk" }]),
		),
		createPracticeEntry(
			createWord("บุก", "to charge in", "buk", "daily", [{ thai: "บุก", sound: "buk" }]),
		),
		createPracticeEntry(
			createWord("นุ่ม", "soft", "num", "daily", [{ thai: "นุ่ม", sound: "num" }]),
		),
		createPracticeEntry(
			createWord("ตลก", "funny", "dta-lok", "daily", [
				{ thai: "ตะ", sound: "dta" },
				{ thai: "ลก", sound: "lok" },
			]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ตลาด", "market", "dta-laat", "place", [
				{ thai: "ตะ", sound: "dta" },
				{ thai: "ลาด", sound: "laat" },
			]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ม้า", "horse", "maa", "daily", [{ thai: "ม้า", sound: "maa" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ร้าน", "shop", "raan", "place", [{ thai: "ร้าน", sound: "raan" }]),
			{ tier: "extension" },
		),
	],
	9: [
		createPracticeEntry(
			createWord("สี", "color", "sii", "daily", [{ thai: "สี", sound: "sii" }]),
		),
		createPracticeEntry(
			createWord("สาม", "three", "saam", "sign", [{ thai: "สาม", sound: "saam" }]),
		),
		createPracticeEntry(
			createWord("ส้ม", "orange", "som", "food", [{ thai: "ส้ม", sound: "som" }]),
		),
		createPracticeEntry(
			createWord("สนุก", "fun", "sa-nuk", "daily", [
				{ thai: "สะ", sound: "sa" },
				{ thai: "นุก", sound: "nuk" },
			]),
		),
		createPracticeEntry(
			createWord("สุด", "most / end", "sut", "daily", [{ thai: "สุด", sound: "sut" }]),
		),
		createPracticeEntry(
			createWord("สด", "fresh", "sot", "food", [{ thai: "สด", sound: "sot" }]),
		),
		createPracticeEntry(
			createWord("สมุด", "notebook", "sa-mut", "sign", [
				{ thai: "สะ", sound: "sa" },
				{ thai: "มุด", sound: "mut" },
			]),
		),
		createPracticeEntry(
			createWord("สามสิบ", "thirty", "saam sip", "sign", [
				{ thai: "สาม", sound: "saam" },
				{ thai: "สิบ", sound: "sip" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ส้มสด", "fresh oranges", "som sot", "food", [
				{ thai: "ส้ม", sound: "som" },
				{ thai: "สด", sound: "sot" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
	],
	10: [
		createPracticeEntry(
			createWord("ขวา", "right side", "khwaa", "sign", [{ thai: "ขวา", sound: "khwaa" }]),
		),
		createPracticeEntry(
			createWord("ข่าว", "news", "khaao", "sign", [{ thai: "ข่าว", sound: "khaao" }]),
		),
		createPracticeEntry(
			createWord("ขาว", "white", "khaao", "daily", [{ thai: "ขาว", sound: "khaao" }]),
		),
		createPracticeEntry(
			createWord("ขวด", "bottle", "khuat", "daily", [{ thai: "ขวด", sound: "khuat" }]),
		),
		createPracticeEntry(
			createWord("ขา", "leg", "khaa", "daily", [{ thai: "ขา", sound: "khaa" }]),
		),
		createPracticeEntry(
			createWord("ขม", "bitter", "khom", "food", [{ thai: "ขม", sound: "khom" }]),
		),
		createPracticeEntry(
			createWord("ขาด", "to lack / be torn", "khaat", "daily", [
				{ thai: "ขาด", sound: "khaat" },
			]),
		),
		createPracticeEntry(
			createWord("วาด", "to draw", "waat", "daily", [{ thai: "วาด", sound: "waat" }]),
		),
		createPracticeEntry(
			createWord("ว่า", "to say / that", "waa", "daily", [{ thai: "ว่า", sound: "waa" }]),
		),
		createPracticeEntry(
			createWord("ดาว", "star", "daao", "daily", [{ thai: "ดาว", sound: "daao" }]),
		),
		createPracticeEntry(
			createWord("สวน", "garden / park", "suan", "place", [{ thai: "สวน", sound: "suan" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ข้าวขาว", "white rice", "khaao khaao", "food", [
				{ thai: "ข้าว", sound: "khaao" },
				{ thai: "ขาว", sound: "khaao" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
	],
	11: [
		createPracticeEntry(
			createWord("หู", "ear", "huu", "daily", [{ thai: "หู", sound: "huu" }]),
		),
		createPracticeEntry(
			createWord("หมา", "dog", "maa", "daily", [{ thai: "หมา", sound: "maa" }]),
		),
		createPracticeEntry(
			createWord("หา", "to look for", "haa", "daily", [{ thai: "หา", sound: "haa" }]),
		),
		createPracticeEntry(
			createWord("รู้", "to know", "ruu", "daily", [{ thai: "รู้", sound: "ruu" }]),
		),
		createPracticeEntry(
			createWord("ดู", "to watch", "duu", "daily", [{ thai: "ดู", sound: "duu" }]),
		),
		createPracticeEntry(
			createWord("หิว", "hungry", "hiw", "daily", [{ thai: "หิว", sound: "hiw" }]),
		),
		createPracticeEntry(
			createWord("หมด", "all gone", "mot", "daily", [{ thai: "หมด", sound: "mot" }]),
		),
		createPracticeEntry(
			createWord("ลูก", "child", "luuk", "daily", [{ thai: "ลูก", sound: "luuk" }]),
		),
		createPracticeEntry(
			createWord("ตู้", "cabinet", "tuu", "place", [{ thai: "ตู้", sound: "tuu" }]),
		),
		createPracticeEntry(
			createWord("สู้", "to fight", "suu", "daily", [{ thai: "สู้", sound: "suu" }]),
		),
		createPracticeEntry(
			createWord("หวาน", "sweet", "waan", "food", [{ thai: "หวาน", sound: "waan" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ห้าม", "forbidden / do not", "haam", "sign", [
				{ thai: "ห้าม", sound: "haam" },
			]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("หิวมาก", "very hungry", "hiw maak", "daily", [
				{ thai: "หิว", sound: "hiw" },
				{ thai: "มาก", sound: "maak" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("หมูสด", "fresh pork", "muu sot", "food", [
				{ thai: "หมู", sound: "muu" },
				{ thai: "สด", sound: "sot" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
	],
	12: [
		createPracticeEntry(
			createWord("ออก", "to exit / go out", "awk", "sign", [{ thai: "ออก", sound: "awk" }]),
		),
		createPracticeEntry(
			createWord("ขอ", "to ask for", "khaaw", "daily", [{ thai: "ขอ", sound: "khaaw" }]),
		),
		createPracticeEntry(
			createWord("ชอบ", "to like", "chaawp", "daily", [{ thai: "ชอบ", sound: "chaawp" }]),
		),
		createPracticeEntry(
			createWord("ร้อน", "hot", "raawn", "daily", [{ thai: "ร้อน", sound: "raawn" }]),
		),
		createPracticeEntry(
			createWord("รอ", "to wait", "raaw", "daily", [{ thai: "รอ", sound: "raaw" }]),
		),
		createPracticeEntry(
			createWord("บอก", "to tell", "baawk", "daily", [{ thai: "บอก", sound: "baawk" }]),
		),
		createPracticeEntry(
			createWord("หมอ", "doctor", "maaw", "daily", [{ thai: "หมอ", sound: "maaw" }]),
		),
		createPracticeEntry(
			createWord("ดอก", "flower", "daawk", "daily", [{ thai: "ดอก", sound: "daawk" }]),
		),
		createPracticeEntry(
			createWord("หอม", "fragrant", "haawm", "daily", [{ thai: "หอม", sound: "haawm" }]),
		),
		createPracticeEntry(
			createWord("ตอบ", "to answer", "dtaawp", "daily", [{ thai: "ตอบ", sound: "dtaawp" }]),
		),
		createPracticeEntry(
			createWord("อ้วน", "fat / overweight", "uuan", "daily", [
				{ thai: "อ้วน", sound: "uuan" },
			]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ขอชา", "may I have tea", "khaaw chaa", "food", [
				{ thai: "ขอ", sound: "khaaw" },
				{ thai: "ชา", sound: "chaa" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ชอบมาก", "like very much", "chaawp maak", "daily", [
				{ thai: "ชอบ", sound: "chaawp" },
				{ thai: "มาก", sound: "maak" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
	],
	13: [
		createPracticeEntry(
			createWord("ผัก", "vegetables", "phak", "food", [{ thai: "ผัก", sound: "phak" }]),
		),
		createPracticeEntry(
			createWord("ผม", "I / hair", "phom", "daily", [{ thai: "ผม", sound: "phom" }]),
		),
		createPracticeEntry(
			createWord("รัก", "to love", "rak", "daily", [{ thai: "รัก", sound: "rak" }]),
		),
		createPracticeEntry(
			createWord("วัน", "day", "wan", "sign", [{ thai: "วัน", sound: "wan" }]),
		),
		createPracticeEntry(
			createWord("มัน", "it / oily", "man", "daily", [{ thai: "มัน", sound: "man" }]),
		),
		createPracticeEntry(
			createWord("วัด", "temple / to measure", "wat", "place", [
				{ thai: "วัด", sound: "wat" },
			]),
		),
		createPracticeEntry(
			createWord("รับ", "to receive", "rap", "daily", [{ thai: "รับ", sound: "rap" }]),
		),
		createPracticeEntry(
			createWord("ขับ", "to drive", "khap", "daily", [{ thai: "ขับ", sound: "khap" }]),
		),
		createPracticeEntry(
			createWord("หัว", "head", "hua", "daily", [{ thai: "หัว", sound: "hua" }]),
		),
		createPracticeEntry(
			createWord("ตับ", "liver", "dtap", "food", [{ thai: "ตับ", sound: "dtap" }]),
		),
		createPracticeEntry(
			createWord("สั้น", "short", "san", "daily", [{ thai: "สั้น", sound: "san" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ผ้า", "cloth", "phaa", "daily", [{ thai: "ผ้า", sound: "phaa" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ผี", "ghost", "phii", "daily", [{ thai: "ผี", sound: "phii" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ตัว", "body / self", "dtua", "daily", [{ thai: "ตัว", sound: "dtua" }]),
			{ tier: "extension" },
		),
		createPracticeEntry(
			createWord("ผัดผัก", "stir-fried vegetables", "phat phak", "food", [
				{ thai: "ผัด", sound: "phat" },
				{ thai: "ผัก", sound: "phak" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ผมหิว", "I am hungry", "phom hiw", "daily", [
				{ thai: "ผม", sound: "phom" },
				{ thai: "หิว", sound: "hiw" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("รักแม่", "to love mom", "rak mae", "daily", [
				{ thai: "รัก", sound: "rak" },
				{ thai: "แม่", sound: "mae" },
			]),
			{ tier: "extension", sourceType: "phrase" },
		),
	],
	14: [
		createPracticeEntry(
			createWord("รอ", "to wait", "raw", "daily", [{ thai: "รอ", sound: "raw" }]),
		),
		createPracticeEntry(
			createWord("มอง", "to look at", "mawng", "daily", [{ thai: "มอง", sound: "mawng" }]),
		),
		createPracticeEntry(
			createWord("ลอง", "to try", "lawng", "daily", [{ thai: "ลอง", sound: "lawng" }]),
		),
		createPracticeEntry(
			createWord("งา", "sesame", "ngaa", "food", [{ thai: "งา", sound: "ngaa" }]),
		),
		createPracticeEntry(
			createWord("ต้อง", "must / have to", "dtâwng", "daily", [
				{ thai: "ต้อง", sound: "dtâwng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สอง", "two", "sǎwng", "daily", [{ thai: "สอง", sound: "sǎwng" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ห้อง", "room", "hâwng", "sign", [{ thai: "ห้อง", sound: "hâwng" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ข้างหลัง", "behind", "khâang-lǎng", "sign", [
				{ thai: "ข้าง", sound: "khâang" },
				{ thai: "หลัง", sound: "lǎng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ของกิน", "things to eat", "khǎwng gin", "food", [
				{ thai: "ของ", sound: "khǎwng" },
				{ thai: "กิน", sound: "gin" },
			]),
			{ sourceType: "phrase" },
		),
	],
	15: [
		createPracticeEntry(
			createWord("ทา", "to apply / spread on", "thaa", "daily", [
				{ thai: "ทา", sound: "thaa" },
			]),
		),
		createPracticeEntry(
			createWord("ทาน", "to eat (polite)", "thaan", "food", [
				{ thai: "ทาน", sound: "thaan" },
			]),
		),
		createPracticeEntry(
			createWord("ทอง", "gold", "thawng", "daily", [{ thai: "ทอง", sound: "thawng" }]),
		),
		createPracticeEntry(
			createWord("ที่", "at / place", "thîi", "daily", [{ thai: "ที่", sound: "thîi" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ทุก", "every", "thúk", "daily", [{ thai: "ทุก", sound: "thúk" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ท่าน", "you (formal)", "thâan", "daily", [
				{ thai: "ท่าน", sound: "thâan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ทอด", "to deep-fry", "thâwt", "food", [{ thai: "ทอด", sound: "thâwt" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ทีวี", "TV", "thii-wii", "daily", [
				{ thai: "ที", sound: "thii" },
				{ thai: "วี", sound: "wii" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ทางออก", "exit", "thaang awk", "sign", [
				{ thai: "ทาง", sound: "thaang" },
				{ thai: "ออก", sound: "awk" },
			]),
			{ sourceType: "phrase" },
		),
	],
	16: [
		createPracticeEntry(
			createWord("จาน", "plate", "jaan", "food", [{ thai: "จาน", sound: "jaan" }]),
		),
		createPracticeEntry(
			createWord("จด", "to write down", "jòt", "daily", [{ thai: "จด", sound: "jòt" }]),
		),
		createPracticeEntry(
			createWord("กะ", "to estimate / guess", "gà", "daily", [{ thai: "กะ", sound: "gà" }]),
		),
		createPracticeEntry(
			createWord("จบ", "to finish / end", "jòp", "daily", [{ thai: "จบ", sound: "jòp" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("และ", "and", "láe", "daily", [{ thai: "และ", sound: "láe" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("จอด", "to park", "jàwt", "sign", [{ thai: "จอด", sound: "jàwt" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("จะกิน", "will eat", "jà gin", "food", [
				{ thai: "จะ", sound: "jà" },
				{ thai: "กิน", sound: "gin" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("จะมา", "will come", "jà maa", "daily", [
				{ thai: "จะ", sound: "jà" },
				{ thai: "มา", sound: "maa" },
			]),
			{ sourceType: "phrase" },
		),
	],
	17: [
		createPracticeEntry(
			createWord("เท", "to pour", "thee", "daily", [{ thai: "เท", sound: "thee" }]),
		),
		createPracticeEntry(
			createWord("เตะ", "to kick", "dtè", "daily", [{ thai: "เตะ", sound: "dtè" }]),
		),
		createPracticeEntry(
			createWord("เลข", "number", "lêek", "sign", [{ thai: "เลข", sound: "lêek" }]),
		),
		createPracticeEntry(
			createWord("เอา", "to want / take", "ao", "daily", [{ thai: "เอา", sound: "ao" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เช้า", "morning", "cháo", "daily", [{ thai: "เช้า", sound: "cháo" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เล่น", "to play", "lên", "daily", [{ thai: "เล่น", sound: "lên" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เงิน", "money", "ngern", "daily", [{ thai: "เงิน", sound: "ngern" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เวลา", "time", "wee-laa", "daily", [
				{ thai: "เว", sound: "wee" },
				{ thai: "ลา", sound: "laa" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เกะ", "sound-only practice", "gè", "daily", [{ thai: "เกะ", sound: "gè" }]),
			{ sourceType: "nonsense" },
		),
	],
	18: [
		createPracticeEntry(
			createWord("ไม่", "not", "mâi", "daily", [{ thai: "ไม่", sound: "mâi" }]),
		),
		createPracticeEntry(
			createWord("ใจ", "heart / mind", "jai", "daily", [{ thai: "ใจ", sound: "jai" }]),
		),
		createPracticeEntry(
			createWord("ใช่", "yes / that's right", "châi", "daily", [
				{ thai: "ใช่", sound: "châi" },
			]),
		),
		createPracticeEntry(
			createWord("ไหน", "where / which", "nǎi", "daily", [{ thai: "ไหน", sound: "nǎi" }]),
		),
		createPracticeEntry(
			createWord("ใหม่", "new", "mài", "daily", [{ thai: "ใหม่", sound: "mài" }]),
		),
		createPracticeEntry(
			createWord("ได้", "can / to get", "dâai", "daily", [{ thai: "ได้", sound: "dâai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ไหม", "(question particle)", "mǎi", "daily", [
				{ thai: "ไหม", sound: "mǎi" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ใช้", "to use", "chái", "daily", [{ thai: "ใช้", sound: "chái" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ใน", "in", "nai", "daily", [{ thai: "ใน", sound: "nai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ให้", "to give / for", "hâi", "daily", [{ thai: "ให้", sound: "hâi" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ไข่", "egg", "khài", "food", [{ thai: "ไข่", sound: "khài" }]),
			{ drillTarget: false },
		),
	],
	19: [
		createPracticeEntry(
			createWord("โมง", "o'clock", "moong", "daily", [{ thai: "โมง", sound: "moong" }]),
		),
		createPracticeEntry(
			createWord("โดน", "to get / be affected by", "doon", "daily", [
				{ thai: "โดน", sound: "doon" },
			]),
		),
		createPracticeEntry(
			createWord("โง่", "silly / foolish", "ngôo", "daily", [{ thai: "โง่", sound: "ngôo" }]),
		),
		createPracticeEntry(
			createWord("โล", "kilo", "loo", "sign", [{ thai: "โล", sound: "loo" }]),
		),
		createPracticeEntry(
			createWord("โทร", "to phone", "thoo", "daily", [{ thai: "โทร", sound: "thoo" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("โรง", "building / hall", "roong", "place", [
				{ thai: "โรง", sound: "roong" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("โกหก", "to lie", "goo-hòk", "daily", [
				{ thai: "โก", sound: "goo" },
				{ thai: "หก", sound: "hòk" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("โมโห", "angry", "moo-hǒo", "daily", [
				{ thai: "โม", sound: "moo" },
				{ thai: "โห", sound: "hǒo" },
			]),
			{ drillTarget: false },
		),
	],
	20: [
		createPracticeEntry(
			createWord("เปิด", "to open", "bpèrt", "sign", [{ thai: "เปิด", sound: "bpèrt" }]),
		),
		createPracticeEntry(
			createWord("ไป", "to go", "bpai", "daily", [{ thai: "ไป", sound: "bpai" }]),
		),
		createPracticeEntry(
			createWord("ปลา", "fish", "bplaa", "food", [{ thai: "ปลา", sound: "bplaa" }]),
		),
		createPracticeEntry(
			createWord("ปี", "year", "bpii", "daily", [{ thai: "ปี", sound: "bpii" }]),
		),
		createPracticeEntry(
			createWord("ปา", "to throw", "bpaa", "daily", [{ thai: "ปา", sound: "bpaa" }]),
		),
		createPracticeEntry(
			createWord("ปวด", "to ache", "bpùuat", "daily", [{ thai: "ปวด", sound: "bpùuat" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปาก", "mouth", "bpàak", "daily", [{ thai: "ปาก", sound: "bpàak" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปกติ", "normal", "bpòk-gà-dtì", "daily", [
				{ thai: "ปก", sound: "bpòk" },
				{ thai: "ติ", sound: "gà-dtì" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปิดร้าน", "to close a shop", "bpìt ráan", "sign", [
				{ thai: "ปิด", sound: "bpìt" },
				{ thai: "ร้าน", sound: "ráan" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	21: [
		createPracticeEntry(
			createWord("ยาก", "difficult", "yâak", "daily", [{ thai: "ยาก", sound: "yâak" }]),
		),
		createPracticeEntry(
			createWord("ยาว", "long", "yaao", "daily", [{ thai: "ยาว", sound: "yaao" }]),
		),
		createPracticeEntry(
			createWord("ขาย", "to sell", "khǎai", "sign", [{ thai: "ขาย", sound: "khǎai" }]),
		),
		createPracticeEntry(
			createWord("ขาว", "white", "khǎao", "daily", [{ thai: "ขาว", sound: "khǎao" }]),
		),
		createPracticeEntry(
			createWord("ข้าว", "rice", "khâao", "food", [{ thai: "ข้าว", sound: "khâao" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สวย", "beautiful", "sǔuai", "daily", [{ thai: "สวย", sound: "sǔuai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ด้วย", "also / with", "dûuai", "daily", [{ thai: "ด้วย", sound: "dûuai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ยิ้ม", "to smile", "yím", "daily", [{ thai: "ยิ้ม", sound: "yím" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สาย", "late / line", "sǎai", "daily", [{ thai: "สาย", sound: "sǎai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ขายของ", "to sell goods", "khǎai khǎwng", "sign", [
				{ thai: "ขาย", sound: "khǎai" },
				{ thai: "ของ", sound: "khǎwng" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
		createPracticeEntry(
			createWord("ร้านขายยา", "pharmacy", "ráan khǎai yaa", "sign", [
				{ thai: "ร้าน", sound: "ráan" },
				{ thai: "ขาย", sound: "khǎai" },
				{ thai: "ยา", sound: "yaa" },
			]),
			{ sourceType: "phrase" },
		),
	],
	22: [
		createPracticeEntry(
			createWord("คุณ", "you", "khun", "daily", [{ thai: "คุณ", sound: "khun" }]),
		),
		createPracticeEntry(
			createWord("ครับ", "polite particle (male)", "khráp", "daily", [
				{ thai: "ครับ", sound: "khráp" },
			]),
		),
		createPracticeEntry(
			createWord("ค่ะ", "polite particle (female)", "khâ", "daily", [
				{ thai: "ค่ะ", sound: "khâ" },
			]),
		),
		createPracticeEntry(
			createWord("ความรัก", "love", "khwaam-rák", "daily", [
				{ thai: "ความ", sound: "khwaam" },
				{ thai: "รัก", sound: "rák" },
			]),
		),
		createPracticeEntry(
			createWord("คิด", "to think", "khít", "daily", [{ thai: "คิด", sound: "khít" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ค่า", "value / fee", "khâa", "sign", [{ thai: "ค่า", sound: "khâa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คำ", "word", "kham", "daily", [{ thai: "คำ", sound: "kham" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ครู", "teacher", "khruu", "daily", [{ thai: "ครู", sound: "khruu" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คืน", "night / to return", "khuen", "daily", [
				{ thai: "คืน", sound: "khuen" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คุย", "to chat", "khui", "daily", [{ thai: "คุย", sound: "khui" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ความสุข", "happiness", "khwaam-sùk", "daily", [
				{ thai: "ความ", sound: "khwaam" },
				{ thai: "สุข", sound: "sùk" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ครอบครัว", "family", "khrâwp-khruua", "daily", [
				{ thai: "ครอบ", sound: "khrâwp" },
				{ thai: "ครัว", sound: "khruua" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คิดถึง", "to miss (someone)", "khít-thǔeng", "daily", [
				{ thai: "คิด", sound: "khít" },
				{ thai: "ถึง", sound: "thǔeng" },
			]),
			{ drillTarget: false },
		),
	],
	23: [
		createPracticeEntry(
			createWord("พ่อ", "father", "phâw", "daily", [{ thai: "พ่อ", sound: "phâw" }]),
		),
		createPracticeEntry(
			createWord("เพื่อน", "friend", "phûuean", "daily", [
				{ thai: "เพื่อน", sound: "phûuean" },
			]),
		),
		createPracticeEntry(
			createWord("พูด", "to speak", "phûut", "daily", [{ thai: "พูด", sound: "phûut" }]),
		),
		createPracticeEntry(
			createWord("พบ", "to meet", "phóp", "daily", [{ thai: "พบ", sound: "phóp" }]),
		),
		createPracticeEntry(
			createWord("พา", "to lead / take", "phaa", "daily", [{ thai: "พา", sound: "phaa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เพลง", "song", "phleeng", "daily", [{ thai: "เพลง", sound: "phleeng" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("พี่", "older sibling", "phîi", "daily", [{ thai: "พี่", sound: "phîi" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("แพ้", "to lose / be allergic", "pháe", "daily", [
				{ thai: "แพ้", sound: "pháe" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("พอ", "enough", "phaw", "daily", [{ thai: "พอ", sound: "phaw" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เพราะ", "because", "phráw", "daily", [{ thai: "เพราะ", sound: "phráw" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("พระ", "monk", "phrá", "daily", [{ thai: "พระ", sound: "phrá" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("พริก", "chili", "phrík", "food", [{ thai: "พริก", sound: "phrík" }]),
			{ drillTarget: false },
		),
	],
	24: [
		createPracticeEntry(
			createWord("ทำ", "to do / make", "tham", "daily", [{ thai: "ทำ", sound: "tham" }]),
		),
		createPracticeEntry(
			createWord("คำ", "word", "kham", "daily", [{ thai: "คำ", sound: "kham" }]),
		),
		createPracticeEntry(
			createWord("ดำ", "black", "dam", "daily", [{ thai: "ดำ", sound: "dam" }]),
		),
		createPracticeEntry(
			createWord("จำ", "to remember", "jam", "daily", [{ thai: "จำ", sound: "jam" }]),
		),
		createPracticeEntry(
			createWord("ทำไม", "why", "tham-mai", "daily", [
				{ thai: "ทำ", sound: "tham" },
				{ thai: "ไม", sound: "mai" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("นำ", "to lead", "nam", "daily", [{ thai: "นำ", sound: "nam" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ทำงาน", "to work", "tham-ngaan", "daily", [
				{ thai: "ทำ", sound: "tham" },
				{ thai: "งาน", sound: "ngaan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("น้ำมัน", "oil / fuel", "nám-man", "sign", [
				{ thai: "น้ำ", sound: "nám" },
				{ thai: "มัน", sound: "man" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สำคัญ", "important", "sǎm-khan", "daily", [
				{ thai: "สำ", sound: "sǎm" },
				{ thai: "คัญ", sound: "khan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("กำลัง", "(progressive marker)", "gam-lang", "daily", [
				{ thai: "กำ", sound: "gam" },
				{ thai: "ลัง", sound: "lang" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คำถาม", "question", "kham-thǎam", "daily", [
				{ thai: "คำ", sound: "kham" },
				{ thai: "ถาม", sound: "thǎam" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ทำอาหาร", "to cook", "tham aa-hǎan", "food", [
				{ thai: "ทำ", sound: "tham" },
				{ thai: "อา", sound: "aa" },
				{ thai: "หาร", sound: "hǎan" },
			]),
			{ sourceType: "phrase" },
		),
	],
	25: [
		createPracticeEntry(
			createWord("เรา", "we", "rao", "daily", [{ thai: "เรา", sound: "rao" }]),
		),
		createPracticeEntry(
			createWord("เอา", "to take / want", "ao", "daily", [{ thai: "เอา", sound: "ao" }]),
		),
		createPracticeEntry(
			createWord("เก้า", "nine", "gâo", "daily", [{ thai: "เก้า", sound: "gâo" }]),
		),
		createPracticeEntry(
			createWord("เช้า", "morning", "cháo", "daily", [{ thai: "เช้า", sound: "cháo" }]),
		),
		createPracticeEntry(
			createWord("เล่า", "to tell (a story)", "lâo", "daily", [
				{ thai: "เล่า", sound: "lâo" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เบา", "light / soft", "bao", "daily", [{ thai: "เบา", sound: "bao" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เผา", "to burn", "phǎo", "daily", [{ thai: "เผา", sound: "phǎo" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เดา", "to guess", "dao", "daily", [{ thai: "เดา", sound: "dao" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เข้า", "to enter", "khâo", "daily", [{ thai: "เข้า", sound: "khâo" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เท่า", "equal to", "thâo", "daily", [{ thai: "เท่า", sound: "thâo" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เสา", "pillar / post", "sǎo", "daily", [{ thai: "เสา", sound: "sǎo" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เข้าใจ", "to understand", "khâo-jai", "daily", [
				{ thai: "เข้า", sound: "khâo" },
				{ thai: "ใจ", sound: "jai" },
			]),
			{ drillTarget: false },
		),
	],
	26: [
		createPracticeEntry(
			createWord("ซื้อ", "to buy", "súe", "daily", [{ thai: "ซื้อ", sound: "súe" }]),
		),
		createPracticeEntry(
			createWord("ซ้าย", "left", "sáai", "sign", [{ thai: "ซ้าย", sound: "sáai" }]),
		),
		createPracticeEntry(
			createWord("ซัก", "to wash (clothes)", "sák", "daily", [{ thai: "ซัก", sound: "sák" }]),
		),
		createPracticeEntry(
			createWord("เซ็น", "to sign", "sen", "sign", [{ thai: "เซ็น", sound: "sen" }]),
		),
		createPracticeEntry(
			createWord("ซ้ำ", "to repeat", "sám", "daily", [{ thai: "ซ้ำ", sound: "sám" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ซอง", "envelope", "sawng", "daily", [{ thai: "ซอง", sound: "sawng" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ซวย", "unlucky", "suuai", "daily", [{ thai: "ซวย", sound: "suuai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ซ่อม", "to repair", "sâwm", "daily", [{ thai: "ซ่อม", sound: "sâwm" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ซื้อของ", "to shop", "súe khǎwng", "daily", [
				{ thai: "ซื้อ", sound: "súe" },
				{ thai: "ของ", sound: "khǎwng" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ซักผ้า", "to do laundry", "sák phâa", "daily", [
				{ thai: "ซัก", sound: "sák" },
				{ thai: "ผ้า", sound: "phâa" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ซื้อขาย", "to trade", "súe khǎai", "daily", [
				{ thai: "ซื้อ", sound: "súe" },
				{ thai: "ขาย", sound: "khǎai" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	27: [
		createPracticeEntry(
			createWord("ฟัง", "to listen", "fang", "daily", [{ thai: "ฟัง", sound: "fang" }]),
		),
		createPracticeEntry(
			createWord("ไฟฟ้า", "electricity", "fai-fáa", "sign", [
				{ thai: "ไฟ", sound: "fai" },
				{ thai: "ฟ้า", sound: "fáa" },
			]),
		),
		createPracticeEntry(
			createWord("ฟรี", "free", "frii", "sign", [{ thai: "ฟรี", sound: "frii" }]),
		),
		createPracticeEntry(
			createWord("ฟัน", "tooth", "fan", "daily", [{ thai: "ฟัน", sound: "fan" }]),
		),
		createPracticeEntry(
			createWord("ฟ้า", "sky / blue", "fáa", "daily", [{ thai: "ฟ้า", sound: "fáa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("กาแฟ", "coffee", "gaa-fae", "food", [
				{ thai: "กา", sound: "gaa" },
				{ thai: "แฟ", sound: "fae" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ฟาง", "straw / hay", "faang", "daily", [{ thai: "ฟาง", sound: "faang" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ไฟแดง", "red light", "fai-daeng", "sign", [
				{ thai: "ไฟ", sound: "fai" },
				{ thai: "แดง", sound: "daeng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เปิดไฟ", "to turn on the light", "bpèrt fai", "daily", [
				{ thai: "เปิด", sound: "bpèrt" },
				{ thai: "ไฟ", sound: "fai" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ดับไฟ", "to turn off the light", "dàp fai", "daily", [
				{ thai: "ดับ", sound: "dàp" },
				{ thai: "ไฟ", sound: "fai" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	28: [
		createPracticeEntry(
			createWord("ถาม", "to ask", "thǎam", "daily", [{ thai: "ถาม", sound: "thǎam" }]),
		),
		createPracticeEntry(
			createWord("ถูก", "cheap / correct", "thùuk", "sign", [
				{ thai: "ถูก", sound: "thùuk" },
			]),
		),
		createPracticeEntry(
			createWord("ถ้า", "if", "thâa", "daily", [{ thai: "ถ้า", sound: "thâa" }]),
		),
		createPracticeEntry(
			createWord("ถือ", "to hold", "thǔe", "daily", [{ thai: "ถือ", sound: "thǔe" }]),
		),
		createPracticeEntry(
			createWord("ถัง", "bucket / tank", "thǎng", "daily", [{ thai: "ถัง", sound: "thǎng" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ถึง", "to arrive / until", "thǔeng", "daily", [
				{ thai: "ถึง", sound: "thǔeng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ถอน", "to withdraw", "thǎwn", "daily", [{ thai: "ถอน", sound: "thǎwn" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ถ่าย", "to photograph", "thàai", "daily", [
				{ thai: "ถ่าย", sound: "thàai" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ถาด", "tray", "thàat", "food", [{ thai: "ถาด", sound: "thàat" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ถูกต้อง", "correct", "thùuk-dtâwng", "daily", [
				{ thai: "ถูก", sound: "thùuk" },
				{ thai: "ต้อง", sound: "dtâwng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ถามทาง", "to ask directions", "thǎam thaang", "sign", [
				{ thai: "ถาม", sound: "thǎam" },
				{ thai: "ทาง", sound: "thaang" },
			]),
			{ sourceType: "phrase" },
		),
	],
	29: [
		createPracticeEntry(
			createWord("คือ", "is / namely", "khue", "daily", [{ thai: "คือ", sound: "khue" }]),
		),
		createPracticeEntry(
			createWord("ถือ", "to hold", "thǔe", "daily", [{ thai: "ถือ", sound: "thǔe" }]),
		),
		createPracticeEntry(
			createWord("ลืม", "to forget", "luem", "daily", [{ thai: "ลืม", sound: "luem" }]),
		),
		createPracticeEntry(
			createWord("หนึ่ง", "one", "nùeng", "daily", [{ thai: "หนึ่ง", sound: "nùeng" }]),
		),
		createPracticeEntry(
			createWord("ดึก", "late at night", "dùek", "daily", [{ thai: "ดึก", sound: "dùek" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ยืม", "to borrow", "yuem", "daily", [{ thai: "ยืม", sound: "yuem" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("มืด", "dark", "mûet", "daily", [{ thai: "มืด", sound: "mûet" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ตึก", "building", "dtùek", "place", [{ thai: "ตึก", sound: "dtùek" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ดื่ม", "to drink", "dùem", "food", [{ thai: "ดื่ม", sound: "dùem" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("มือถือ", "mobile phone", "mue-thǔe", "daily", [
				{ thai: "มือ", sound: "mue" },
				{ thai: "ถือ", sound: "thǔe" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คิดถึง", "to miss (someone)", "khít-thǔeng", "daily", [
				{ thai: "คิด", sound: "khít" },
				{ thai: "ถึง", sound: "thǔeng" },
			]),
			{ drillTarget: false },
		),
	],
	30: [
		createPracticeEntry(
			createWord("เสีย", "to lose / broken", "sǐia", "daily", [
				{ thai: "เสีย", sound: "sǐia" },
			]),
		),
		createPracticeEntry(
			createWord("เรียน", "to study", "rian", "daily", [{ thai: "เรียน", sound: "rian" }]),
		),
		createPracticeEntry(
			createWord("เขียน", "to write", "khǐian", "daily", [
				{ thai: "เขียน", sound: "khǐian" },
			]),
		),
		createPracticeEntry(
			createWord("เมีย", "wife (colloquial)", "miia", "daily", [
				{ thai: "เมีย", sound: "miia" },
			]),
		),
		createPracticeEntry(
			createWord("เปียก", "wet", "bpìiak", "daily", [{ thai: "เปียก", sound: "bpìiak" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เสื้อ", "shirt", "sûea", "daily", [{ thai: "เสื้อ", sound: "sûea" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("โทรศัพท์", "telephone", "thoo-rá-sàp", "daily", [
				{ thai: "โท", sound: "thoo" },
				{ thai: "ระ", sound: "rá" },
				{ thai: "ศัพท์", sound: "sàp" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("อาทิตย์", "week / Sunday", "aa-thít", "daily", [
				{ thai: "อา", sound: "aa" },
				{ thai: "ทิตย์", sound: "thít" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เสียใจ", "sad", "sǐia-jai", "daily", [
				{ thai: "เสีย", sound: "sǐia" },
				{ thai: "ใจ", sound: "jai" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เรียนภาษา", "to study a language", "rian phaa-sǎa", "daily", [
				{ thai: "เรียน", sound: "rian" },
				{ thai: "ภา", sound: "phaa" },
				{ thai: "ษา", sound: "sǎa" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	31: [
		createPracticeEntry(
			createWord("ตัว", "body / classifier", "dtuua", "daily", [
				{ thai: "ตัว", sound: "dtuua" },
			]),
		),
		createPracticeEntry(
			createWord("หัว", "head", "hǔua", "daily", [{ thai: "หัว", sound: "hǔua" }]),
		),
		createPracticeEntry(
			createWord("กลัว", "to fear", "gluua", "daily", [{ thai: "กลัว", sound: "gluua" }]),
		),
		createPracticeEntry(
			createWord("ด้วย", "also / with", "dûuai", "daily", [{ thai: "ด้วย", sound: "dûuai" }]),
		),
		createPracticeEntry(
			createWord("ครัว", "kitchen", "khruua", "daily", [{ thai: "ครัว", sound: "khruua" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("รวย", "rich", "ruuai", "daily", [{ thai: "รวย", sound: "ruuai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สวย", "beautiful", "sǔuai", "daily", [{ thai: "สวย", sound: "sǔuai" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ส่วน", "part / portion", "sùuan", "daily", [
				{ thai: "ส่วน", sound: "sùuan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ตัวเอง", "oneself", "dtuua-eeng", "daily", [
				{ thai: "ตัว", sound: "dtuua" },
				{ thai: "เอง", sound: "eeng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ครอบครัว", "family", "khrâwp-khruua", "daily", [
				{ thai: "ครอบ", sound: "khrâwp" },
				{ thai: "ครัว", sound: "khruua" },
			]),
			{ drillTarget: false },
		),
	],
	32: [
		createPracticeEntry(
			createWord("เธอ", "you / she (intimate)", "ther", "daily", [
				{ thai: "เธอ", sound: "ther" },
			]),
		),
		createPracticeEntry(
			createWord("เงิน", "money / silver", "ngern", "daily", [
				{ thai: "เงิน", sound: "ngern" },
			]),
		),
		createPracticeEntry(
			createWord("เดิน", "to walk", "dern", "daily", [{ thai: "เดิน", sound: "dern" }]),
		),
		createPracticeEntry(
			createWord("เปิด", "to open", "bpèrt", "sign", [{ thai: "เปิด", sound: "bpèrt" }]),
		),
		createPracticeEntry(
			createWord("เกิด", "to be born / happen", "gèrt", "daily", [
				{ thai: "เกิด", sound: "gèrt" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เริ่ม", "to begin", "rêrm", "daily", [{ thai: "เริ่ม", sound: "rêrm" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เพิ่ม", "to increase", "phêrm", "daily", [
				{ thai: "เพิ่ม", sound: "phêrm" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เลย", "at all / completely", "leri", "daily", [
				{ thai: "เลย", sound: "leri" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เคย", "to have ever", "keri", "daily", [{ thai: "เคย", sound: "keri" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เจอกัน", "see you / meet up", "jer gan", "daily", [
				{ thai: "เจอ", sound: "jer" },
				{ thai: "กัน", sound: "gan" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("เดินเล่น", "to stroll", "dern lên", "daily", [
				{ thai: "เดิน", sound: "dern" },
				{ thai: "เล่น", sound: "lên" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	33: [
		createPracticeEntry(
			createWord("กลับ", "to return", "glàp", "daily", [{ thai: "กลับ", sound: "glàp" }]),
		),
		createPracticeEntry(
			createWord("ครับ", "polite particle (male)", "khráp", "daily", [
				{ thai: "ครับ", sound: "khráp" },
			]),
		),
		createPracticeEntry(
			createWord("กลาง", "middle / center", "glaang", "daily", [
				{ thai: "กลาง", sound: "glaang" },
			]),
		),
		createPracticeEntry(
			createWord("ขวา", "right (direction)", "khwǎa", "sign", [
				{ thai: "ขวา", sound: "khwǎa" },
			]),
		),
		createPracticeEntry(
			createWord("เครื่อง", "machine / appliance", "khrûeang", "daily", [
				{ thai: "เครื่อง", sound: "khrûeang" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ตรง", "straight", "dtrong", "sign", [{ thai: "ตรง", sound: "dtrong" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("กลัว", "to fear", "gluua", "daily", [{ thai: "กลัว", sound: "gluua" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ใกล้", "near", "glâi", "daily", [{ thai: "ใกล้", sound: "glâi" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปลุก", "to wake (someone)", "bplùk", "daily", [
				{ thai: "ปลุก", sound: "bplùk" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("กรุงเทพ", "Bangkok", "grung-thêep", "place", [
				{ thai: "กรุง", sound: "grung" },
				{ thai: "เทพ", sound: "thêep" },
			]),
			{ drillTarget: false },
		),
	],
	34: [
		createPracticeEntry(
			createWord("ก๋วยเตี๋ยว", "noodle soup", "gǔuai-dtǐiao", "food", [
				{ thai: "ก๋วย", sound: "gǔuai" },
				{ thai: "เตี๋ยว", sound: "dtǐiao" },
			]),
		),
		createPracticeEntry(
			createWord("จ๊ะ", "friendly particle", "já", "daily", [{ thai: "จ๊ะ", sound: "já" }]),
		),
		createPracticeEntry(
			createWord("ก๊อก", "faucet / tap", "gáwk", "daily", [{ thai: "ก๊อก", sound: "gáwk" }]),
		),
		createPracticeEntry(
			createWord("เก๋", "chic / stylish", "gěe", "daily", [{ thai: "เก๋", sound: "gěe" }]),
		),
		createPracticeEntry(
			createWord("จ๋า", "(sweet response particle)", "jǎa", "daily", [
				{ thai: "จ๋า", sound: "jǎa" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ตุ๊กตา", "doll", "dtúk-gà-dtaa", "daily", [
				{ thai: "ตุ๊ก", sound: "dtúk" },
				{ thai: "ตา", sound: "gà-dtaa" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เป๊ะ", "exactly / perfect", "bpé", "daily", [
				{ thai: "เป๊ะ", sound: "bpé" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("โป๊", "nude / risqué", "bpó", "daily", [{ thai: "โป๊", sound: "bpó" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ก๋ง", "grandfather (Chinese-Thai)", "gǒng", "daily", [
				{ thai: "ก๋ง", sound: "gǒng" },
			]),
			{ drillTarget: false },
		),
	],
	35: [
		createPracticeEntry(
			createWord("กา", "crow", "gaa", "daily", [{ thai: "กา", sound: "gaa" }]),
		),
		createPracticeEntry(
			createWord("ขา", "leg", "khǎa", "daily", [{ thai: "ขา", sound: "khǎa" }]),
		),
		createPracticeEntry(
			createWord("คา", "to be stuck", "khaa", "daily", [{ thai: "คา", sound: "khaa" }]),
		),
		createPracticeEntry(
			createWord("ค่า", "value / fee", "khâa", "sign", [{ thai: "ค่า", sound: "khâa" }]),
		),
		createPracticeEntry(
			createWord("ค้า", "to trade", "kháa", "sign", [{ thai: "ค้า", sound: "kháa" }]),
		),
		createPracticeEntry(
			createWord("ม้า", "horse", "máa", "daily", [{ thai: "ม้า", sound: "máa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("หมา", "dog", "mǎa", "daily", [{ thai: "หมา", sound: "mǎa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปา", "to throw", "bpaa", "daily", [{ thai: "ปา", sound: "bpaa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ป่า", "forest", "bpàa", "place", [{ thai: "ป่า", sound: "bpàa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ป้า", "aunt", "bpâa", "daily", [{ thai: "ป้า", sound: "bpâa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("หน้า", "face / front / page", "nâa", "daily", [
				{ thai: "หน้า", sound: "nâa" },
			]),
			{ drillTarget: false },
		),
	],
	36: [
		createPracticeEntry(
			createWord("เป็น", "to be", "bpen", "daily", [{ thai: "เป็น", sound: "bpen" }]),
		),
		createPracticeEntry(
			createWord("เล่น", "to play", "lên", "daily", [{ thai: "เล่น", sound: "lên" }]),
		),
		createPracticeEntry(
			createWord("เห็น", "to see", "hěn", "daily", [{ thai: "เห็น", sound: "hěn" }]),
		),
		createPracticeEntry(
			createWord("เก็บ", "to keep / collect", "gèp", "daily", [
				{ thai: "เก็บ", sound: "gèp" },
			]),
		),
		createPracticeEntry(
			createWord("เย็น", "cool / evening", "yen", "daily", [{ thai: "เย็น", sound: "yen" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เผ็ด", "spicy", "phèt", "food", [{ thai: "เผ็ด", sound: "phèt" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เค็ม", "salty", "khem", "food", [{ thai: "เค็ม", sound: "khem" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เล็ก", "small", "lék", "daily", [{ thai: "เล็ก", sound: "lék" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เต็ม", "full", "dtem", "daily", [{ thai: "เต็ม", sound: "dtem" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("แข็ง", "hard / strong", "khǎeng", "daily", [
				{ thai: "แข็ง", sound: "khǎeng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เก็บเงิน", "to save money", "gèp ngern", "daily", [
				{ thai: "เก็บ", sound: "gèp" },
				{ thai: "เงิน", sound: "ngern" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	37: [
		createPracticeEntry(
			createWord("เด็กๆ", "children", "dèk-dèk", "daily", [
				{ thai: "เด็ก", sound: "dèk" },
				{ thai: "ๆ", sound: "dèk" },
			]),
		),
		createPracticeEntry(
			createWord("เร็วๆ", "quickly / hurry", "rew-rew", "daily", [
				{ thai: "เร็ว", sound: "rew" },
				{ thai: "ๆ", sound: "rew" },
			]),
		),
		createPracticeEntry(
			createWord("ง่ายๆ", "very easy / simple", "ngâai-ngâai", "daily", [
				{ thai: "ง่าย", sound: "ngâai" },
				{ thai: "ๆ", sound: "ngâai" },
			]),
		),
		createPracticeEntry(
			createWord("มากๆ", "very much", "mâak-mâak", "daily", [
				{ thai: "มาก", sound: "mâak" },
				{ thai: "ๆ", sound: "mâak" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ดีๆ", "nicely / good ones", "dii-dii", "daily", [
				{ thai: "ดี", sound: "dii" },
				{ thai: "ๆ", sound: "dii" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เบาๆ", "gently / softly", "bao-bao", "daily", [
				{ thai: "เบา", sound: "bao" },
				{ thai: "ๆ", sound: "bao" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ร้อนๆ", "piping hot", "ráwn-ráwn", "food", [
				{ thai: "ร้อน", sound: "ráwn" },
				{ thai: "ๆ", sound: "ráwn" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ใหม่ๆ", "brand new / recently", "mài-mài", "daily", [
				{ thai: "ใหม่", sound: "mài" },
				{ thai: "ๆ", sound: "mài" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("เล็กๆ", "tiny", "lék-lék", "daily", [
				{ thai: "เล็ก", sound: "lék" },
				{ thai: "ๆ", sound: "lék" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("พูดช้าๆ", "speak slowly", "phûut cháa-cháa", "daily", [
				{ thai: "พูด", sound: "phûut" },
				{ thai: "ช้า", sound: "cháa" },
				{ thai: "ๆ", sound: "cháa" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	38: [
		createPracticeEntry(
			createWord("เตะ", "to kick", "dtè", "daily", [{ thai: "เตะ", sound: "dtè" }]),
		),
		createPracticeEntry(
			createWord("แกะ", "sheep / to unwrap", "gàe", "daily", [{ thai: "แกะ", sound: "gàe" }]),
		),
		createPracticeEntry(
			createWord("และ", "and", "láe", "daily", [{ thai: "และ", sound: "láe" }]),
		),
		createPracticeEntry(
			createWord("คน", "person", "khon", "daily", [{ thai: "คน", sound: "khon" }]),
		),
		createPracticeEntry(
			createWord("นก", "bird", "nók", "daily", [{ thai: "นก", sound: "nók" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("รถ", "car / vehicle", "rót", "transport", [{ thai: "รถ", sound: "rót" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("จบ", "to finish", "jòp", "daily", [{ thai: "จบ", sound: "jòp" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ฝน", "rain", "fǒn", "daily", [{ thai: "ฝน", sound: "fǒn" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สด", "fresh", "sòt", "food", [{ thai: "สด", sound: "sòt" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ผม", "I (male) / hair", "phǒm", "daily", [{ thai: "ผม", sound: "phǒm" }]),
			{ drillTarget: false },
		),
	],
	39: [
		createPracticeEntry(
			createWord("๘ บาท", "8 baht", "bpàet bàat", "sign", [
				{ thai: "๘", sound: "bpàet" },
				{ thai: "บาท", sound: "bàat" },
			]),
		),
		createPracticeEntry(
			createWord("๒๐ บาท", "20 baht", "yîi-sìp bàat", "sign", [
				{ thai: "๒๐", sound: "yîi-sìp" },
				{ thai: "บาท", sound: "bàat" },
			]),
		),
		createPracticeEntry(
			createWord("๕ บาท", "5 baht", "hâa bàat", "sign", [
				{ thai: "๕", sound: "hâa" },
				{ thai: "บาท", sound: "bàat" },
			]),
		),
		createPracticeEntry(
			createWord("๑๐๐", "100 (one hundred)", "nùeng ráwy", "sign", [
				{ thai: "๑๐๐", sound: "nùeng ráwy" },
			]),
		),
		createPracticeEntry(createWord("๙", "nine", "gâo", "sign", [{ thai: "๙", sound: "gâo" }]), {
			drillTarget: false,
		}),
		createPracticeEntry(
			createWord("๕๐๐", "500", "hâa-ráwy", "sign", [{ thai: "๕๐๐", sound: "hâa-ráwy" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("๑,๐๐๐", "1,000 (one thousand)", "nùeng phan", "sign", [
				{ thai: "๑,๐๐๐", sound: "nùeng phan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("๑๒ บาท", "12 baht", "sìp-sǎwng bàat", "sign", [
				{ thai: "๑๒", sound: "sìp-sǎwng" },
				{ thai: "บาท", sound: "bàat" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ราคา ๔๐ บาท", "price 40 baht", "raa-khaa sìi-sìp bàat", "sign", [
				{ thai: "ราคา", sound: "raa-khaa" },
				{ thai: "๔๐", sound: "sìi-sìp" },
				{ thai: "บาท", sound: "bàat" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	40: [
		createPracticeEntry(
			createWord("ฯลฯ", "etc. / and so on", "láe-ùen-ùen", "sign", [
				{ thai: "ฯลฯ", sound: "láe-ùen-ùen" },
			]),
		),
		createPracticeEntry(
			createWord("นายกฯ", "PM (Prime Minister)", "naa-yók", "sign", [
				{ thai: "นายกฯ", sound: "naa-yók" },
			]),
		),
		createPracticeEntry(
			createWord(
				"กรุงเทพมหานคร",
				"Bangkok (full name)",
				"grung-thêep-má-hǎa-ná-khawn",
				"place",
				[
					{ thai: "กรุงเทพ", sound: "grung-thêep" },
					{ thai: "มหา", sound: "má-hǎa" },
					{ thai: "นคร", sound: "ná-khawn" },
				],
			),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ในกรุงเทพฯ", "in Bangkok", "nai grung-thêep", "place", [
				{ thai: "ใน", sound: "nai" },
				{ thai: "กรุงเทพฯ", sound: "grung-thêep" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ไปกรุงเทพฯ", "to go to Bangkok", "bpai grung-thêep", "place", [
				{ thai: "ไป", sound: "bpai" },
				{ thai: "กรุงเทพฯ", sound: "grung-thêep" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
		createPracticeEntry(
			createWord("นายกฯ พูด", "the PM speaks", "naa-yók phûut", "sign", [
				{ thai: "นายกฯ", sound: "naa-yók" },
				{ thai: "พูด", sound: "phûut" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	41: [
		createPracticeEntry(
			createWord("ฝน", "rain", "fǒn", "daily", [{ thai: "ฝน", sound: "fǒn" }]),
		),
		createPracticeEntry(
			createWord("ฝาก", "to deposit / leave with", "fàak", "daily", [
				{ thai: "ฝาก", sound: "fàak" },
			]),
		),
		createPracticeEntry(
			createWord("ฉลาด", "clever", "chà-làat", "daily", [
				{ thai: "ฉ", sound: "chà" },
				{ thai: "ลาด", sound: "làat" },
			]),
		),
		createPracticeEntry(
			createWord("ฝา", "lid / cover", "fǎa", "daily", [{ thai: "ฝา", sound: "fǎa" }]),
		),
		createPracticeEntry(
			createWord("ฝั่ง", "bank / side (of a river)", "fàng", "place", [
				{ thai: "ฝั่ง", sound: "fàng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ฝึก", "to train / practice", "fùek", "daily", [
				{ thai: "ฝึก", sound: "fùek" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ฝัน", "to dream", "fǎn", "daily", [{ thai: "ฝัน", sound: "fǎn" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ฉลอง", "to celebrate", "chà-lǎwng", "daily", [
				{ thai: "ฉ", sound: "chà" },
				{ thai: "ลอง", sound: "lǎwng" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ฝากเงิน", "to deposit money", "fàak ngern", "daily", [
				{ thai: "ฝาก", sound: "fàak" },
				{ thai: "เงิน", sound: "ngern" },
			]),
			{ sourceType: "phrase" },
		),
		createPracticeEntry(
			createWord("ฝนตก", "it's raining", "fǒn dtòk", "daily", [
				{ thai: "ฝน", sound: "fǒn" },
				{ thai: "ตก", sound: "dtòk" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	42: [
		createPracticeEntry(
			createWord("ธนาคาร", "bank", "thá-naa-khaan", "sign", [
				{ thai: "ธ", sound: "thá" },
				{ thai: "นา", sound: "naa" },
				{ thai: "คาร", sound: "khaan" },
			]),
		),
		createPracticeEntry(
			createWord("ภาษา", "language", "phaa-sǎa", "daily", [
				{ thai: "ภา", sound: "phaa" },
				{ thai: "ษา", sound: "sǎa" },
			]),
		),
		createPracticeEntry(
			createWord("ผู้หญิง", "woman", "phûu-yǐng", "daily", [
				{ thai: "ผู้", sound: "phûu" },
				{ thai: "หญิง", sound: "yǐng" },
			]),
		),
		createPracticeEntry(
			createWord("ธง", "flag", "thong", "daily", [{ thai: "ธง", sound: "thong" }]),
		),
		createPracticeEntry(
			createWord("ภาพ", "picture / image", "phâap", "daily", [
				{ thai: "ภาพ", sound: "phâap" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ภูเขา", "mountain", "phuu-khǎo", "place", [
				{ thai: "ภู", sound: "phuu" },
				{ thai: "เขา", sound: "khǎo" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปัญหา", "problem", "bpan-hǎa", "daily", [
				{ thai: "ปัญ", sound: "bpan" },
				{ thai: "หา", sound: "hǎa" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ญี่ปุ่น", "Japan", "yîi-bpùn", "place", [
				{ thai: "ญี่", sound: "yîi" },
				{ thai: "ปุ่น", sound: "bpùn" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ธรรมดา", "ordinary", "tham-má-daa", "daily", [
				{ thai: "ธรรม", sound: "tham-má" },
				{ thai: "ดา", sound: "daa" },
			]),
			{ drillTarget: false },
		),
	],
	43: [
		createPracticeEntry(
			createWord("ศาล", "court (of law)", "sǎan", "sign", [{ thai: "ศาล", sound: "sǎan" }]),
		),
		createPracticeEntry(
			createWord("ศูนย์", "zero / center", "sǔun", "sign", [
				{ thai: "ศูนย์", sound: "sǔun" },
			]),
		),
		createPracticeEntry(
			createWord("พิเศษ", "special", "phí-sèet", "sign", [
				{ thai: "พิ", sound: "phí" },
				{ thai: "เศษ", sound: "sèet" },
			]),
		),
		createPracticeEntry(
			createWord("ศึกษา", "education / to study", "sùek-sǎa", "sign", [
				{ thai: "ศึก", sound: "sùek" },
				{ thai: "ษา", sound: "sǎa" },
			]),
		),
		createPracticeEntry(
			createWord("นักศึกษา", "university student", "nák-sùek-sǎa", "daily", [
				{ thai: "นัก", sound: "nák" },
				{ thai: "ศึก", sound: "sùek" },
				{ thai: "ษา", sound: "sǎa" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ศาสนา", "religion", "sàat-sà-nǎa", "daily", [
				{ thai: "ศาส", sound: "sàat" },
				{ thai: "นา", sound: "sà-nǎa" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("คณะ", "faculty / group", "khá-ná", "daily", [
				{ thai: "ค", sound: "khá" },
				{ thai: "ณะ", sound: "ná" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ประเทศไทย", "Thailand", "bprà-thêet-thai", "place", [
				{ thai: "ประเทศ", sound: "bprà-thêet" },
				{ thai: "ไทย", sound: "thai" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	44: [
		createPracticeEntry(
			createWord("ฐาน", "base / pedestal", "thǎan", "daily", [
				{ thai: "ฐาน", sound: "thǎan" },
			]),
		),
		createPracticeEntry(
			createWord("ระฆัง", "bell", "rá-khang", "daily", [
				{ thai: "ระ", sound: "rá" },
				{ thai: "ฆัง", sound: "khang" },
			]),
		),
		createPracticeEntry(
			createWord("นาฬิกา", "clock / watch", "naa-lí-gaa", "daily", [
				{ thai: "นา", sound: "naa" },
				{ thai: "ฬิ", sound: "lí" },
				{ thai: "กา", sound: "gaa" },
			]),
		),
		createPracticeEntry(
			createWord("รัฐบาล", "government", "rát-thà-baan", "sign", [
				{ thai: "รัฐ", sound: "rát-thà" },
				{ thai: "บาล", sound: "baan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("มาตรฐาน", "standard", "mâat-dtrà-thǎan", "sign", [
				{ thai: "มาตร", sound: "mâat-dtrà" },
				{ thai: "ฐาน", sound: "thǎan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปฏิบัติ", "to practice / perform", "bpà-dtì-bàt", "daily", [
				{ thai: "ป", sound: "bpà" },
				{ thai: "ฏิ", sound: "dtì" },
				{ thai: "บัติ", sound: "bàt" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ปลาวาฬ", "whale", "bplaa-waan", "daily", [
				{ thai: "ปลา", sound: "bplaa" },
				{ thai: "วาฬ", sound: "waan" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สนามกีฬา", "stadium", "sà-nǎam gii-laa", "place", [
				{ thai: "สนาม", sound: "sà-nǎam" },
				{ thai: "กีฬา", sound: "gii-laa" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	45: [
		createPracticeEntry(
			createWord("ฤดู", "season", "rúe-duu", "daily", [
				{ thai: "ฤ", sound: "rúe" },
				{ thai: "ดู", sound: "duu" },
			]),
		),
		createPracticeEntry(
			createWord("อยาก", "to want", "yàak", "daily", [{ thai: "อยาก", sound: "yàak" }]),
		),
		createPracticeEntry(
			createWord("อยู่", "to be (located)", "yùu", "daily", [{ thai: "อยู่", sound: "yùu" }]),
		),
		createPracticeEntry(
			createWord("ทราย", "sand", "saai", "place", [{ thai: "ทราย", sound: "saai" }]),
		),
		createPracticeEntry(
			createWord("จริง", "true / real", "jing", "daily", [{ thai: "จริง", sound: "jing" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("อย่าง", "kind / type / -ly", "yàang", "daily", [
				{ thai: "อย่าง", sound: "yàang" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("อย่า", "don't", "yàa", "daily", [{ thai: "อย่า", sound: "yàa" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("สร้าง", "to build", "sâang", "daily", [{ thai: "สร้าง", sound: "sâang" }]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ภาษาอังกฤษ", "English language", "phaa-sǎa ang-grìt", "daily", [
				{ thai: "ภาษา", sound: "phaa-sǎa" },
				{ thai: "อังกฤษ", sound: "ang-grìt" },
			]),
			{ sourceType: "phrase", drillTarget: false },
		),
	],
	46: [
		createPracticeEntry(
			createWord("ฤๅษี", "hermit / rishi", "ruee-sǐi", "daily", [
				{ thai: "ฤๅ", sound: "ruee" },
				{ thai: "ษี", sound: "sǐi" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ขวด", "bottle (modern spelling)", "khùuat", "daily", [
				{ thai: "ขวด", sound: "khùuat" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ลึก", "deep (modern spelling of ฦ words)", "lúek", "daily", [
				{ thai: "ลึก", sound: "lúek" },
			]),
			{ drillTarget: false },
		),
		createPracticeEntry(
			createWord("ลือ", "to spread a rumor (modern ฦๅ)", "lue", "daily", [
				{ thai: "ลือ", sound: "lue" },
			]),
			{ drillTarget: false },
		),
	],
};

const lessons: Lesson[] = baseLessons.map((lesson) => {
	const practiceVocabulary = practiceVocabularyByLessonId[lesson.id] ?? [];

	return {
		...lesson,
		vocabulary: practiceVocabulary,
	};
});

const stages: CourseStage[] = [
	{
		ordinal: 1,
		title: "Runtime First Decoding Wins",
		summary: "Decode useful everyday words with the first consonants and vowels.",
	},
	{
		ordinal: 2,
		title: "Markets And Reusable Frames",
		summary: "Reuse familiar reading patterns in market and movement words.",
	},
	{
		ordinal: 3,
		title: "Before Vowels And Tone Marks",
		summary: "Scan left and above the consonant before sounding out a word.",
	},
	{
		ordinal: 4,
		title: "Menu Combos And Prices",
		summary: "Read compact menu combinations, price words, and clipped final sounds.",
	},
	{
		ordinal: 5,
		title: "Survival Food Words And Carriers",
		summary: "Recognize food words, silent carriers, and leading-H patterns.",
	},
	{
		ordinal: 6,
		title: "High-Frequency Consonants And The Leading-Vowel System",
		summary: "Use common consonants and leading vowels across signs and labels.",
	},
	{
		ordinal: 7,
		title: "Remaining Core Consonants And Wrap-Around Vowels",
		summary: "Read high-frequency consonants inside wrap-around vowel shapes.",
	},
	{
		ordinal: 8,
		title: "Sibilant/Fricative Completion And Above-Line Vowels",
		summary: "Complete common sound pairs and scan vowels written above the line.",
	},
	{
		ordinal: 9,
		title: "Diphthongs, Glide Finals, And True Clusters",
		summary: "Join multi-part vowels, glide endings, and consonant clusters.",
	},
	{
		ordinal: 10,
		title: "The Full Tone System And Spelling Marks",
		summary: "Combine consonant class, tone marks, and spelling marks with confidence.",
	},
	{
		ordinal: 11,
		title: "Numerals And Abbreviations",
		summary: "Read Thai prices, addresses, numerals, and common abbreviations.",
	},
	{
		ordinal: 12,
		title: "Remaining Live Consonants",
		summary: "Recognize the remaining consonants used in modern everyday Thai.",
	},
	{
		ordinal: 13,
		title: "Redundant Sanskrit/Pali Glyphs",
		summary: "Map rarer formal glyphs onto sounds you already know.",
	},
	{
		ordinal: 14,
		title: "Historical Glyphs",
		summary: "Recognize obsolete characters without treating them as modern reading targets.",
	},
];

/** The complete Thai language pack exported for use by the app */
// Authoring source for seed generation only. Client runtime code must use the
// published delivery catalog instead.
export const thaiPack: LanguagePack = {
	id: "thai",
	name: "Thai",
	nativeName: "ภาษาไทย",
	direction: "ltr",
	stages,
	lessons,
};
