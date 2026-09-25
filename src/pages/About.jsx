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
            <p className="quote" style={{ textAlign: 'left', marginLeft: 0 }}>I believe money should make your life better &mdash; not more complicated.</p>
            <p>You may be earning well. You may already have investments. You may even have a good portfolio.</p>
            <p>But at some point, you may still wonder:<br/>Am I doing the right things with my money?<br/>Are my investments actually working towards my goals?<br/>What am I missing?</p>
            <p>These are the questions that led me to build WealthWin.</p>
            <p>I am a CFP&reg; with an MBA in Finance and over a decade of experience in financial services and investor education.</p>
            <p>Over the years, I have worked with individuals and families to bring greater clarity and structure to their financial decisions, while also conducting investor education programs for professionals and organisations.</p>
            <p>But what matters most to me is not the number of products in a portfolio.<br/>It is the quality of the financial decisions we make together.</p>
            <p>I take time to understand your life, your goals, your responsibilities and your concerns before we talk about investments.<br/>Because your portfolio should fit your life &mdash; not the other way around.</p>
            <p>At WealthWin, my commitment is simple:<br/>To help you understand your money better, invest with purpose and build wealth with confidence.</p>
            <p>If you feel your money deserves more thought, more structure or simply a conversation with someone who will look at the bigger picture &mdash; I'd be happy to talk.</p>
            <Link href="/contact" className="btn btn--outline" style={{ color: 'var(--navy)' }}>Let's Start a Conversation</Link>
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

        <div className="container credential-list-wrap">
          <ul className="check-list check-list--center">
            <Reveal as="li">CFP&reg; (Certified Financial Planner)</Reveal>
            <Reveal as="li" delay={1}>MBA &ndash; Finance</Reveal>
            <Reveal as="li" delay={2}>10 years of experience</Reveal>
            <Reveal as="li">NRI Practice Management expertise</Reveal>
            <Reveal as="li" delay={1}>Teaching and faculty experience</Reveal>
            <Reveal as="li" delay={2}>Investor education initiatives</Reveal>
            <Reveal as="li">Ongoing professional learning</Reveal>
          </ul>
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
