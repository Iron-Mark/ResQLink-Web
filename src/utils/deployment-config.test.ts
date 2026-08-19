import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const repositoryRoot = process.cwd();
const publicUrlFiles = [
  "README.md",
  "index.html",
  "public/robots.txt",
  "public/sitemap.xml",
  "src/components/DownloadAppSection.tsx",
  "src/components/HeroSection.tsx",
  "src/components/Navigation.tsx",
  "src/utils/seo.ts",
];

describe("deployment configuration", () => {
  it("does not advertise the retired ResQLink web hosts", () => {
    for (const relativePath of publicUrlFiles) {
      const source = readFileSync(join(repositoryRoot, relativePath), "utf8");
      expect(source, relativePath).not.toMatch(
        /https:\/\/(?:web\.)?resqlink\.org/i
      );
    }
  });

  it("ships the public icon and Vercel SPA rewrite", () => {
    expect(
      existsSync(join(repositoryRoot, "public/resqlink-icon.png"))
    ).toBe(true);

    const vercel = JSON.parse(
      readFileSync(join(repositoryRoot, "vercel.json"), "utf8")
    );
    expect(vercel.outputDirectory).toBe("build");
    expect(vercel.rewrites).toContainEqual({
      source: "/(.*)",
      destination: "/index.html",
    });
  });
});
