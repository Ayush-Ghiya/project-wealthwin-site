import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';

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

      {/* THE PROBLEM */}
      <section className="section">
        <div className="split">
          <Reveal as="div" className="split__media">
            <img src="/assets/vista-longview.jpg" alt="Financial analytics and planning" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">The Problem</span>
            <p>You may be doing well financially, but everything may not be working together.<br/>Investments, protection, retirement, family responsibilities and aspirations are interconnected, yet financial decisions are often made individually.</p>
            <p>WealthWin addresses four core areas:</p>
          </Reveal>
        </div>
        <div className="container grid" style={{ marginTop: '56px' }}>
          <Reveal as="div" className="card">
            <h3>Growing Wealth</h3>
            <p className="text-muted">Build a disciplined, diversified approach.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Protecting Wealth</h3>
            <p className="text-muted">Identify risks that could disrupt what you've built.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Strategising for the Future</h3>
            <p className="text-muted">Align your wealth with the life you want.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={3}>
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
