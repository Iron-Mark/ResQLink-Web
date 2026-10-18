import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "../App";
import { WEB_APP_URL } from "./availability";

describe("portfolio availability", () => {
  const html = renderToStaticMarkup(createElement(App));

  it("renders the standalone simulated dashboard and Android availability", () => {
    expect(html).toContain('id="dashboard"');
    expect(html).toContain("Start Simulated Demo");
    expect(html).toContain("Android release unavailable");
    expect(html).toContain("online emergency-response services are currently unavailable");
  });

  it("provides web-app links without offering an APK download", () => {
    expect(html).toContain(`href="${WEB_APP_URL}"`);
    expect(html).not.toMatch(/drive\.google\.com|\.apk(?:["?]|$)|Download App|Download for Android/i);
  });
});
