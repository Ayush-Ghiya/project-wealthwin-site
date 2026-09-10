import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';

export function WealthManagement() {
  return (
    <>
      <header className="hero">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/freedom-shore.jpg')" }}></div>
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">Wealth Management</Reveal>
          <Reveal as="h1" delay={1}>You've worked hard to build your wealth. <span className="accent-line">Now make it work smarter.</span></Reveal>
          <Reveal as="p" delay={2}>As wealth grows, financial decisions become more complex. The firm provides structure, perspective and discipline.</Reveal>
          <Reveal as={Link} href="/contact" className="btn btn--arrow" delay={3}>Book a Conversation</Reveal>
        </div>
      </header>

      <section className="section">
        <div className="split">
          <Reveal as="div" className="split__media">
            <img src="/assets/family-generations.jpg" alt="Wealth management consultation" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">Who This Is For</span>
            <p>WealthWin is relevant for those with:</p>
            <ul className="check-list">
              <li>Investments across multiple places</li>
              <li>Good earnings but uncertain structure</li>
              <li>Desire for objective portfolio review</li>
              <li>Approaching major life transitions</li>
              <li>Questions about retirement or financial independence</li>
              <li>Significant wealth without consolidated strategy</li>
              <li>Need for financial decision discussion</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Our Role</span>
          <p className="quote">&ldquo;Think of us as your financial sounding board.&rdquo;</p>
        </Reveal>
        <div className="container">
          <ul className="check-list grid">
            <Reveal as="li">Stepping back from individual investments</Reveal>
            <Reveal as="li" delay={1}>Seeing the bigger picture</Reveal>
            <Reveal as="li" delay={2}>Questioning assumptions</Reveal>
            <Reveal as="li">Understanding trade-offs</Reveal>
            <Reveal as="li" delay={1}>Making informed decisions</Reveal>
            <Reveal as="li" delay={2}>Staying disciplined through market cycles</Reveal>
          </ul>
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Investment &amp; Wealth Solutions</span>
          <h2 className="section__title">Products are tools. The strategy comes first.</h2>
          <p>Depending on your needs and strategy, we may use:</p>
        </Reveal>
        <Reveal as="div" className="container tag-row" delay={1}>
          <span className="tag">Mutual Funds</span>
          <span className="tag">ETFs</span>
          <span className="tag">GIFT City</span>
          <span className="tag">PMS</span>
          <span className="tag">SIF</span>
          <span className="tag">Insurance</span>
          <span className="tag">Other appropriate solutions</span>
        </Reveal>
        <Reveal as="p" className="quote" delay={2} style={{ marginTop: '36px' }}>The solution follows the strategy &mdash; not the other way around.</Reveal>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">The Ongoing Relationship</span>
        </Reveal>
        <Reveal as="div" className="container cycle" delay={1}>
          <div className="cycle__step">Regular Reviews</div>
          <div className="cycle__arrow">&rarr;</div>
          <div className="cycle__step">Portfolio Monitoring</div>
          <div className="cycle__arrow">&rarr;</div>
          <div className="cycle__step">Goal Tracking</div>
          <div className="cycle__arrow">&rarr;</div>
          <div className="cycle__step">Life &amp; Financial Changes</div>
          <div className="cycle__arrow">&rarr;</div>
          <div className="cycle__step">Course Correction</div>
        </Reveal>
      </section>
    </>
  );
}
