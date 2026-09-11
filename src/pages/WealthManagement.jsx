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

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Investment &amp; Wealth Solutions</span>
          <p className="quote">Products are tools. The strategy comes first.</p>
        </Reveal>
        <Reveal as="div" className="container tag-quote" delay={1}>
          <p>Depending on your needs and strategy, we may use:</p>
        </Reveal>
        <Reveal as="div" className="container tag-row" delay={2}>
          <span className="tag">Mutual Funds</span>
          <span className="tag">GIFT City</span>
          <span className="tag">PMS</span>
          <span className="tag">SIF</span>
          <span className="tag">Insurance</span>
          <span className="tag">Other appropriate solutions</span>
        </Reveal>
      </section>

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
              <li>Significant wealth without consolidated strategy</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Our Role</span>
          <p className="quote">Think of us as your financial sounding board.</p>
        </Reveal>
        <div className="container">
          <ul className="check-list check-list--center">
            <Reveal as="li">Stepping back from individual investments</Reveal>
            <Reveal as="li" delay={1}>Seeing the bigger picture</Reveal>
            <Reveal as="li" delay={1}>Making informed decisions</Reveal>
            <Reveal as="li" delay={2}>Staying disciplined through market cycles</Reveal>
          </ul>
        </div>
      </section>

      {/* WHO I WORK WITH (moved from the About page) */}
      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Who I Work With</span>
          <h2 className="section__title">A plan that meets you where you are.</h2>
          <p>Clients are people who:</p>
        </Reveal>
        <Reveal as="div" className="container" style={{ marginBottom: '44px' }}>
          <ul className="check-list grid grid--3">
            <li>Value professional advice</li>
            <li>Want to understand their money</li>
            <li>Appreciate long-term relationships</li>
            <li>Plan rather than react</li>
            <li>Want wealth to support their life</li>
            <li>Believe in informed decision making</li>
          </ul>
        </Reveal>
        <div className="container people-grid">
          <Reveal as="div" className="people-card card">
            <div className="people-card__title">Client Type</div>
            <h3>Professionals</h3>
            <p className="text-muted">Salaried individuals looking to build long-term wealth systematically</p>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={1}>
            <div className="people-card__title">Client Type</div>
            <h3>Entrepreneurs</h3>
            <p className="text-muted">Business owners who want their personal wealth to grow alongside their business</p>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={2}>
            <div className="people-card__title">Client Type</div>
            <h3>Successful Women</h3>
            <p className="text-muted">Women seeking financial confidence and independence on their own terms</p>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={3}>
            <div className="people-card__title">Client Type</div>
            <h3>HNI Families</h3>
            <p className="text-muted">High-net-worth families looking for structured, multi-generational wealth planning</p>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={4}>
            <div className="people-card__title">Client Type</div>
            <h3>NRIs</h3>
            <p className="text-muted">Non-resident Indians managing investments and financial goals across borders</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">The Ongoing Relationship</span>
          <p className="quote">Wealth management doesn’t end when an investment is made.</p>
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
