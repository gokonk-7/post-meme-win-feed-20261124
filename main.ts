// main.ts — entrypoint for "Post the Meme, Win the Feed" (make.fun).
// The post itself is the entry: this program copies POST.json from the
// repository root to /output, where the house reads it and fetches the
// post's public counts. It does nothing else.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));
console.log("POST.json copied to /output/POST.json");
