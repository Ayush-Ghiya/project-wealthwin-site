import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';

export function Approach() {
  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/journey-lake.jpg')" }}></div>
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">Our Approach</Reveal>
          <Reveal as="p" className="quote" delay={1}>We don't begin with products. We begin with you.</Reveal>
          <Reveal as="p" delay={2}>The right financial solution aligns with your life, priorities and future.</Reveal>
          <Reveal as={Link} href="/contact" className="btn btn--arrow" delay={3}>Book a Conversation</Reveal>
        </div>
      </header>

      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">How We Work</span>
        </Reveal>
        <div className="container grid grid--3">
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

      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">What We Believe</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <h3>1. Diversification Before Prediction</h3>
            <p className="text-muted">Building resilient strategies rather than predicting markets.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>2. Understanding Before Action</h3>
            <p className="text-muted">You should know what you own, why you own it and what role it plays.</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>3. Partnership Over Transactions</h3>
            <p className="text-muted">Ongoing relationship, not one-time transaction.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Beyond Wealth</span>
          <p>Toral's work goes beyond individual client conversations, through initiatives that build financial awareness more broadly:</p>
        </Reveal>
        <div className="container grid grid--3">
          <Reveal as="div" className="card">
            <h3>Niveshika</h3>
            <p className="text-muted">Customised wealth-building approach</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Investor Awareness Programmes (IAPs)</h3>
            <p className="text-muted">Structured sessions to build investor awareness and financial literacy</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Private Wealth Circle</h3>
            <p className="text-muted">Exclusive sessions for selected clients</p>
          </Reveal>
        </div>
      </section>

      {/* LEARNING OFFERINGS (moved from the Insights & Learning page) */}
      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Learning Offerings</span>
        </Reveal>
        <div className="container grid grid--2">
          <Reveal as="div" className="card">
            <h3>Corporate Workshops</h3>
            <p className="text-muted">Practical financial education for organisations</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Investor Awareness Sessions</h3>
            <p className="text-muted">Understanding financial concepts and choices</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Women &amp; Wealth Programs (Niveshika)</h3>
            <p className="text-muted">Conversations on financial confidence</p>
          </Reveal>
          <Reveal as="div" className="card">
            <h3>Private Wealth Circle</h3>
            <p className="text-muted">Exclusive sessions for selected clients</p>
          </Reveal>
        </div>
      </section>

{/* WHAT WE DON'T DO - NOT REQUIRED AS OF NOW */}
      {/* <section className="section section--alt">
        <div className="split split--reverse">
          <Reveal as="div" className="split__media">
            <img src="/assets/steadfast-tree.jpg" alt="Disciplined investing over market cycles" />
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
      </section> */}
    </>
  );
}
