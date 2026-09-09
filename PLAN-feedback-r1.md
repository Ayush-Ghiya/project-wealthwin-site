# Plan — Client Feedback R1 + Prototype Alignment

**For the implementing agent:** Work top-to-bottom. Each task lists exact files, exact changes, and a verification step. Do not skip verification. If a task's "Verify" fails, fix it before moving on. Anything marked 🚩 **FLAG** must be reported back, not guessed at.

**Branch:** work on `main` (current). Commit after each Phase, not after each task.

---

## Sources this plan is based on

| Source | What it gave us |
|---|---|
| Client's written feedback (7 points, Hinglish) | Phase 1 tasks — exact, non-negotiable fixes |
| Client's own prototype: https://wealthwin-build.preview.emergentagent.com/ | Phase 3 editorial patterns + Phase 4 approved copy + real contact details |
| Client's imagery brief: *"Larger than life, aspirational, early retirement, enjoying life, related to money, something which relates with the sentence and the business"* | Phase 2 image overhaul |

---

## Ground rules (read before touching anything)

1. **Content coverage is sacred.** The site must keep 100% of the content from the original client doc (previously verified 119/119 phrases). The prototype **omits** big chunks (The Problem's 4 core areas, What We Help With, The WealthWin Difference, Client Testimonials values). **Adopt the prototype's *visual language*, never its *content subset*.** Do not delete sections to "match the prototype."
2. **Only use copy that the client wrote** — either the original doc or the prototype (Appendix B). Do not invent marketing copy. The one exception is Featured Content excerpts (T5), which are explicitly flagged as placeholder.
3. **Don't undo previously agreed decisions:** Legal footer column stays removed; tag-pills and cycle-diagram stay flat; animations stay ON (scroll-reveal, Ken Burns, hover-lift).
4. **Don't touch** `src/lib/googleForm.js` entry IDs or the form wiring. It's verified working.
5. **Dev server command is `node_modules/.bin/vite --port 5173 --strictPort`.** Do **not** run `npx vite` — it pulls vite@8 which has a broken native binding on this Node version (21.7.1) and will fail.
6. Build check after every phase: `node_modules/.bin/vite build` must succeed.

---

## Decisions needed from client (🚩 report these, don't guess)

| # | Issue | Why it matters | Default if no answer |
|---|---|---|---|
| D1 | Name mismatch: prototype says "Toral Varia", our site says "Toral Somaiya" | A wrong surname on a financial advisor's site is a serious factual error | ✅ **RESOLVED — use "Toral Somaiya".** The prototype's "Toral Varia" is wrong; **never** copy that string. When using their byline copy, write **"Toral Somaiya · Founder, WealthWin"**. |
| D2 | Prototype uses Inter; our site uses Poppins | Typeface drives the whole "financial firm" feel | ✅ **RESOLVED — keep Poppins.** The Inter swap in T13 is **cancelled**; apply only T13's type-tightening. |
| D3 | Real contact details appear on the prototype: **hello@wealthwin.in**, **Mumbai · India**, LinkedIn | Would replace our `[your email]` / `[Your address]` placeholders | Fill them in (T15) but flag for confirmation — read off a preview site, not confirmed by client directly |
| D4 | Featured Content has no real articles | Cards look like placeholders (feedback #5) | Use placeholder excerpts + `href="#"`, clearly flagged |
| D5 | Feedback #1 says "hero mein koi button nahi hai" but Home hero already has one | Ambiguous which page was meant | ✅ **APPROVED** — add hero CTA to **all four** inner pages (Approach, Wealth Management, About, Insights). Leave Home's existing button alone; don't add a second. |
| D6 | Feedback #6 names "What I Believe" (About page) + "Learning Offerings" (Insights page) as "back to back" — they're on **different pages**, so they can't be adjacent | The literal fix doesn't apply as described | ✅ **APPROVED** — fix the Insights page (T6), leave About's navy alone |
| D7 | Feedback #4 asked for centre-align; 3+3 grid is better | Same goal, no orphan row, no new content | ✅ **APPROVED** — use `.grid--3` (3+3) per T4 |

---

# PHASE 1 — The 7 feedback fixes

## T1 — Hero CTA buttons (feedback #1)

**Files:** `src/pages/Approach.jsx`, `src/pages/WealthManagement.jsx`, `src/pages/About.jsx`, `src/pages/Insights.jsx`

Each of these four heroes currently ends with a `<Reveal as="p" delay={2}>` and no button. Add a CTA as the last child of the `<header>`.

**1a.** Add the `Link` import at the top of each of the four files (Home.jsx already has it — copy that style):
```jsx
import { Link } from 'preact-router/match';
```

**1b.** Add this as the **last element inside `<header className="hero ...">`** in each of the four files:
```jsx
        <Reveal as={Link} href="/contact" className="btn" delay={3}>Book a Conversation</Reveal>
```

Notes:
- Text is **"Book a Conversation"** (client's prototype uses exactly this wording; feedback offered it as an option).
- `Reveal as={Link}` is a supported path — it renders a `<span class="reveal">` wrapper around `<a class="btn">`. This is intentional; don't "fix" it.
- **Do not** add a button to `Home.jsx` (already has "Discover Our Approach") or `Contact.jsx` (form is directly below).

**Verify:** `grep -c "Book a Conversation" src/pages/*.jsx` → must be exactly 1 in each of Approach/WealthManagement/About/Insights, 0 in Home/Contact.

---

## T2 — "Who I Work With" 5-item orphan (feedback #2)

**File:** `src/pages/About.jsx`, `src/styles.css`

The client's prototype **has a 6th item**, which fixes the orphan properly instead of hacking the grid. Use it.

**2a.** In `src/pages/About.jsx`, find the "Who I Work With" `<ul className="check-list grid">` (the one starting with `<li>Value professional advice</li>`) and add a 6th item after `Want wealth to support their life`:
```jsx
            <li>Believe in informed decision making</li>
```
(This copy is from the client's own prototype — Appendix B.)

**2b.** Add a 3-column modifier in `src/styles.css`, immediately after the `.grid` rule (which ends at `grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));`):
```css
.grid--3 {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 820px) {
  .grid--3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .grid--3 {
    grid-template-columns: 1fr;
  }
}
```

**2c.** Apply it to that list: `className="check-list grid"` → `className="check-list grid grid--3"`

Result: 6 items in 3 columns = 2 balanced rows of 3. No orphan.

**Verify:** load `/about`, confirm the list renders 3 + 3 with no lone item on the second row. Confirm the 6th item text is present.

---

## T3 — Client Type cards need descriptions (feedback #3)

**File:** `src/pages/About.jsx`

For each of the 5 `.people-card` blocks, add a description `<p>` after the `<h3>`. Use this exact copy (client-supplied, and identical to their prototype):

```jsx
          <Reveal as="div" className="people-card card">
            <div className="people-card__title">Client Type</div>
            <h3>Professionals</h3>
            <p className="text-muted">Salaried individuals looking to build long-term wealth systematically</p>
          </Reveal>
```
…and correspondingly:

| Card | Description |
|---|---|
| Professionals | Salaried individuals looking to build long-term wealth systematically |
| Entrepreneurs | Business owners who want their personal wealth to grow alongside their business |
| Successful Women | Women seeking financial confidence and independence on their own terms |
| HNI Families | High-net-worth families looking for structured, multi-generational wealth planning |
| NRIs | Non-resident Indians managing investments and financial goals across borders |

**Also:** `.people-grid` is `repeat(auto-fit, minmax(190px, 1fr))` → 5 cards squeeze into one row. With descriptions added they'll be too narrow. In `src/styles.css` change the `.people-grid` minmax from `190px` to `220px`:
```css
.people-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

**Verify:** load `/about` at 1280px wide — each card must show title + name + a readable description on ≤3 lines, no text overflow. Check 375px mobile too.

---

## T4 — "Learning Offerings" bottom row (feedback #4)

**File:** `src/pages/Insights.jsx`

6 cards in a 4-wide auto-fit grid → 4 + 2 with empty space on the right.

Client said "center align for now, or get 2 more offerings". **Better fix available at zero content cost:** reuse `.grid--3` from T2 → 3 + 3, perfectly balanced, no orphan row at all. This achieves the client's stated goal ("rows balanced lagein") without needing new content.

Change the Learning Offerings grid only:
```jsx
        <div className="container grid grid--3">
```
(It's the `<div className="container grid">` inside the section whose eyebrow is "Learning Offerings" — **not** the Insights Categories one, which has 4 cards and is already balanced.)

**Verify:** `/insights` shows Learning Offerings as 3 + 3. Insights Categories still 4-across. No empty gap.

> 🚩 If the client specifically wants the 4-wide look preserved, use this instead of `.grid--3`:
> ```css
> .grid--center-last { grid-template-columns: repeat(auto-fit, minmax(230px, 260px)); justify-content: center; }
> ```

---

## T5 — Featured Content cards: excerpts + Read More (feedback #5)

**Files:** `src/pages/Insights.jsx`, `src/styles.css`

Each of the 4 `article-card`s currently has only `card__num` + `h3`. Add a one-line excerpt and a Read More link:

```jsx
          <Reveal as="div" className="card article-card">
            <span className="card__num">01</span>
            <h3>Beyond Returns: What Are You Really Investing For?</h3>
            <p className="text-muted">Returns are only half the question — the other half is what the money is actually for.</p>
            {/* TODO: replace "#" with the real article URL once the client supplies it */}
            <a href="#" className="article-card__more">Read More &rarr;</a>
          </Reveal>
```

Excerpts (**placeholder — see D4, must be client-approved before launch**):

| # | Title | Excerpt |
|---|---|---|
| 01 | Beyond Returns: What Are You Really Investing For? | Returns are only half the question — the other half is what the money is actually for. |
| 02 | Are Your Investments Working Together? | Individually sensible investments can still add up to a portfolio pulling in different directions. |
| 03 | What Will Wealth Creation Look Like in the Next Decade? | How shifting markets, rates and access are changing the way wealth gets built. |
| 04 | Financial Independence: More Than a Number | Why a single target figure rarely captures what independence actually requires. |

Add to `src/styles.css` (next to the existing `.article-card h3` rule):
```css
.article-card__more {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
}
.article-card__more:hover {
  color: var(--accent-dark);
}
```

**Verify:** all 4 cards show num + title + excerpt + "Read More →". 🚩 Report that the 4 hrefs are still `#` and the excerpts are placeholder copy.

---

## T6 — Two dark sections back-to-back (feedback #6)

**File:** `src/pages/Insights.jsx`

🚩 **First, note the discrepancy (D6):** the two sections the client named are on *different pages* ("What I Believe" = About, "Learning Offerings" = Insights), so they are never adjacent. Report this. The real issue on Insights is that a full-width navy band sits mid-page and reads heavy.

Fix by re-alternating the Insights page so no navy band sits mid-page and no two neighbours share a background:

| Section (by eyebrow) | Current class | → New class |
|---|---|---|
| Insights Categories | `section` (white) | `section` (unchanged) |
| Learning Offerings | `section section--navy` | `section section--alt` |
| Featured Content | `section section--alt` | `section` |
| Contact Form | `section` | `section section--alt` |

Result: white → cream → white → cream. Clean alternation, no mid-page navy.

**Important:** `.section--navy` also sets light text colours. Once Learning Offerings is `--alt` (cream), its card text must read dark — this happens automatically because the light-text rules are scoped to `.section--navy`. Confirm visually anyway.

**Verify:** screenshot `/insights` top-to-bottom. Confirm (a) no two adjacent sections share a background colour, (b) all text in Learning Offerings is dark-on-cream and legible, (c) no navy band remains except the hero.

**Do not** change About's "What I Believe" — About already alternates correctly (white → navy → cream → white → dark banner), and flipping it would create cream-on-cream.

---

## T7 — Insights hero image (feedback #7)

**File:** `src/pages/Insights.jsx` + new asset

Current hero is `/assets/charts.jpg` (a trading terminal) — off-brand for a "simplify finance" message.

**7a.** Download the verified replacement (a soft, calm, pastel open-sea shot — warm and abstract, no charts):
```bash
curl -sL -o public/assets/insights-hero.jpg \
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1800&q=80&auto=format&fit=crop"
```

**7b.** Compress it (keep the repo light — match the ~80–250KB range of other assets):
```bash
python3 -c "
from PIL import Image
im = Image.open('public/assets/insights-hero.jpg').convert('RGB')
im.thumbnail((1800,1800), Image.LANCZOS)
im.save('public/assets/insights-hero.jpg', quality=82, optimize=True)
print(im.size)
"
```

**7c.** In `src/pages/Insights.jsx`, update the hero background:
```jsx
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/insights-hero.jpg')" }}></div>
```

**Verify:** `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/assets/insights-hero.jpg` → 200. Hero shows the new image, headline still legible over it.

**Note:** `charts.jpg` is also used by `Approach.jsx` ("What We Don't Do"). It becomes unused only after T8 — **do not delete it in this task.**

**→ Commit Phase 1:** `git commit -m "Apply client feedback R1: hero CTAs, layout fixes, card content, section rhythm, Insights hero"`

---

# PHASE 2 — Imagery overhaul (client's imagery brief)

The current images are generic corporate stock (charts, handshakes, meeting rooms). The brief is **"larger than life, aspirational, early retirement, enjoying life, related to money, relates to the sentence."** The client's own prototype backs this up: it uses exactly **one** image — a wide blue-hour city skyline — and leans on typography for everything else.

**Direction: fewer, bigger, more aspirational.** Match each image to the sentence it sits next to.

## T8 — Swap the image library

All 10 candidates below are **already verified** (HTTP 200, correct subject). Download with:
```bash
# pattern
curl -sL -o public/assets/<NAME>.jpg "https://images.unsplash.com/<PHOTO-ID>?w=1800&q=80&auto=format&fit=crop"
```
Then run the same compression snippet from T7b on each file.

**Image → slot mapping (do exactly this):**

| New filename | Unsplash photo ID | Replaces | Used in | Why it fits the sentence |
|---|---|---|---|---|
| `hero-skyline.jpg` | `photo-1519044444158-d7b0e8452004` | `hero-city.jpg` | Home hero | **The client's own prototype hero.** Blue-hour skyline, brand-blue, expansive |
| `vista-longview.jpg` | `photo-1470071459604-3b5ec3a7fe05` | `analytics.jpg` | Home → "The Problem" | Wide vista = "see how it all works together" instead of a chart |
| `living-well.jpg` | `photo-1502672260266-1c1ef2d93688` | `wealth.jpg` (Home use) | Home → "What We Help With" | Bright, lived-in home = "the life you want to live" |
| `summit-perspective.jpg` | `photo-1469474968028-56623f02e42e` | `skyline.jpg` | Home final CTA + About "Beyond WealthWin" | Figure on a peak = the long view, "larger than life" |
| `journey-lake.jpg` | `photo-1476514525535-07fb3b4ae5f1` | `planning.jpg` | Approach hero | Boat bow on an alpine lake = "we begin with you", a considered journey |
| `calm-sea.jpg` | `photo-1500375592092-40eb2168fd21` | `charts.jpg` (Approach use) | Approach → "What We Don't Do" | Calm water = discipline vs. market noise (already downloaded in T7 as `insights-hero.jpg` — reuse that file, don't download twice) |
| `freedom-shore.jpg` | `photo-1507525428034-b723cf961d3e` | `wealth.jpg` (WM hero) | Wealth Management hero | Sunrise over turquoise sea = **early retirement / enjoying life**, the core of the brief |
| `family-generations.jpg` | `photo-1511895426328-dc8714191300` | `meeting.jpg` | Wealth Management → "Who This Is For" | Multi-generational family at sunset = family responsibilities, HNI/multi-gen planning |
| `city-momentum.jpg` | `photo-1449824913935-59a10b8d2000` | `handshake.jpg` | About hero + Contact hero | Warm urban energy — professional, aspirational, not a cliché handshake |

Keep as-is: `toral.jpg` (real client photo), `wealthwin-logo.png`, `wealthwin-icon.png`.

**After the swap, update every reference.** Find them all first:
```bash
grep -rn "assets/.*\.jpg" src/
```
Then update each `backgroundImage` / `<img src>` to the new filenames per the table.

**Finally**, delete the now-unused old assets — but only after `grep` confirms zero references:
```bash
for f in hero-city analytics wealth skyline planning charts meeting handshake; do
  if grep -rq "assets/$f.jpg" src/; then echo "STILL USED: $f.jpg"; else echo "safe to delete: $f.jpg"; fi
done
```
Delete only the ones reported "safe to delete".

**Verify:**
- `node_modules/.bin/vite build` succeeds
- Every page loads with zero broken images:
  ```js
  Array.from(document.images).filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src)
  ```
  must return `[]` on all 6 routes
- Each hero's headline is still legible over the new photo (the dark navy scrim handles this, but check `/wealth-management` — the bright shore image is the riskiest)
- `du -sh public/assets` stays under ~3MB

**→ Commit Phase 2:** `git commit -m "Replace stock imagery with aspirational photography per client brief"`

---

# PHASE 3 — Editorial upgrades from the prototype

This is what makes it read as a financial firm's site rather than a template. All patterns below are lifted from the client's prototype (measured values in Appendix C).

## T9 — Left-aligned hero with directional scrim

Currently all heroes are centre-aligned with a uniform dark overlay. The prototype is **left-aligned** with a scrim that's dense on the left and clears to the right, so the photo stays visible.

In `src/styles.css`:
```css
.hero {
  text-align: left;
}
.hero__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}
.hero h1,
.hero p,
.hero .hero__eyebrow {
  margin-left: 0;
  margin-right: 0;
}
.hero h1 {
  max-width: 15ch;
}
.hero p {
  max-width: 520px;
}
/* directional scrim: dense left → clear right, plus a base vertical wash */
.hero::after {
  background:
    linear-gradient(90deg, rgba(11,34,68,0.92) 0%, rgba(11,34,68,0.72) 45%, rgba(11,34,68,0.25) 100%),
    linear-gradient(180deg, rgba(8,6,31,0.35), rgba(8,6,31,0.55));
}
@media (max-width: 700px) {
  .hero::after {
    background: linear-gradient(180deg, rgba(11,34,68,0.86), rgba(8,6,31,0.9));
  }
  .hero h1 { max-width: none; }
}
```

Then wrap each hero's children in `<div className="hero__inner">…</div>` (all 6 pages) so the left edge aligns with the rest of the page content rather than the viewport edge.

**Verify:** on each page the headline sits on the left, aligned with the section content below it; the photo is visible on the right; on 375px mobile text is still fully legible.

## T10 — Two-tone headline (accent line)

The prototype's H1 puts the middle line in orange. Add:
```css
.hero h1 .accent-line {
  color: var(--accent);
  display: block;
}
```
Apply on the two heroes with a natural two-part headline:
- `Home.jsx`: `Beyond Returns. <span className="accent-line">Making Your Wealth Work Smarter.</span>`
- `WealthManagement.jsx`: `You've worked hard to build your wealth. <span className="accent-line">Now make it wealth work smarter.</span>`

**Do not** reword the headlines — only wrap existing text.

## T11 — Dash-prefixed eyebrows + arrow CTAs

Prototype detail: eyebrows read `— WEALTH, WITH INTENT`; buttons carry an arrow.
```css
.eyebrow::before,
.hero__eyebrow::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 1px;
  background: currentColor;
  vertical-align: middle;
  margin-right: 12px;
  opacity: 0.7;
}
.btn--arrow::after {
  content: " →";
}
```
Add `btn--arrow` to the hero CTAs and the nav CTA.

## T12 — Section headlines (the biggest missing piece)

Our sections have an eyebrow then jump straight to cards. The prototype gives every section a **real headline** in a light weight, plus a short standfirst. Add the style:
```css
.section__title {
  font-size: clamp(1.9rem, 3.6vw, 3.2rem);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: var(--navy-deep);
  margin: 0 0 18px;
}
.section--navy .section__title { color: var(--white); }
```
Add `<h2 className="section__title">` under the eyebrow for these sections, using **client-written copy only** (Appendix B):

| Page → Section | Headline to use |
|---|---|
| About → My Story | A calmer, clearer way to think about money. |
| About → What I Believe | The principles behind every conversation. |
| About → Who I Work With | A plan that meets you where you are. |
| Home → final CTA | Your next decision can feel different. |

🚩 For sections **not** covered by Appendix B (Home "The Problem", "What We Help With", "The WealthWin Difference", Insights sections, Wealth Management sections) — **do not invent headlines.** Leave those sections as-is and flag that the client should supply headline copy for them.

## T13 — Typography tightening (Poppins retained)

> ✅ **D2 resolved: keep Poppins.** Do **not** switch to Inter. Do **not** touch the font `<link>` in `index.html` or the `--font-display` / `--font-body` variables.

Only apply the prototype's *type scale* discipline — the large, tight, editorial feel is mostly tracking and line-height, not the typeface. In `src/styles.css`:
```css
h1, h2, h3 { letter-spacing: -0.03em; }
.hero h1 { font-weight: 700; line-height: 1.04; }
```
(Poppins is geometric and slightly wider than Inter, so use −0.03em rather than the prototype's −0.07em — going tighter makes Poppins' round letterforms collide.)

**Verify:** headlines read tighter/more editorial but no letters touch or overlap at any size. Check the longest headline — About's "Behind every financial plan is a person. And behind WealthWin is a belief." — at 1280px and 375px.

## T14 — Deeper navy for large surfaces (D-adjacent)

Our `--navy` is the logo blue `#1C51A2`. At full-section scale it reads bright/saturated; the prototype uses a deeper `#1B2B6B` for surfaces while keeping orange as accent.

Add a token and use it for **large surfaces only** — keep logo blue for type/accents:
```css
:root {
  --navy-deep: #14285c;
}
.section--navy { background: var(--navy-deep); }
.footer { background: #0d1c40; }
.cta-banner::after {
  background: linear-gradient(180deg, rgba(20,40,92,0.9), rgba(11,22,50,0.94));
}
```

**Verify:** contrast check — white body text on `--navy-deep` must exceed 4.5:1 (it does at #14285C ≈ 12:1). Screenshot Home + About and confirm the navy bands read deeper/calmer, and the orange CTAs still pop.

**→ Commit Phase 3:** `git commit -m "Adopt prototype's editorial design language: left hero, section headlines, Inter, deeper navy"`

---

# PHASE 4 — Content the prototype revealed

## T15 — Real contact details, footer, disclaimer

**Files:** `src/components/Footer.jsx`, `src/pages/Contact.jsx`

**15a.** Replace placeholders (🚩 D3 — confirm with client before launch):
- `[your email]` → `hello@wealthwin.in` (make it a `mailto:` link)
- `[Your address]` → `Mumbai · India`
- `[your phone]` → **leave as `[your phone]`** — the prototype does not show a phone number, so we still don't have one. Flag it.

**15b.** Enrich the footer to match the prototype's structure (it currently has 3 thin columns). Use their column headings and grouping:

- **Brand block:** logo + tagline "Beyond Returns. Making wealth work smarter."
- **EXPLORE:** Our Approach · Wealth Management · Insights & Learning
- **CONNECT:** About Toral · Book a conversation · hello@wealthwin.in
- **BASED IN:** Mumbai · India · LinkedIn

Use `preact-router` `<Link>` for internal links, `<a>` for mailto/LinkedIn. LinkedIn URL is a generic `https://www.linkedin.com` on the prototype — 🚩 ask the client for the real profile URL; until then omit the LinkedIn link rather than shipping a dead one.

**15c.** Footer bottom line — adopt the client's own disclaimer wording, keeping the current year:
```
© 2026 WealthWin. For education and information only.
```
This also partially covers the compliance gap flagged earlier. 🚩 Still ask whether SEBI RIA / AMFI ARN registration numbers must appear.

**Verify:** footer renders 4 groups on desktop, stacks cleanly at 375px; every link resolves (no `href="#"`); `grep -rn "\[your email\]\|\[Your address\]" src/` returns nothing.

**→ Commit Phase 4:** `git commit -m "Fill real contact details, richer footer, education-only disclaimer"`

---

# PHASE 5 — Verification & handoff

## T16 — Full check

```bash
# 1. build
node_modules/.bin/vite build

# 2. dev server (NOT npx)
node_modules/.bin/vite --port 5173 --strictPort &

# 3. all routes return 200
for r in "" approach wealth-management about insights contact; do
  echo -n "/$r -> "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:5173/$r"
done

# 4. no placeholder / template leftovers
grep -rn "Lorem\|TODO\|\[your \|\[Your \|mysite.com\|Lynch\|Powell" src/ index.html || echo CLEAN
```

**Content-parity regression check — this is the important one.** Re-run the phrase check to prove Phase 1–4 didn't drop any client doc content:
```bash
for p in "Growing Wealth" "Protecting Wealth" "Strategising for the Future" "Creating Financial Freedom" \
  "Building Wealth" "Managing Existing Wealth" "Preparing for Financial Independence" \
  "Protecting What You've Built" "Making Important Decisions" "People Before Products" \
  "Partnership Over Transactions" "Chasing the next hot investment" "financial sounding board" \
  "GIFT City" "Course Correction" "Niveshika" "Successful Women" "HNI Families" "NRIs" \
  "Personal attention" "Long-term relationships" "Wealth is ultimately about the choices it gives you"; do
  grep -rqF -- "$p" src/ || echo "MISSING: $p"
done; echo "parity check done"
```

In the browser, per route: console must have **zero** errors, and
```js
Array.from(document.images).filter(i=>!i.complete||i.naturalWidth===0).length  // → 0
```

**Responsive:** check every page at 1280px and 375px. Specifically confirm: hero text legible, mobile nav opens (hamburger → X, centred links), no horizontal scroll (`document.body.scrollWidth <= window.innerWidth`).

**Forms:** submit the Let's Talk form once with obvious test data and confirm the success message appears. 🚩 Tell the user a test row was added to their Google Sheet so they can delete it.

## T17 — Report back

Report: what landed per phase, every 🚩 flag consolidated into one list, and screenshots of Home / About / Insights / Wealth Management at desktop + mobile.

---

# Appendix A — Verified image library

All confirmed HTTP 200 and visually checked on 2026-09-09. URL pattern:
`https://images.unsplash.com/<ID>?w=1800&q=80&auto=format&fit=crop`

| Ref | ID | Subject |
|---|---|---|
| skyline (client's own pick) | `photo-1519044444158-d7b0e8452004` | Blue-hour city skyline, brand-blue tones |
| shore/freedom | `photo-1507525428034-b723cf961d3e` | Sunrise over turquoise sea |
| journey | `photo-1476514525535-07fb3b4ae5f1` | Boat bow on alpine lake |
| summit | `photo-1469474968028-56623f02e42e` | Figure on a peak above valleys |
| long view | `photo-1470071459604-3b5ec3a7fe05` | Misty mountain vista with road |
| calm sea | `photo-1500375592092-40eb2168fd21` | Soft pastel open water |
| living well | `photo-1502672260266-1c1ef2d93688` | Bright, plant-filled living room |
| city momentum | `photo-1449824913935-59a10b8d2000` | Warm urban street canyon |
| planning (money) | `photo-1454165804606-c3d57bc86b40` | Hands, notebook, laptops |
| family | `photo-1511895426328-dc8714191300` | Multi-generational family at sunset |

**Rejected:** `photo-1544717305-2782549b5136` (smiling woman, close-up) — a stock face in the hero risks being mistaken for Toral. Don't use portraits of models anywhere on this site.

# Appendix B — Copy the client wrote (safe to use)

From their prototype — approved by definition, use verbatim:

- Hero eyebrow: **WEALTH, WITH INTENT**
- Hero CTA: **Book a Conversation**
- Statement band: **CLARITY OVER COMPLEXITY. PERSPECTIVE OVER PREDICTION.**
- Byline: use **Toral Somaiya · Founder, WealthWin** — the prototype's "Toral Varia" is **wrong**, never copy it (D1 resolved)
- My Story headline: **A calmer, clearer way to think about money.**
- My Story body: *"Money decisions can feel complicated, especially when they are tied to the things that matter most. I started WealthWin to make expert financial thinking feel more human, more useful and easier to act on."* / *"My work sits at the intersection of planning, investing and education — helping people see the bigger picture before making the next move."*
- What I Believe headline: **The principles behind every conversation.** + standfirst *"Good advice starts with listening. It continues with perspective, honesty and a commitment to the long view."*
- Credentials standfirst: *"The right advice is both rigorous and relatable. It draws on experience, but always returns to your real life, goals and choices."*
- Who I Work With headline: **A plan that meets you where you are.**
- 6th audience item: **Believe in informed decision making**
- Closing CTA: eyebrow **START SOMEWHERE**, headline **Your next decision can feel different.**, button **Let's talk**
- Footer tagline: **Beyond Returns. Making wealth work smarter.**
- Footer columns: **EXPLORE / CONNECT / BASED IN**
- Footer legal: **For education and information only.** + **Thoughtful advice for the long view.**
- Contact: **hello@wealthwin.in**, **Mumbai · India**

# Appendix C — Prototype design tokens (measured)

| Token | Prototype value | Ours (current) |
|---|---|---|
| Font | `Inter Variable` | `Poppins` — **keeping Poppins** (D2) |
| H1 | 76.8px / 700 / lh 1.02 / ls −0.07em / **left** | clamp ~53px / 700 / lh 1.15 / ls −0.01em / **centre** |
| Section H2 | 59px / **400** / lh 1.02 / ls −0.065em | *(no section headline exists)* |
| Hero body | 17px / lh 1.65 / white @78% / max-w 520px | 1.08rem / centred / max-w 640px |
| Navy surface | `#1B2B6B` | `#1C51A2` (logo blue) |
| Cream | `#F5F3EF` | `#F7F5F0` |
| Accent | orange, used on a headline line + CTAs | `#EC4C28`, CTAs only |
| Images | **1 total** (hero); typography-led | 9 images across all pages |
| Section order | cream → navy → cream → white | varies per page |

**The single biggest structural difference:** they use *one* image and let large, tight, light-weight typography carry the page. We use nine images and small type. Phase 2 + Phase 3 move us toward their balance without dropping our content.
