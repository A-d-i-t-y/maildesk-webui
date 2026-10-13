# Maildesk WebUI

Web-based administration and account portal for the Maildesk mail platform.
A schema-driven single-page application built with React, TypeScript, Tailwind CSS and Vite.

## Requirements

- Node.js 22+
- A running mail server that exposes the JMAP API

## Development

```
npm install
npm run dev
```

The dev server runs on http://localhost:5173 and proxies API calls to the server
configured in `vite.config.ts` (`SERVER_URL`).

## Production build

```
build_webui.bat      (Windows)
./build.sh           (Linux / macOS)
```

Both produce `webui.zip` with `index.html` and `assets/` at the root of the archive.
Host the zip at an HTTPS URL and set it as the web application `resourceUrl` on your server.

## Configuration

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Server URL used for API requests during development. Leave empty in production builds. |
| `VITE_OAUTH_SCOPES` | Optional override of the OAuth scopes requested at login. |

## License and attribution

This application is a modified version of an open-source WebUI distributed under the
GNU Affero General Public License v3.0 (AGPL-3.0). The original copyright and license
notices in the source files and the `LICENSES/` directory must be kept intact.
If you make this application available to users over a network, you must offer them
the corresponding source code of your modified version.
