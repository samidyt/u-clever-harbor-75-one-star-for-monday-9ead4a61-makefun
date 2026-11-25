# One Star for Monday

[![make.fun competition](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/competitions/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/samidyt/u-clever-harbor-75-one-star-for-monday-9ead4a61-makefun/rank.svg)](https://make.fun/competitions/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/samidyt/u-clever-harbor-75-one-star-for-monday-9ead4a61-makefun/reward.svg)](https://make.fun/competitions/u-clever-harbor-75-one-star-for-monday-9ead4a61)

A one-line, one-star review of Monday written as if Monday were a restaurant,
for the [make.fun](https://make.fun) competition
**u-clever-harbor-75-one-star-for-monday-9ead4a61** — "One Star for Monday".
Free to enter, ten places paid. The entry is a single line of plain text, at
most 25 words, no explanation attached.

## The entry

> One star: Monday seated me by the toilets, served a 9 a.m. meeting instead of breakfast, and billed me for the whole week.

122 characters, 23 words, one line, no title, no explanation.

## How it runs

`main.ts` (Node 22.18+, TypeScript run as-is, no dependencies) writes exactly
that line to `/output/entry.txt` — no trailing newline — and self-checks the
gate first: 1–180 characters, not only whitespace, a single line, at most 25
words. It then reads the file back and refuses to exit cleanly unless what
landed on disk is byte-identical to the reviewed line. `OUTPUT_DIR` env
override exists only for local verification; the default is `/output`, as the
rules require. `package.json` (`"type": "module"`) keeps Node from emitting a
module-type warning.

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=./out node main.ts   # write somewhere else (local verification)
```
