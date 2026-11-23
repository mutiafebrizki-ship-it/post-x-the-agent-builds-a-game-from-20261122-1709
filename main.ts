// Star Dodge — make.fun entry program (Node 22, standard library only).
//
// The entry itself is the X post: a short video about an AI coding agent
// building the tiny browser game in game.html from one prompt, ending with
// make.fun's referral end card. The post's address lives in POST.json at the
// repository root, and all this program does is copy it to the output
// directory, where the gate reads it. Nothing written here about the post
// is scored; the house reads the post itself from X.
//
// Run locally to check it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
