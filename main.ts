// One Star for Monday — make.fun bounty entry (u-clever-harbor-75-one-star-for-monday-9ead4a61)
// Writes a single one-star review of Monday, as if Monday were a restaurant,
// to /output/entry.txt (OUTPUT_DIR override exists only for local verification).
// Gate (per RULES.txt): UTF-8 text, 1-180 chars, not only whitespace, one line,
// at most 25 words, plain text, no explanation attached.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: Monday seated me by the toilets, served a 9 a.m. meeting instead of breakfast, and billed me for the whole week.";

const words = LINE.split(/\s+/).filter(Boolean).length;
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`gate: length ${LINE.length} chars, must be 1-180`);
}
if (!LINE.trim()) {
  throw new Error("gate: line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("gate: line must be a single line");
}
if (words > 25) {
  throw new Error(`gate: ${words} words, must be at most 25`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip check: refuse to exit cleanly unless what landed on disk
// is byte-identical to the reviewed line.
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("round-trip: entry.txt does not match the reviewed line");
}
