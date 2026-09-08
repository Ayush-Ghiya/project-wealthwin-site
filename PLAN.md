# WealthWin Website Implementation Plan

**Goal:** Static multi-page site for WealthWin, styled after Wix template wh-1121 (Lynch & Powell financial consulting demo), populated with 100% of the client's content doc.

**Source template:** https://www.wix.com/demone2/lynch-and-powell (live render of wh-1121)
**Source content:** Google Doc 17kD6iEEUx2FqTJvGn_WvcVwGOfxTviWNz8b_rZtlTQA (WealthWin content extraction, 5 pages + contact)

## Template audit (captured via browser)

- Nav bar: logo left, links center, "Log In" right. Sticky.
- Home: full-bleed hero (dark navy photo overlay) w/ eyebrow + H1 + CTA button → Services card grid (5 cards) → "How it works" 3-step → "Why choose us" 6-item grid → testimonials-style band → footer.
- About: page header → 2-col "story" blocks (Our Expertise / Our Philosophy, Our Commitment / Our Experience) → team grid (3 cards: name, title, bio, email, phone).
- Free Consultation: page header + form (first name, last name, email, message, service dropdown, appointment picker).
- Footer (all pages): "Let's Connect" heading, blurb, Address / Email / Phone columns, Legal links, copyright.
- Palette: navy `#0d0b46`-ish dark blue, white/cream body bg, red/coral accent button, serif-ish logo wordmark, sans body.

## Content-to-structure mapping

Doc has 5 content pages + contact — doesn't collapse into template's 3 nav items without dropping content, so nav expands to match doc's own "FINAL NAVIGATION" line: **HOME | OUR APPROACH | WEALTH MANAGEMENT | ABOUT TORAL | INSIGHTS & LEARNING | LET'S TALK**. Every section/bullet from the doc gets a home in one of these pages (see per-file mapping in tasks below) — nothing summarized or dropped.

## File structure

- `index.html` — Home
- `approach.html` — Our Approach
- `wealth-management.html` — Wealth Management
- `about.html` — About Toral
- `insights.html` — Insights & Learning (incl. contact form section, doc merges "Contact Form" into this page)
- `contact.html` — Let's Talk (dedicated consultation-style contact page, template's Free-Consultation analog)
- `styles.css` — shared design tokens + components (nav, footer, hero, cards, buttons, forms)
- `script.js` — mobile nav toggle, active-link highlight
- Shared header/footer duplicated per page (plain static HTML, no build step)

## Global constraints

- Every bullet, heading, and quote from the content doc must appear verbatim somewhere in the HTML — no paraphrasing, no dropping list items.
- Visual language follows the template audit above (navy hero, card grids, footer layout) but copy is 100% WealthWin's, none of the template's placeholder copy ("Describe the service...", "Lynch & Powell", etc.) ships in the final site.
- No JS framework/build step — plain HTML/CSS/JS, opens directly or via static server.
- Responsive: single breakpoint at 768px (stack nav → hamburger, grids → 1 column).

---

### Task 1: Shared styles + nav/footer partials

**Files:** Create `styles.css`, `script.js`

- [ ] Define CSS custom properties: `--navy: #0d0b46`, `--navy-dark:#08061f`, `--cream:#f7f5f0`, `--accent:#c65b45` (coral CTA), `--text-muted`, font stack (system sans + a serif display for headings).
- [ ] Build `.nav` (flex, logo left, links center, CTA right, sticky, mobile hamburger via `script.js` toggling `.nav--open`).
- [ ] Build `.hero` (full-bleed dark overlay over background-image, centered eyebrow/H1/subtext/CTA).
- [ ] Build `.card-grid` (auto-fit grid, `.card` with icon/title/body).
- [ ] Build `.footer` (4-col grid: Let's Connect blurb / Address / Email+Phone / Legal links, bottom copyright bar).
- [ ] Build `.btn` (coral, pill, hover darken) and `.section` spacing utility, `.quote` styled pull-quote block.
- [ ] `script.js`: hamburger toggle + set `aria-current` / active nav class by matching `location.pathname`.
- [ ] Verify: open `index.html` (once Task 2 exists) in browser, confirm nav/footer render with no console errors.

### Task 2: Home page (`index.html`)

Maps doc **PAGE 01 — HOME** section-for-section:

- [ ] Hero: eyebrow-free H1 `"Beyond Returns. Making Your Wealth Work Smarter."`, subtext `"Your wealth should do more than grow. It should create security, choices and freedom for the life you want to live."`, CTA button `Discover Our Approach` → `approach.html`.
- [ ] "The Problem" section: intro para verbatim + 4-card grid (Growing Wealth / Protecting Wealth / Strategising for the Future / Creating Financial Freedom) each with its one-line description.
- [ ] "Our Philosophy" section: pull-quote `"We don't begin with products. We begin with you."` + numbered 4-step list (Understand, Simplify, Strategise, Evolve) with their full descriptions.
- [ ] "What We Help With" section: 5-item list (Building Wealth, Managing Existing Wealth, Preparing for Financial Independence, Protecting What You've Built, Making Important Decisions).
- [ ] "The WealthWin Difference" section: 3-card grid (Clarity, Confidence, Control) with descriptions.
- [ ] "Client Testimonials" band: the 6 value words (Clarity, Personal attention, Responsiveness, Confidence, Discipline, Long-term relationships) as a tag/pill row under a heading (no fabricated testimonial quotes — doc gives values, not quotes, so present as-is).
- [ ] "Toral" intro block: `Toral Somaiya is a Certified Financial Planner with an MBA in Finance.` + quote `"Financial guidance should make people feel more informed — not more confused."` + link to `about.html`.
- [ ] Final CTA band: `"Your wealth deserves a strategy, not just a portfolio. Let's start with a conversation."` + button → `contact.html`.
- [ ] Shared nav (6 links) + footer.
- [ ] Verify: load in browser, `Cmd+F`/text-search every quoted string above appears exactly once.

### Task 3: Our Approach page (`approach.html`)

Maps doc **PAGE 02 — OUR APPROACH**:

- [ ] Hero: quote `"We don't begin with products. We begin with you."` + subtext `"The right financial solution aligns with your life, priorities and future."`.
- [ ] "What We Believe": 6 numbered principle cards, each with title + full body text (People Before Products; Purpose Before Performance incl. quote; Strategy Before Selection; Diversification Before Prediction; Understanding Before Action incl. quote; Partnership Over Transactions).
- [ ] "How We Work": 5-stage numbered process list (Understand/Organise/Strategise/Implement/Review) with descriptions.
- [ ] "What We Don't Do": 6-item list exactly as given (Chasing the next hot investment; Building portfolios around products; Relying purely on past returns; Creating unnecessary complexity; Investing simply because markets are rising; Disappearing after an investment is made).
- [ ] Verify: text-search each of the 6 belief titles + 6 "don't do" items present.

### Task 4: Wealth Management page (`wealth-management.html`)

Maps doc **PAGE 03 — WEALTH MANAGEMENT**:

- [ ] Hero: `"You've worked hard to build your wealth. Now make it wealth work smarter."` + subtext on complexity/structure/perspective/discipline.
- [ ] "Who This Is For": 7-item checklist grid.
- [ ] "Questions Worth Asking": 6-item list styled as reflective questions (larger italic type).
- [ ] "Our Role": quote `"Think of us as your financial sounding board."` + 6-item services list.
- [ ] "Investment & Wealth Solutions": quote `"Products are tools. The strategy comes first."` + tool chips (Mutual Funds, ETFs, GIFT City, PMS, SIF, Insurance, and other appropriate solutions).
- [ ] "The Ongoing Relationship": horizontal 5-step cycle diagram (Regular Reviews → Portfolio Monitoring → Goal Tracking → Life & Financial Changes → Course Correction), wrapping to vertical on mobile.
- [ ] Verify: all 7 "who this is for" items + 5 cycle stages present in DOM.

### Task 5: About Toral page (`about.html`)

Maps doc **PAGE 04 — ABOUT TORAL** (template's About-page team-card pattern reused for credentials/client-type cards):

- [ ] Hero: `"Behind every financial plan is a person. And behind WealthWin is a belief."` + subtext.
- [ ] "My Story": both paragraphs verbatim + pull-quote `"WealthWin was built around a simple belief: better financial decisions begin with better understanding."`.
- [ ] "What I Believe": 4 quotes as styled pull-quote list.
- [ ] "Experience & Credentials": 8-item badge/list grid (CFP®, MBA – Finance, Bachelor of Commerce, NRI Practice Management expertise, 1000+ people reached, Teaching and faculty experience, Investor education initiatives, Ongoing professional learning).
- [ ] "Who I Work With": 5-item list + 5 client-type pill tags (Professionals, Entrepreneurs, Successful Women, HNI Families, NRIs) — reuse template's team-card visual as "client type" cards if it reads better than plain pills.
- [ ] "Beyond WealthWin": paragraph + closing quote `"Financial confidence isn't built by knowing everything. It begins with knowing enough to ask the right questions."`.
- [ ] Verify: all 4 "what I believe" quotes + 8 credentials + 5 client types present.

### Task 6: Insights & Learning page (`insights.html`)

Maps doc **PAGE 05 — INSIGHTS & LEARNING** (contact-form sub-section from this page ships here, not merged into `contact.html`, since the doc scopes it under this page):

- [ ] Hero: `"Better financial decisions begin with better understanding. Ask better questions. Understand your choices. Stay informed."`.
- [ ] "Insights Categories": 4-card grid (Investing, Wealth & Life, Women & Wealth, Market Conversations) with descriptions.
- [ ] "Learning Offerings": 6-item grid (Corporate Workshops, Investor Awareness Sessions, Women & Wealth Programs, Client Learning Events, Webinars, Niveshika) with descriptions.
- [ ] "Featured Content": 4 title cards (Beyond Returns...; Are Your Investments Working Together?; What Will Wealth Creation Look Like...; Financial Independence: More Than a Number) as article teaser cards (no fabricated excerpt text beyond the titles given).
- [ ] "Contact Form" section: intro copy `"Have a financial question you've been putting off? You don't need to have everything figured out before starting a conversation."` + form replicating template's Free-Consultation form fields (first/last name, email, message, service select) with options: Review existing investments, Wealth management, Financial independence, Investment strategy, Other.
- [ ] Verify: all 4 insight categories + 6 learning offerings + 4 featured titles + form with 5 select options present.

### Task 7: Let's Talk page (`contact.html`)

Template's Free-Consultation page analog — doc's nav lists "LET'S TALK" as its own nav item distinct from the insights-page contact form, so this is the primary conversion page:

- [ ] Hero/header: `"Let's Talk"` heading + the doc's overall closing sentiment reused from Home's final CTA: `"Your wealth deserves a strategy, not just a portfolio. Let's start with a conversation."`
- [ ] Form: same field set as template's Free-Consultation (First name*, Last name*, Email*, Message, Services* select, Schedule an appointment*) with service options matching Task 6's list.
- [ ] Footer contact details block (address/email/phone) same as global footer, repeated large for emphasis (matches template's Free-Consultation layout).
- [ ] Verify: form renders all 6 fields, service select has same 5 options as Insights page for consistency.

### Task 8: Cross-page QA pass

- [ ] Start a static server (`python3 -m http.server`) in the site folder.
- [ ] Load each of the 6 pages via Browser tool, confirm: nav highlights correct active page, footer identical across pages, no broken internal links (Home CTA → approach.html, Home Toral link → about.html, Home final CTA → contact.html, About/Insights → contact.html where applicable).
- [ ] Resize to mobile (375px) for each page, confirm hamburger nav works and no horizontal scroll/overlap.
- [ ] Grep all 6 HTML files for leftover template placeholder strings (`Lynch`, `Powell`, `Describe the service`, `mysite.com`) — must return zero matches.
- [ ] Grep all 6 HTML files for a checklist of ~40 key doc phrases (one per bullet/quote listed in Tasks 2–7) — must all be found.

---

**Execution:** proceeding inline (no subagent dispatch) — single cohesive static-site build, faster to do directly than coordinate across agents.
