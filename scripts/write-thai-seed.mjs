import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const generatorFile = resolve(scriptDir, "generate-thai-seed.mjs");
const outputFile = resolve(repoRoot, "supabase", "seed.sql");

const sql = execFileSync(process.execPath, [generatorFile], {
	cwd: repoRoot,
	encoding: "utf8",
	maxBuffer: 16 * 1024 * 1024,
});

writeFileSync(outputFile, sql.endsWith("\n") ? sql : `${sql}\n`, "utf8");
console.log(`Wrote ${outputFile}`);
