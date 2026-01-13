// TypeScript entry point (re-exports)
export { generatePriceSeries } from './ingest/simulator';
export { detectDrawdowns } from './detection/drawdown';
export { Treasury } from './accounting/treasury';
export { planReinjection } from './planner/reinject';
export { ExecutorStub } from './executor/stub';
export { simulate } from './cli';
