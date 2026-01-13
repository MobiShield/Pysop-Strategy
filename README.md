# Psyop Strategy

Psyop Strategy is an automated dip-response policy engine designed to monitor token market conditions and coordinate full treasury reinjection strategies during predefined drawdown events.

The system continuously observes price data, detects structured drawdowns relative to recent peaks, and produces deterministic reinjection plans that allocate all accumulated developer fees and protocol profits back into the ecosystem when thresholds are met.

This repository focuses on detection, policy definition, accounting, and communication logic. Execution of capital movements is intentionally separated.

## Overview
Psyop Strategy operates as a modular service composed of the following layers:

- Market data ingestion
- Drawdown detection
- Treasury accounting
- Reinjection planning
- Automated communication and reporting

The system is designed to be transparent, auditable, and deterministic, with clear separation between policy logic and capital execution.

## Core Principles
- **Threshold-based response.** Reinjection events are triggered at fixed percentage drawdowns (e.g. 30% intervals) from a rolling local peak.
- **Full allocation policy.** All accumulated developer fees and protocol profits are allocated during each reinjection event.
- **Execution separation.** This codebase does not perform swaps, trades, or on-chain execution directly.
- **Deterministic behavior.** Identical inputs produce identical reinjection plans.


Psyop Strategy is a buy back bot that utilizes all the developer wallet fees to reinject after every 30% dip utilizing a price node with Dexscreener's api

---

## Quick start
1. Copy `.env.example` to `.env` and fill in values (execution is optional and disabled by default).
2. Install dependencies: `npm install`
3. Run unit tests: `npm test`
4. Start a simulated run: `npm run simulate`

> Note: This project intentionally separates policy logic from execution. If you want automated execution, implement the `executor` interface under `src/executor` and enable it in `.env` after auditing.

## Structure
- `src/`
  - `ingest/` — market adapters & simulator
  - `detection/` — drawdown detector
  - `accounting/` — treasury and fees accounting
  - `planner/` — deterministic reinjection planner
  - `executor/` — execution interface (stubs)
  - `cli.js` — CLI entrypoint
- `tests/` — unit tests and fixtures

## Safety & Liability
This code is provided for educational and automation support purposes only. The authors are not responsible for financial losses. Always audit any execution code and manage keys/secrets securely.

### Implementing execution (IMPORTANT)
This repository separates policy logic from execution. To enable automated execution, implement an executor that provides an `executeBuy({token, amount, price})` method and returns a confirmation object. The provided `ExecutorStub` is a safe placeholder and will not perform trades by default.

Example checklist before enabling real execution:
- Audit code thoroughly and review key management
- Run simulations and backtests thoroughly
- Start with constrained execution (limit orders, small amounts)
- Use secure secrets management and monitoring


## Contributing
Contributions welcome: open issues or pull requests.

## License
MIT
