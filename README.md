# Karla Bongalonta — Next.js Portfolio

This is a minimal Next.js conversion of the provided `portfolio.html` and CSS files.

Quick start

1. Move your image assets (PNG, SVG files referenced in the HTML) into the `public/` folder at the project root. Keep the same filenames (for example `Karla Tianes Bongalonta.png`).

2. Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

3. Open `http://localhost:3000` in your browser.

Notes

- CSS from the original project was copied to `styles/globals.css` and `styles/style.css` and is imported in `pages/_app.js`.
- The page markup was converted to JSX in `pages/index.js`. If anything looks off visually, check paths for images in the `public/` folder and adjust the CSS as needed.
