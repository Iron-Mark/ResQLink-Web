import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

describe("public deployment configuration", () => {
  it("does not advertise retired hosts as operational public URLs", () => {
    for (const file of [
      "index.html", "public/robots.txt", "public/sitemap.xml",
      "src/utils/availability.ts", "src/utils/seo.ts",
    ]) {
      expect(readFileSync(join(root, file), "utf8"), file)
        .not.toMatch(/https:\/\/(?:web\.)?resqlink\.org/i);
    }
  });

  it("ships the public icon and build-directory SPA rewrite", () => {
    expect(existsSync(join(root, "public/resqlink-icon.png"))).toBe(true);
    const config = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
    expect(config.outputDirectory).toBe("build");
    expect(config.rewrites).toContainEqual({ source: "/(.*)", destination: "/index.html" });
  });
});
