# Service Panel

One page listing every service your client's website runs on, with a link to each.

Live demo: [ammadeo.github.io/service-panel](https://ammadeo.github.io/service-panel/)

**Status:** Not maintained since 2021. Built on Vue 3, Vue CLI 4, TypeScript and Tailwind CSS 2. The dependencies have not been updated since then.

## Features

- Installable PWA with a service worker, and a button to switch to a new version when one is deployed.
- Light and dark theme: follows the system setting, with a toggle.
- Service presets: Firebase, Plausible, Sanity, Google Domains, Google Search Console, Microsoft Bing Webmaster Tool, GitHub, and a generic "developer" entry for your own contact details.
- Custom services and categories: set the name, description, brand colors, price and links.
- Languages: English (complete) and Polish (categories plus the Firebase, Plausible, Sanity and developer presets).
- Tests: Jest unit tests next to the code in `src/` (`npm run test:unit`) and Puppeteer end-to-end tests in `tests/e2e/` (`npm run test:e2e`, with `npm run serve` running on port 8080).

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Edit `.env` in the root directory. It sets the app name, short name, page language, no-script message and public path.
4. Edit `src/composable/useDefinitions.ts`. There you set the header link to your client's site and add categories and services to the renderer. The file has commented examples for a custom service and category.
5. Run `npm run serve` and open the local URL it prints.

## Deployment

### GitHub Pages

1. Set `PUBLIC_PATH` in `.env` to `/your-repository-name/`.
2. Push to the `master` branch. The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` to the `gh-pages` branch.
3. In your repository settings, turn on GitHub Pages with the `gh-pages` branch and the root folder as the source.

From then on, every push to `master` deploys the panel. The workflow only runs on `master`, so edit its `branches` list if your default branch has another name.

### Manual

1. Set `PUBLIC_PATH` in `.env` to the path you serve from, usually `/`.
2. Run `npm run build`.
3. Upload the contents of `dist/` to any static host.

If you deploy manually, you can delete the `.github` directory.

## License

[MIT](LICENSE)
