import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import { Reveal } from '../components/Reveal.jsx';
import { submitToGoogleForm } from '../lib/googleForm.js';

export function Insights() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      await submitToGoogleForm({
        name: form['name'].value,
        phone: form['phone'].value,
        email: form['email'].value,
        message: form['message'].value,
        service: form['service'].value,
      });
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/insights-hero.jpg')" }}></div>
        <div className="hero__inner">
          <Reveal as="p" className="hero__eyebrow">Insights &amp; Learning</Reveal>
          <Reveal as="h1" delay={1}>Better financial decisions begin with better understanding.</Reveal>
          <Reveal as="p" delay={2}>Ask better questions. Understand your choices. Stay informed.</Reveal>
          <Reveal as={Link} href="/contact" className="btn btn--arrow" delay={3}>Book a Conversation</Reveal>
        </div>
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

      <section className="section section--alt">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Featured Content</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card article-card">
            <span className="card__num">01</span>
            <h3>Beyond Returns: What Are You Really Investing For?</h3>
            <p className="text-muted">Returns are only half the question — the other half is what the money is actually for.</p>
            {/* TODO: replace "#" with the real article URL once the client supplies it */}
            <a href="#" className="article-card__more">Read More &rarr;</a>
          </Reveal>
          <Reveal as="div" className="card article-card" delay={1}>
            <span className="card__num">02</span>
            <h3>Are Your Investments Working Together?</h3>
            <p className="text-muted">Individually sensible investments can still add up to a portfolio pulling in different directions.</p>
            {/* TODO: replace "#" with the real article URL once the client supplies it */}
            <a href="#" className="article-card__more">Read More &rarr;</a>
          </Reveal>
          <Reveal as="div" className="card article-card" delay={2}>
            <span className="card__num">03</span>
            <h3>What Will Wealth Creation Look Like in the Next Decade?</h3>
            <p className="text-muted">How shifting markets, rates and access are changing the way wealth gets built.</p>
            {/* TODO: replace "#" with the real article URL once the client supplies it */}
            <a href="#" className="article-card__more">Read More &rarr;</a>
          </Reveal>
          <Reveal as="div" className="card article-card" delay={3}>
            <span className="card__num">04</span>
            <h3>Financial Independence: More Than a Number</h3>
            <p className="text-muted">Why a single target figure rarely captures what independence actually requires.</p>
            {/* TODO: replace "#" with the real article URL once the client supplies it */}
            <a href="#" className="article-card__more">Read More &rarr;</a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Contact Form</span>
          <p>Have a financial question you've been putting off?<br/>You don't need to have everything figured out before starting a conversation.</p>
        </Reveal>
        <Reveal as="form" className="form-card" delay={1} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="ins-name">Name*</label>
              <input id="ins-name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="ins-phone">Phone*</label>
              <input id="ins-phone" name="phone" type="text" required length={10} />
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
              <option>Review existing portfolio</option>
              <option>Goal Designing</option>
              <option>Insurance Planning</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
          {status === 'sent' && <p className="form-status form-status--ok">Thanks — we'll be in touch soon.</p>}
          {status === 'error' && <p className="form-status form-status--error">Something went wrong. Please try again.</p>}
        </Reveal>
      </section>
    </>
  );
}
