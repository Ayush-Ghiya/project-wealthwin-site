import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';

export function Approach() {
  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/journey-lake.jpg')" }}></div>
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">Our Approach</Reveal>
          <Reveal as="p" className="quote" delay={1}>&ldquo;We don't begin with products. We begin with you.&rdquo;</Reveal>
          <Reveal as="p" delay={2}>The right financial solution aligns with your life, priorities and future.</Reveal>
          <Reveal as={Link} href="/contact" className="btn btn--arrow" delay={3}>Book a Conversation</Reveal>
        </div>
      </header>

      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">What We Believe</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <h3>1. People Before Products</h3>
            <p className="text-muted">Understanding the person behind the money comes first.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>2. Purpose Before Performance</h3>
            <p className="text-muted">&ldquo;Returns matter. But returns without purpose don't create security.&rdquo;</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>3. Strategy Before Selection</h3>
            <p className="text-muted">Investments are one part of wealth management.</p>
          </Reveal>
          <Reveal as="div" className="card">
            <h3>4. Diversification Before Prediction</h3>
            <p className="text-muted">Building resilient strategies rather than predicting markets.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>5. Understanding Before Action</h3>
            <p className="text-muted">&ldquo;You should know what you own, why you own it and what role it plays.&rdquo;</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>6. Partnership Over Transactions</h3>
            <p className="text-muted">Ongoing relationship, not one-time recommendations.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">How We Work</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <span className="card__num">1</span>
            <h3>Understand</h3>
            <p className="text-muted">Understand your life, goals, existing wealth and priorities.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <span className="card__num">2</span>
            <h3>Organise</h3>
            <p className="text-muted">Organise investments, protection, liabilities and commitments.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <span className="card__num">3</span>
            <h3>Strategise</h3>
            <p className="text-muted">Strategise appropriate asset allocation and investment approach.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={3}>
            <span className="card__num">4</span>
            <h3>Implement</h3>
            <p className="text-muted">Implement using appropriate financial solutions.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={4}>
            <span className="card__num">5</span>
            <h3>Review</h3>
            <p className="text-muted">Review and adapt as your life evolves.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="split split--reverse">
          <Reveal as="div" className="split__media">
            <img src="/assets/insights-hero.jpg" alt="Disciplined investing over market cycles" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">What We Don't Do</span>
            <ul className="check-list avoid-list">
              <li>Chasing the next hot investment</li>
              <li>Building portfolios around products</li>
              <li>Relying purely on past returns</li>
              <li>Creating unnecessary complexity</li>
              <li>Investing simply because markets are rising</li>
              <li>Disappearing after an investment is made</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
