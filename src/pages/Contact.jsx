import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <>
      <header className="hero hero--small">
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/handshake.jpg')" }}></div>
        <Reveal as="h1">Let's Talk</Reveal>
        <Reveal as="p" className="quote" delay={1}>&ldquo;Your wealth deserves a strategy, not just a portfolio. Let's start with a conversation.&rdquo;</Reveal>
      </header>

      <section className="section">
        <Reveal as="form" className="form-card">
          <div className="form-row">
            <div className="field">
              <label htmlFor="c-first">First name*</label>
              <input id="c-first" name="first-name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="c-last">Last name*</label>
              <input id="c-last" name="last-name" type="text" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-email">Email*</label>
            <input id="c-email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message"></textarea>
          </div>
          <div className="field">
            <label htmlFor="c-service">Services*</label>
            <select id="c-service" name="service" required>
              <option value="">Select a service</option>
              <option>Review existing investments</option>
              <option>Wealth management</option>
              <option>Financial independence</option>
              <option>Investment strategy</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-appt">Schedule an appointment*</label>
            <input id="c-appt" name="appointment" type="datetime-local" required />
          </div>
          <button type="submit" className="btn">Book a Free Consultation</button>
        </Reveal>
      </section>

      <section className="section section--navy">
        <Reveal as="div" className="container section__head">
          <span className="eyebrow">Reach Us Directly</span>
        </Reveal>
        <div className="container grid">
          <Reveal as="div" className="card">
            <h3>Address</h3>
            <p className="text-muted">[Your address]</p>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <h3>Email</h3>
            <p className="text-muted">[your email]</p>
          </Reveal>
          <Reveal as="div" className="card" delay={2}>
            <h3>Phone</h3>
            <p className="text-muted">[your phone]</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
