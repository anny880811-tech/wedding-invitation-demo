# Wedding Invitation Demo

Public portfolio version of a real wedding invitation site built with React and Vite.

The original production repository and data integrations are kept private to protect guest information. This demo uses SheetDB with a separate demo Google Sheet and includes only sample guest route data.

## Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set demo SheetDB endpoints before testing RSVP or guest messages locally.

## Environment Variables

- `VITE_RSVP_SHEETDB_API_URL`: SheetDB API endpoint for RSVP responses.
- `VITE_MESSAGES_SHEETDB_API_URL`: SheetDB API endpoint for guest messages.
- `VITE_SHEETDB_TOKEN`: Optional SheetDB bearer token, if authentication is enabled.

Because `VITE_*` variables are bundled into the browser build, use only demo SheetDB endpoints and demo tokens here. For a public portfolio site, prefer SheetDB permissions that allow only the actions this demo needs.

Do not use production SheetDB endpoints, spreadsheet IDs, or service account keys in this public demo repository.
