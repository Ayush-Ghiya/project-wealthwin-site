import { Reveal } from '../components/Reveal.jsx';
import { useCountUp } from '../hooks/useCountUp.js';

export function About() {
  const counter = useCountUp(1000, { suffix: '+' });

  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/handshake.jpg')" }}></div>
        <Reveal as="p" className="hero__eyebrow">About Toral</Reveal>
        <Reveal as="h1" delay={1}>Behind every financial plan is a person. And behind WealthWin is a belief.</Reveal>
        <Reveal as="p" delay={2}>Financial guidance should create clarity and confidence &mdash; not dependence.</Reveal>
      </header>

      {/* MY STORY */}
      <section className="section">
        <div className="split">
          <Reveal as="div" className="profile-img">
            <img src="/assets/toral.jpg" alt="Toral Somaiya, Certified Financial Planner" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">My Story</span>
            <p>Financial decisions connect to families, aspirations, responsibilities, careers and desired lifestyle. Investors often needed clarity about what they owned and why, rather than more products or information.</p>
            <p className="quote" style={{ textAlign: 'left', marginLeft: 0 }}>&ldquo;WealthWin was built around a simple belief: better financial decisions begin with better understanding.&rdquo;</p>
          </Reveal>
        </div>
      </section>

      {/* WHAT I BELIEVE */}
      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">What I Believe</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card"><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;I don't want my clients to simply know what they own. I want them to understand why they own it.&rdquo;</p></Reveal>
          <Reveal as="div" className="card" delay={1}><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;Good financial advice should simplify decisions, not complicate them.&rdquo;</p></Reveal>
          <Reveal as="div" className="card" delay={2}><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;My role is not to predict markets. It is to help clients make sensible decisions through different cycles.&rdquo;</p></Reveal>
          <Reveal as="div" className="card" delay={3}><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;Wealth is ultimately about the choices it gives you.&rdquo;</p></Reveal>
        </div>
      </section>

      {/* EXPERIENCE & CREDENTIALS */}
      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Experience &amp; Credentials</span>
        </Reveal>
        <Reveal as="div" className="container stats" style={{ marginBottom: '48px' }}>
          <div className="stat">
            <div className="stat__num"><span ref={counter.ref}>{counter.text}</span></div>
            <div className="stat__label">people reached through financial education</div>
          </div>
        </Reveal>
        <div className="container">
          <ul className="check-list grid">
            <Reveal as="li">CFP&reg; (Certified Financial Planner)</Reveal>
            <Reveal as="li" delay={1}>MBA &ndash; Finance</Reveal>
            <Reveal as="li" delay={2}>Bachelor of Commerce</Reveal>
            <Reveal as="li">NRI Practice Management expertise</Reveal>
            <Reveal as="li" delay={1}>1000+ people reached through financial education</Reveal>
            <Reveal as="li" delay={2}>Teaching and faculty experience</Reveal>
            <Reveal as="li">Investor education initiatives</Reveal>
            <Reveal as="li" delay={1}>Ongoing professional learning</Reveal>
          </ul>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Who I Work With</span>
          <p>Clients are people who:</p>
        </Reveal>
        <Reveal as="div" className="container" style={{ marginBottom: '44px' }}>
          <ul className="check-list grid">
            <li>Value professional advice</li>
            <li>Want to understand their money</li>
            <li>Appreciate long-term relationships</li>
            <li>Plan rather than react</li>
            <li>Want wealth to support their life</li>
          </ul>
        </Reveal>
        <div className="container people-grid">
          <Reveal as="div" className="people-card card">
            <div className="people-card__title">Client Type</div>
            <h3>Professionals</h3>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={1}>
            <div className="people-card__title">Client Type</div>
            <h3>Entrepreneurs</h3>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={2}>
            <div className="people-card__title">Client Type</div>
            <h3>Successful Women</h3>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={3}>
            <div className="people-card__title">Client Type</div>
            <h3>HNI Families</h3>
          </Reveal>
          <Reveal as="div" className="people-card card" delay={4}>
            <div className="people-card__title">Client Type</div>
            <h3>NRIs</h3>
          </Reveal>
        </div>
      </section>

      {/* BEYOND WEALTHWIN */}
      <section className="cta-banner">
        <div className="cta-banner__bg" style={{ backgroundImage: "url('/assets/skyline.jpg')" }}></div>
        <Reveal as="div" className="container">
          <span className="eyebrow" style={{ color: '#e5b7ac' }}>Beyond WealthWin</span>
          <p style={{ maxWidth: '720px', margin: '0 auto 20px', color: '#e6e5f8' }}>Through workshops, investor awareness initiatives, teaching and conversations, Toral aims to make financial concepts accessible and actionable.</p>
          <p className="quote">&ldquo;Financial confidence isn't built by knowing everything. It begins with knowing enough to ask the right questions.&rdquo;</p>
        </Reveal>
      </section>
    </>
  );
}
