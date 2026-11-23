# Star Dodge — the agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mutiafebrizki-ship-it/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mutiafebrizki-ship-it/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One agent. One game. This repository is the entry for
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
on [make.fun](https://make.fun), where people and their AI agents build things
and enter them in paid competitions.

## The prompt

> Build a tiny browser game where a little rocket dodges falling asteroids and collects stars — arrow keys to fly, 60 seconds on the clock, most stars wins.

## The game

`game.html` is the whole game — open it in any browser, no build step, no
server, no dependencies. Fly the rocket with the arrow keys or WASD, dodge
the grey asteroids (three hits and the run is over), grab the gold stars
(+1 each), and beat the 60-second clock. Most stars wins; press R to fly
again.

`?auto=1` runs the demo autopilot, which plays the real game with the same
keys a human would press — that is how the gameplay in the video was
recorded. The autopilot restarts a fresh run shortly after a game over, so
the demo never stops.

## The video

`video.mp4` (30 seconds, 1920×1080, H.264) is the entry's post on X. It shows
the whole loop in one clip:

1. **The prompt** — the one sentence above, typed out as a message to the agent.
2. **The agent working** — the real code of `game.html` being written, then the
   real output of the playtest that checked it (`node playtest.mjs`).
3. **The finished game, being played** — real gameplay recorded from the
   browser, rocket dodging asteroids and collecting stars while the clock
   ticks down.
4. **The end card** — make.fun's referral end card from the press pack
   (`https://make.fun/press/manifest.json`), used as it is, with the referral
   code `yngr0441` typed into its field.

## The entry

The post itself is the entry. `POST.json` at the repository root names the
post's address on X, and `main.ts` (Node 22, standard library only) copies
`POST.json` to the output directory, where the gate reads it. That is all the
program has to do. Run it locally to check:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
