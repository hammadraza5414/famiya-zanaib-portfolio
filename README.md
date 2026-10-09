# Famiya Zanaib — Portfolio

An editorial, responsive dark portfolio for Famiya Zanaib built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build && npm start`.

## Deploy to Vercel

Import this repository into Vercel as a **Next.js** project. No environment variables are needed. Vercel builds automatically on every push to `main` when connected to GitHub.

## Contact form behavior

The contact form validates required fields and opens the visitor's email client with a prefilled message addressed to `zanaibfamiya@gmail.com`. It **does not silently send email or store personal information**. The "Copy email" button uses the Clipboard API; LinkedIn links point to Famiya's public professional profile; there are no phone or Instagram contact buttons.

For inbox delivery entirely within the site, add an email delivery backend (such as a server action with a configured email provider and anti-spam protections).

## Customization

All project content, service descriptions, metrics and links are defined near the top of `app/page.tsx`. Main theme colors live in `tailwind.config.ts` and `app/globals.css`.

## Accessibility

Includes semantic headings, labeled form fields, focus outlines, mobile menu state, alt-free decorative graphics, responsive spacing and reduced-motion fallbacks.

## Interactive hero illustration

The original, non-photographic girl avatar in `app/components/cursor-avatar.tsx` tilts with the mouse and turns her pupils towards the cursor via Framer Motion springs. On touch devices it stays centered, and reduced-motion preferences are respected. It is an original stylized illustration, not a claim to depict Famiya’s real likeness.
