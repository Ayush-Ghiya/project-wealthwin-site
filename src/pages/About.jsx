import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';
import { useCountUp } from '../hooks/useCountUp.js';

export function About() {
  const counter = useCountUp(1000, { suffix: '+' });
  const counter2 = useCountUp(185, { suffix: '+' });
  const counter3 = useCountUp(50, { suffix: '+ Cr' });

  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/city-momentum.jpg')" }}></div>
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">About Toral</Reveal>
          <Reveal as="h1" delay={1}>Behind every financial strategy is a person.<br/>And behind WealthWin is a belief.</Reveal>
          <Reveal as="p" delay={2}>Good financial guidance should simplify decisions, not complicate them.</Reveal>
          <Reveal as={Link} href="/contact" className="btn btn--arrow" delay={3}>Book a Conversation</Reveal>
        </div>
      </header>

      {/* MY STORY */}
      <section className="section">
        <div className="split">
          <Reveal as="div" className="profile-img">
            <img src="/assets/toral.jpg" alt="Toral Somaiya, Certified Financial Planner" />
          </Reveal>
          <Reveal as="div" delay={1}>
            <span className="eyebrow">My Story</span>
            <h2 className="section__title">Why I chose to build WealthWin</h2>
            <p>Financial decisions are rarely just about money. They are connected to our families, aspirations, responsibilities, careers and the life we want to create.</p>
            <p>Over the years, I saw that investors often didn't need more products or information. They needed more clarity &mdash; about what they owned, why they owned it and how it connected to their larger goals.</p>
            <p>That shaped the way I wanted to work with clients.</p>
            <p className="quote" style={{ textAlign: 'left', marginLeft: 0 }}>WealthWin was built around a simple belief: better financial decisions begin with better understanding.</p>
          </Reveal>
        </div>
      </section>

      {/* WHAT I BELIEVE */}
      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">What I Believe</span>
          <h2 className="section__title">The principles behind every conversation.</h2>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card"><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;I don't want my clients to simply know what they own. I want them to understand why they own it.&rdquo;</p></Reveal>
          <Reveal as="div" className="card" delay={1}><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;Good financial guidance should simplify decisions, not complicate them.&rdquo;</p></Reveal>
          <Reveal as="div" className="card" delay={2}><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;My role is not to predict markets. It is to help clients make sensible decisions through different cycles.&rdquo;</p></Reveal>
          <Reveal as="div" className="card" delay={3}><p className="quote" style={{ fontSize: '1.05rem' }}>&ldquo;Your wealth should do more than grow. It should create <b>security</b>, <b>choices</b> and <b>freedom</b> for the life you want to live.&rdquo;</p></Reveal>
        </div>
      </section>

      {/* EXPERIENCE & CREDENTIALS */}
      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Experience &amp; Credentials</span>
        </Reveal>
        <Reveal as="div" className="container stats">
          <div className="stat">
            <div className="stat__num"><span ref={counter.ref}>{counter.text}</span></div>
            <div className="stat__label">people reached through financial education</div>
          </div>
          <div className="stat">
            <div className="stat__num"><span ref={counter2.ref}>{counter2.text}</span></div>
            <div className="stat__label">families supported</div>
          </div>
           <div className="stat">
            <div className="stat__num"><span ref={counter3.ref}>{counter3.text}</span></div>
            <div className="stat__label">Asset under service</div>
          </div>
        </Reveal>

        <div className="container credential-groups">
          <Reveal as="div" className="credential-group">
            <h3 className="credential-group__label">Qualifications</h3>
            <ul className="check-list">
              <Reveal as="li">CFP&reg; (Certified Financial Planner)</Reveal>
              <Reveal as="li" delay={1}>MBA &ndash; Finance</Reveal>
              <Reveal as="li" delay={2}>10 years of experience</Reveal>
            </ul>
          </Reveal>
          <Reveal as="div" className="credential-group" delay={1}>
            <h3 className="credential-group__label">Experience &amp; Initiatives</h3>
            <ul className="check-list">
              <Reveal as="li">NRI Practice Management expertise</Reveal>
              <Reveal as="li" delay={1}>Teaching and faculty experience</Reveal>
              <Reveal as="li" delay={2}>Investor education initiatives</Reveal>
              <Reveal as="li" delay={1}>Ongoing professional learning</Reveal>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BEYOND WEALTHWIN */}
      <section className="cta-banner">
        <div className="cta-banner__bg" style={{ backgroundImage: "url('/assets/education-sessions.jpg')" }}></div>
        <Reveal as="div" className="container">
          <span className="eyebrow" style={{ color: '#e5b7ac' }}>Beyond WealthWin</span>
          <p style={{ maxWidth: '720px', margin: '0 auto 20px', color: '#e6e5f8' }}>Through workshops, investor awareness initiatives, teaching and conversations, Toral aims to make financial concepts accessible and actionable.</p>
          <p className="quote">&ldquo;Financial confidence isn't built by knowing everything.<br/> It begins with knowing enough to ask the right questions.&rdquo;</p>
        </Reveal>
      </section>
    </>
  );
}
