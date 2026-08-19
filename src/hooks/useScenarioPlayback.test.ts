import { describe, expect, it } from "vitest";

import { countResolvedEventsAtSecond } from "./useScenarioPlayback";

describe("countResolvedEventsAtSecond", () => {
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
});
