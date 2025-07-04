# FlashForward Client

This directory contains the frontend (Vite + React) for the FlashForward Foundation website.

## Running Locally

1. Install dependencies from the project root:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   cd client
   npm run dev
   ```

## Building for Production

```sh
cd client
npm run build
```

## Vercel Deployment
- Set the project root to `client` in Vercel.
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

**Note:** Dependencies are hoisted to the project root. No need to duplicate them in this package.json. 