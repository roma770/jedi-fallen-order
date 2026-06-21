# Star Wars Jedi: Fallen Order — Fan Site (rebuilt)

This package contains a fully rebuilt version of your site:

- **19 separate HTML pages** (index, story, gameplay, editions, news,
  patch-notes, community, about, universe, presskit, buy, support,
  forums, ea-help, trailer, screenshots, contacts, privacy-policy,
  cookie-policy) — all in English, all linked to each other.
- **style.css** — shared design system (colors, fonts, nav, footer, buttons).
- **pages.css** — homepage sections + the shared inner-page template used
  by every sub-page (page header, content blocks, tables, cards, FAQ, etc).
- **script.js** — mobile menu, scroll reveal animations, homepage tabs/gallery,
  starfield, screenshot click-to-enlarge.

## IMPORTANT — about the images

I could not download the binary image files themselves through this chat
(no direct file transfer of binary assets is possible here), so this zip
does **not** include an `img/` folder.

All `<img>` tags use **relative paths** like `img/6.jpg`, exactly like your
original `index.html` already did correctly. Your repository **already has**
a working `img/` folder with these files (1.jpg–14.webp, 15.png, 17.jpg,
01-jedi-fallen-order.jpg, box4-logo1/2/3.png) — that folder was correct;
the bug was only in the sub-pages, which pointed to a different, broken
repository name (`Jedi-Fallen-odred`) instead of your real `img/` folder.

**To deploy:**
1. Copy all files from this zip into your repository, replacing the old
   `.html`, `.css`, and `.js` files.
2. Keep your existing `img/` folder exactly as it is (don't delete it).
3. Commit and push — GitHub Pages will rebuild automatically.

If any specific filename in `img/` doesn't exist (e.g. `15.png` for the
Editions page), just swap in any image you have, or tell me the exact
filenames in your `img/` folder and I'll match them up precisely.

## What was fixed

- All sub-pages were in Russian — now fully translated to English.
- All sub-pages pointed to a broken/typo'd external image repo
  (`Jedi-Fallen-odred`) — now point to your real `img/` folder.
- Every page now shares one consistent design system instead of being
  inconsistent or unstyled.
- Added a proper shared navigation, footer, and "Back to Home" link on
  every page so the whole site is fully click-through.
- Removed the random third-party merchandise image links (Google,
  Ukrainian shop CDNs, etc.) that were unreliable and replaced them with
  clean placeholder tiles you can swap for real product photos later.
