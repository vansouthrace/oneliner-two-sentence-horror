// Two-Sentence Horror
// Writes a horror story of exactly two sentences (at most 400 characters)
// to /output/entry.txt.
// The scare lives in the second sentence: the first sets a familiar,
// comforting scene, and the second escalates it into something wrong.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My grandmother's voice still reads me bedtime stories through the old radio. Last night she paused, and said, 'You are not my grandson.'";

const sentences = entry.split(/[.!?]+/).filter((s) => /[A-Za-z]/.test(s));

if (sentences.length !== 2) {
  throw new Error(`entry must be exactly two sentences, got ${sentences.length}`);
}

if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
