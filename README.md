# Panel sourcing workbench

A single-page tool that compares ways to source CFRP honeycomb panels for a satellite, served at rohitrao.in/galaxeye by a Cloudflare Worker.

The page is `src/workbench.html`: static HTML, CSS and JavaScript with no API calls and no database. `src/index.ts` returns it for `/galaxeye` and `/galaxeye/`, with a noindex header, and a 404 for anything else under the route.

Every push to `main` deploys through GitHub Actions (`.github/workflows/deploy.yml`), then checks the live site. To update the page, replace `src/workbench.html` on `main`.
