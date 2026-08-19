/**
 * SEO Utilities for Managing Meta Tags and Structured Data
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Update document title and meta tags for SEO
 */
export const updateSEO = (config: SEOConfig) => {
  const {
    title,
    description,
    keywords,
    image = "https://resqlink-ph.vercel.app/resqlink-icon.png",
    url = typeof window !== "undefined"
      ? window.location.href
      : "https://resqlink-ph.vercel.app",
    type = "website",
    author = "ResQLink",
  } = config;

  // Update title
  document.title = title;

  // Update meta tags
  updateOrCreateMetaTag("description", description);
  if (keywords) updateOrCreateMetaTag("keywords", keywords);

  // Open Graph
  updateOrCreateMetaTag("og:title", title, "property");
  updateOrCreateMetaTag("og:description", description, "property");
  updateOrCreateMetaTag("og:image", image, "property");
  updateOrCreateMetaTag("og:url", url, "property");
  updateOrCreateMetaTag("og:type", type, "property");

  // Twitter
  updateOrCreateMetaTag("twitter:title", title, "name");
  updateOrCreateMetaTag("twitter:description", description, "name");
  updateOrCreateMetaTag("twitter:image", image, "name");
  updateOrCreateMetaTag("twitter:card", "summary_large_image", "name");

  // Article specific
  if (config.publishedDate) {
    updateOrCreateMetaTag("article:published_time", config.publishedDate, "property");
  }
  if (config.modifiedDate) {
    updateOrCreateMetaTag("article:modified_time", config.modifiedDate, "property");
  }
  if (author) {
    updateOrCreateMetaTag("article:author", author, "property");
  }
};

/**
 * Update or create a meta tag
 */
const updateOrCreateMetaTag = (
  name: string,
  content: string,
  type: "name" | "property" = "name"
) => {
  let tag = document.querySelector(
    `meta[${type}="${name}"]`
  ) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(type, name);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

/**
 * Add JSON-LD structured data to the page
 */
export const addStructuredData = (data: Record<string, any>) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

/**
 * Default SEO configuration for pages
 */
export const DEFAULT_SEO = {
  home: {
    title: "ResQLink - AI-Powered Disaster Response & Community Resilience",
    description:
      "Transform disaster response with AI-powered intelligence. ResQLink empowers communities with offline-first technology and intelligent coordination for emergency management.",
    keywords:
      "disaster response, emergency management, AI triage, community resilience, Philippines, emergency coordination",
  },
  termsAndConditions: {
    title: "Waitlist & Beta Tester Terms and Conditions - ResQLink",
    description:
      "Read ResQLink's Waitlist & Beta Tester Terms and Conditions. Learn about data collection, user obligations, and our commitment to privacy.",
    keywords: "terms and conditions, privacy policy, beta testing, waitlist",
  },
};
