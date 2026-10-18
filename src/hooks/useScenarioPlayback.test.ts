import { describe, expect, it } from "vitest";
import { countResolvedEventsAtSecond } from "./useScenarioPlayback";

describe("scenario resolved events", () => {
  it("counts only resolved status changes at the requested tick", () => {
    const events = [
      { atSecond: 12, type: "status_change", newStatus: "Resolved" },
      { atSecond: 12, type: "status_change", newStatus: "Responding" },
      { atSecond: 12, type: "responder_assign" },
      { atSecond: 15, type: "status_change", newStatus: "Resolved" },
    ];
    expect(countResolvedEventsAtSecond(events, 12)).toBe(1);
    expect(countResolvedEventsAtSecond(events, 15)).toBe(1);
    expect(countResolvedEventsAtSecond(events, 20)).toBe(0);
  });

  it("is repeatable and does not change the scenario input", () => {
    const events = Object.freeze([
      Object.freeze({ atSecond: 5, type: "status_change", newStatus: "Resolved" }),
    ]);
    expect(countResolvedEventsAtSecond(events, 5)).toBe(1);
    expect(countResolvedEventsAtSecond(events, 5)).toBe(1);
    expect(countResolvedEventsAtSecond([], 5)).toBe(0);
  });
});
