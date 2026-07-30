# Rishav — Portfolio (React + Vite)

## Edit your content
Everything you'd want to change — name, email, LinkedIn/GitHub, experience, projects, skills — lives in one file:

`src/data.js`

You won't need to touch `App.jsx` or `index.css` unless you want to change layout or styling.

## Run locally
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Get a live link (free, ~2 minutes) — Vercel
This is the fastest path to a URL you can paste into job applications.

1. Push this folder to a new GitHub repo (or use `vercel` CLI directly, see below).
2. Go to https://vercel.com → "Add New Project" → import the repo.
3. Vercel auto-detects Vite. Leave the defaults (`npm run build`, output dir `dist`) and click **Deploy**.
4. You'll get a URL like `https://rishav-portfolio.vercel.app` — that's what you paste into applications.

**No GitHub? Use the CLI instead:**
```bash
npm install -g vercel
vercel login
vercel --prod
```
This deploys directly from this folder and prints your live URL.

## Alternative: Netlify (drag-and-drop, no CLI)
```bash
npm run build
```
Then go to https://app.netlify.com/drop and drag the generated `dist` folder in. You'll get a live URL immediately.

## Custom domain
Both Vercel and Netlify let you attach a custom domain (e.g. `rishavkumar.dev`) for free once deployed — useful if you want something cleaner than the auto-generated subdomain for your resume.
