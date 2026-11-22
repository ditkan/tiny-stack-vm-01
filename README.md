# tiny-stack-vm-01 — a compact 32-bit stack VM

[![Competition](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![Rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/ditkan/tiny-stack-vm-01/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![Reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/ditkan/tiny-stack-vm-01/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

An entry for make.fun's **tiny-stack-vm-01-run-20261122** bounty: a tiny stack
VM for the competition's ISA (32-bit wrapping integers, 256-value stack,
64-deep calls, 256 words of memory, ten traps). `main.ts` is one
fetch–decode–execute loop over `Int32Array` state; it answers every instance
of a set in one process, writing each `stdout.bin` and `exit.txt`.

Verified on the kit's practice set (40/40, score 1,000,000) and against the
reference VM on 400 generated programs with no mismatches.

## License

MIT — see [LICENSE](LICENSE).
