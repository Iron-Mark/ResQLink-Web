import { describe, expect, it } from "vitest";

import { DEFAULT_SEO, generateBreadcrumbSchema } from "./seo";

describe("generateBreadcrumbSchema", () => {
  it("creates ordered Schema.org breadcrumb entries", () => {
    expect(
      generateBreadcrumbSchema([
        { name: "Home", url: "https://resqlink.org" },
        { name: "Terms", url: "https://resqlink.org/terms" },
      ])
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://resqlink.org",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Terms",
          item: "https://resqlink.org/terms",
        },
      ],
    });
  });
});

describe("DEFAULT_SEO", () => {
  it("keeps required metadata populated for every configured page", () => {
    for (const config of Object.values(DEFAULT_SEO)) {
      expect(config.title).not.toHaveLength(0);
      expect(config.description).not.toHaveLength(0);
      expect(config.keywords).not.toHaveLength(0);
    }
  });
});
