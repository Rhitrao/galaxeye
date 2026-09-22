import html from "./workbench.html";

const HEADERS: Record<string, string> = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=300",
  "x-robots-tag": "noindex, nofollow",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "content-security-policy": [
    "default-src 'none'",
    "script-src 'unsafe-inline'",
    "style-src 'unsafe-inline' https://fonts.googleapis.com",
    "font-src https://fonts.gstatic.com",
    "img-src data:",
    "connect-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'none'",
  ].join("; "),
};

export default {
  async fetch(request: Request): Promise<Response> {
    const path = new URL(request.url).pathname.replace(/\/+$/, "");

    if (path !== "/galaxeye" && path !== "/galaxeye/index.html") {
      return new Response("Not found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405, headers: { allow: "GET, HEAD" } });
    }
    return new Response(request.method === "HEAD" ? null : html, { status: 200, headers: HEADERS });
  },
} satisfies ExportedHandler;
