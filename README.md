# PUREHOME — Static Cleaning Services Website

A responsive Arabic-first (RTL) / English (LTR) static website concept for a fictional Saudi cleaning company.

## Files

- `index.html` — semantic page structure, SEO metadata and content
- `css/style.css` — responsive styling and motion
- `js/main.js` — language switching, mobile navigation, gallery filters, FAQ, validation and WhatsApp form
- `assets/` — reserved for local images, logos or other assets

## Before publishing

1. Open `js/main.js`.
2. Find `WHATSAPP_NUMBER` near the top.
3. Replace `966500000000` with the actual WhatsApp Business number, including country code and digits only. Do not include `+`, spaces or hyphens.
4. Replace the Unsplash image URLs in `index.html` with licensed company photography or local image paths if preferred.
5. Replace the demo copy, service scope and illustrative package descriptions with verified business information.

**Important:** The testimonials are explicitly demo content. Package cards are illustrative examples, not real prices or confirmed offers. No licenses, certifications, reviews, addresses or business statistics are claimed. The request form does not store data; it validates fields and opens WhatsApp with a prefilled message for the visitor to review and send.

## Preview locally

### Option A — open directly
Double-click `index.html` to open it in a browser. Most features work without a server.

### Option B — local static server
From this folder, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Upload to GitHub

1. Create a new GitHub repository, for example `purehome-website`.
2. Upload the project files while preserving the folder structure.
3. Commit the files to the `main` branch.

Or use Git:

```bash
git init
git add .
git commit -m "Create PUREHOME static website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/purehome-website.git
git push -u origin main
```

## Deploy on Cloudflare Pages

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Choose **Create application** → **Pages** → **Connect to Git**.
3. Select the GitHub repository.
4. Choose the production branch (`main`).
5. Set **Framework preset** to `None`.
6. Leave **Build command** empty.
7. Set **Build output directory** to `/` (the repository root).
8. Click **Save and Deploy**.

Cloudflare Pages will publish the static site. Future pushes to the connected production branch trigger a new deployment.

## Notes

- No framework, backend, database, build step or API key is required.
- Google Fonts and Unsplash photos are loaded remotely in this demo. For a fully self-contained deployment, download properly licensed assets into `assets/` and update the references.
- Replace placeholder business contact details before launch.
