import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The smart speaker in my kitchen started finishing my sentences before I thought them. Last night it whispered, in my own voice, \"don't worry, the next tenant won't notice the difference either.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
