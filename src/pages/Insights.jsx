import { Reveal } from '../components/Reveal.jsx';

export function Insights() {
  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/charts.jpg')" }}></div>
        <Reveal as="p" className="hero__eyebrow">Insights &amp; Learning</Reveal>
        <Reveal as="h1" delay={1}>Better financial decisions begin with better understanding.</Reveal>
        <Reveal as="p" delay={2}>Ask better questions. Understand your choices. Stay informed.</Reveal>
      </header>

      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Insights Categories</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <h3>Investing</h3>
            <p className="text-muted">Markets, asset allocation and investor behaviour</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Wealth &amp; Life</h3>
            <p className="text-muted">How money connects with lifestyle, freedom and life decisions</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Women &amp; Wealth</h3>
            <p className="text-muted">Financial confidence, independence and wealth creation</p>
          </Reveal>
          <Reveal as="div" className="card" delay={3}>
            <h3>Market Conversations</h3>
            <p className="text-muted">Fund manager conversations and perspectives</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Learning Offerings</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <h3>Corporate Workshops</h3>
            <p className="text-muted">Practical financial education for organisations</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Investor Awareness Sessions</h3>
            <p className="text-muted">Understanding financial concepts and choices</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Women &amp; Wealth Programs</h3>
            <p className="text-muted">Conversations on financial confidence</p>
          </Reveal>
          <Reveal as="div" className="card">
            <h3>Client Learning Events</h3>
            <p className="text-muted">Ongoing meaningful conversations</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Webinars</h3>
            <p className="text-muted">Discussions on relevant financial topics</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Niveshika</h3>
            <p className="text-muted">Customised wealth-building approach</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Featured Content</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card article-card">
            <span className="card__num">01</span>
            <h3>Beyond Returns: What Are You Really Investing For?</h3>
          </Reveal>
          <Reveal as="div" className="card article-card" delay={1}>
            <span className="card__num">02</span>
            <h3>Are Your Investments Working Together?</h3>
          </Reveal>
          <Reveal as="div" className="card article-card" delay={2}>
            <span className="card__num">03</span>
            <h3>What Will Wealth Creation Look Like in the Next Decade?</h3>
          </Reveal>
          <Reveal as="div" className="card article-card" delay={3}>
            <span className="card__num">04</span>
            <h3>Financial Independence: More Than a Number</h3>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Contact Form</span>
          <p>Have a financial question you've been putting off? You don't need to have everything figured out before starting a conversation.</p>
        </Reveal>
        <Reveal as="form" className="form-card" delay={1}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="ins-first">First name*</label>
              <input id="ins-first" name="first-name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="ins-last">Last name*</label>
              <input id="ins-last" name="last-name" type="text" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="ins-email">Email*</label>
            <input id="ins-email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="ins-message">Message</label>
            <textarea id="ins-message" name="message"></textarea>
          </div>
          <div className="field">
            <label htmlFor="ins-service">Services*</label>
            <select id="ins-service" name="service" required>
              <option value="">Select a service</option>
              <option>Review existing investments</option>
              <option>Wealth management</option>
              <option>Financial independence</option>
              <option>Investment strategy</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn">Submit</button>
        </Reveal>
      </section>
    </>
  );
}
