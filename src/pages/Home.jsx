import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';

/* One square, split 2x2. Three quadrants — top-left, bottom-left,
   bottom-right — are already locked together into an L, their shared seams
   fully interlocked. The top-right quadrant is an open corner: the two edges
   that face it (TL's right edge, BR's top edge) carry the concave half of the
   joint, so the gap reads as a socket waiting, not a blank cut.

   Square: (20,52)-(200,232). Midlines x=110, y=142. Knob radius 12.
   Each shared arc is written once per side, same centre and radius, with
   complementary sweep flags because the two outlines traverse it opposite ways:
     TL v BL  centre (65,142)  bulges down  — TL's tab sunk into BL
     BL v BR  centre (110,187) bulges right — BL's tab sunk into BR
     TL v TR  centre (110,97)  bulges left  — socket in TL, tab on TR
     BR v TR  centre (155,142) bulges down  — socket in BR, tab on TR   */
const PUZZLE_PIECES = [
  /* top-left */
  'M20,52 L110,52 L110,85 A12,12 0 0,0 110,109 L110,142 L77,142 A12,12 0 0,1 53,142 L20,142 Z',
  /* bottom-left */
  'M20,142 L53,142 A12,12 0 0,0 77,142 L110,142 L110,175 A12,12 0 0,1 110,199 L110,232 L20,232 Z',
  /* bottom-right */
  'M110,142 L143,142 A12,12 0 0,0 167,142 L200,142 L200,232 L110,232 L110,199 A12,12 0 0,0 110,175 Z',
];
/* the top-right corner piece: flat along the square's outer top and right
   edges, tabs protruding left and down into the two waiting sockets */
const PUZZLE_KEY =
  'M110,52 L200,52 L200,142 L167,142 A12,12 0 0,1 143,142 L110,142 L110,109 A12,12 0 0,1 110,85 Z';

export function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/hero-skyline.jpg')" }}></div>
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">Wealth &amp; Investment Solutions</Reveal>
          <Reveal as="h1" delay={1}>Beyond Returns. <span className="accent-line">Making Your Wealth Work Smarter.</span></Reveal>
          <Reveal as="p" delay={2}>Wealth is ultimately about the choices it gives you.</Reveal>
          <Reveal as={Link} href="/approach" className="btn btn--arrow" delay={3}>Discover Our Approach</Reveal>
        </div>
      </header>

      {/* THE MISSING PIECE */}
      <section className="section">
        <div className="split">
          <Reveal as="div" className="puzzle">
            <svg
              className="puzzle__svg"
              viewBox="0 0 250 252"
              role="img"
              aria-labelledby="puzzle-title"
            >
              <title id="puzzle-title">
                A square jigsaw with three pieces already joined and the top-right corner missing, the WealthWin piece moving in to fill the gap.
              </title>
              <path className="puzzle__slot" d={PUZZLE_KEY} />
              {PUZZLE_PIECES.map((d, i) => (
                <path key={i} className={`puzzle__piece puzzle__piece--${i + 1}`} d={d} />
              ))}
              {/* the corner piece carries the WealthWin mark. Its body is the
                  clean 90x90 square (110,52)-(200,142) — both tabs protrude
                  outward — so the mark is centred on (155,97) in a 70-unit
                  square box, leaving 10 units clear of every body edge and
                  well clear of the tabs. The box is square and the source is
                  512x512, so xMidYMid meet renders the mark unstretched.
                  Face and mark share one <g> so they move as one object. */}
              <path className="puzzle__key" d={PUZZLE_KEY} />
            </svg>
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">The Problem</span>
            <p>You may be doing well financially, but everything may not be working together.<br/>Investments, protection, retirement, family responsibilities and aspirations are interconnected, yet financial decisions are often made individually.</p>
            <p>WealthWin addresses four core areas:</p>
          </Reveal>
        </div>
        <div className="container grid puzzle-areas" style={{ marginTop: '56px' }}>
          <Reveal as="div" className="card card--piece">
            <h3>Growing Wealth</h3>
            <p className="text-muted">Build a disciplined, diversified approach.</p>
          </Reveal>
          <Reveal as="div" className="card card--piece" delay={1}>
            <h3>Protecting Wealth</h3>
            <p className="text-muted">Identify risks that could disrupt what you've built.</p>
          </Reveal>
          <Reveal as="div" className="card card--piece" delay={2}>
            <h3>Strategising for the Future</h3>
            <p className="text-muted">Align your wealth with the life you want.</p>
          </Reveal>
          <Reveal as="div" className="card card--piece" delay={3}>
            <h3>Creating Financial Freedom</h3>
            <p className="text-muted">Build the flexibility to make choices on your terms.</p>
          </Reveal>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Our Philosophy</span>
          <p className="quote">&ldquo;We don't begin with products. We begin with you.&rdquo;</p>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <span className="card__num">01</span>
            <h3>Understand</h3>
            <p className="text-muted">Understand your financial situation, goals, priorities and concerns.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <span className="card__num">02</span>
            <h3>Simplify</h3>
            <p className="text-muted">Simplify by bringing clarity to what you own and why.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <span className="card__num">03</span>
            <h3>Strategise</h3>
            <p className="text-muted">Strategise around your goals, time horizon and risk.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={3}>
            <span className="card__num">04</span>
            <h3>Evolve</h3>
            <p className="text-muted">Evolve as your life and circumstances change.</p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE HELP WITH - NOT REQUIRED AS OF NOW */}
      {/* <section className="section section--alt">
        <div className="split split--reverse">
          <Reveal as="div" className="split__media">
            <img src="/assets/living-well.jpg" alt="Building and managing wealth" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">What We Help With</span>
            <ul className="check-list">
              <li>Building Wealth</li>
              <li>Managing Existing Wealth</li>
              <li>Protecting What You've Built</li>
              <li>Preparing for Financial Independence</li>
            </ul>
          </Reveal>
        </div>
      </section> */}

      

  

      {/* TORAL */}
      <section className="section section--alt">
        <div className="split">
          <Reveal as="div" className="profile-img">
            <img src="/assets/toral.jpg" alt="Toral Somaiya, Certified Financial Planner" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">Meet Toral</span>
            <p>Toral Somaiya, CFP®, MBA in Finance, works with clients to bring structure and clarity to their wealth</p>
            <p>With a strong foundation in finance and a people-first approach, Toral helps you understand your finances, bring clarity to your decisions and build towards your goals.</p>
            <p className="quote" style={{ textAlign: 'left', marginLeft: 0 }}>&ldquo;Financial guidance should make people feel more informed &mdash; not more confused.&rdquo;</p>
            <Link href="/about" className="btn btn--outline" style={{ color: 'var(--navy)' }}>Meet Toral</Link>
          </Reveal>
        </div>
      </section>

          {/* WHAT CLIENTS VALUE */}
      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">What Clients Value</span>
        </Reveal>
        <Reveal as="div" className="container tag-row" delay={1}>
          <span className="tag">Clarity</span>
          <span className="tag">Personal attention</span>
          <span className="tag">Responsiveness</span>
          <span className="tag">Confidence</span>
          <span className="tag">Discipline</span>
          <span className="tag">Long-term relationships</span>
        </Reveal>
      </section>

      {/* THE WEALTHWIN DIFFERENCE */}
      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">The WealthWin Difference</span>
          <p>Building financial confidence through:</p>
        </Reveal>
        <div className="container people-grid">
          <Reveal as="div" className="card people-card">
            <h3>Clarity</h3>
            <p className="text-muted">Know where you stand.</p>
          </Reveal>
          <Reveal as="div" className="card people-card" delay={1}>
            <h3>Confidence</h3>
            <p className="text-muted">Understand why you're making each decision.</p>
          </Reveal>
          <Reveal as="div" className="card people-card" delay={2}>
            <h3>Control</h3>
            <p className="text-muted">Make your wealth work for the life you want.</p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-banner">
        <div className="cta-banner__bg" style={{ backgroundImage: "url('/assets/summit-perspective.jpg')" }}></div>
        <Reveal as="div" className="container">
          <h2 className="section__title">Your next decision can feel different.</h2>
          <p className="quote">&ldquo;Your wealth deserves a strategy, not just a portfolio.<br/>Let's start with a conversation.&rdquo;</p>
          <Link href="/contact" className="btn">Let's Talk</Link>
        </Reveal>
      </section>
    </>
  );
}
