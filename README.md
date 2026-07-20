# Wedding Invitation Demo

Public portfolio version of a real wedding invitation site built with React and Vite.

The original production repository and data integrations are kept private to protect guest information. This demo uses environment variables for Google Sheets integration and includes only sample guest route data.

## Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set demo Google Sheets credentials before testing the RSVP or message APIs locally.

## Environment Variables

- `GOOGLE_SERVICE_ACCOUNT_KEY`: Google service account JSON string.
- `RSVP_SPREADSHEET_ID`: Demo RSVP spreadsheet ID.
- `MESSAGES_SPREADSHEET_ID`: Demo guest messages spreadsheet ID.
- `VITE_API_PROXY_TARGET`: Optional local dev API proxy target.

Do not use production spreadsheet IDs or production service account keys in this public demo repository.
