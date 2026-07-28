# One Month — for Mishu

A little scrapbook site: hero intro, a songs section, a scroll timeline of
your first month, a "2am texts" section, and a Friends-themed card, with the
photos from the deck as polaroids.

## Files
- `index.html` — the page
- `style.css` — styling
- `script.js` — scroll-reveal, record player, and ask-card interactions
- `img1.jpg` … `img11.jpg` — your 11 photos, sit right next to `index.html` (no `images/` folder needed)

## What's new
- **Songs** — three tappable "records" (Darkhaast, Maan Meri Jaan, Tum Ho Toh).
  Tapping one spins it and shows "♪ playing." The tag line under each song
  name is a placeholder — edit it in `index.html` under `<!-- SONGS -->`.
- **2am texts** — an iMessage-style thread under `<!-- 2AM TEXTS -->`. This is
  a drafted placeholder built from your Borivali/pillow-fight/"main vapas
  aaunga" memories, not a real conversation — edit the wording to match what
  actually happened.
- **Friends card** — under `<!-- FRIENDS PROPOSAL CARD -->`, your actual
  June 30 speech, styled as a card with two buttons that both confirm
  "she said yes. again." when tapped.

## Publish it on GitHub Pages (free, ~5 minutes)

1. Go to [github.com/new](https://github.com/new) and create a new repository
   (e.g. `one-month`). Public, no README/template needed.
2. On your computer, unzip this folder if needed, then in a terminal:
   ```bash
   cd one-month-site
   git init
   git add .
   git commit -m "one month"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/one-month.git
   git push -u origin main
   ```
   (No git/terminal experience? On the new repo's page, use "Add file → Upload
   files" and drag in `index.html`, `style.css`, `script.js`, and the whole
   `images` folder instead.)
3. In the repo, go to **Settings → Pages**. Under "Build and deployment",
   set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
   Save.
4. Wait a minute, then your site is live at:
   `https://YOUR-USERNAME.github.io/one-month/`

## If you want to tweak anything
- Wording lives directly in `index.html`, inside each `<section class="entry">`.
- Colors and fonts are all defined as variables at the top of `style.css`
  (under `:root`) if you want to shift the palette.
- To add a photo, drop it in `images/`, then add another
  `<figure class="polaroid rot-a"><img src="images/yourfile.jpg" alt="..."></figure>`
  inside the relevant entry's `.entry-photos` div.
