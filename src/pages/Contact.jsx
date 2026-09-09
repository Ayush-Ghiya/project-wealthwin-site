import { useState } from 'preact/hooks';
import { Reveal } from '../components/Reveal.jsx';
import { submitToGoogleForm } from '../lib/googleForm.js';

export function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      await submitToGoogleForm({
        firstName: form['first-name'].value,
        lastName: form['last-name'].value,
        email: form.email.value,
        message: form.message.value,
        service: form.service.value,
        appointment: form.appointment.value,
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
        <div className="hero__bg" style={{ backgroundImage: "url('/assets/city-momentum.jpg')" }}></div>
        <Reveal as="h1">Let's Talk</Reveal>
        <Reveal as="p" className="quote" delay={1}>&ldquo;Your wealth deserves a strategy, not just a portfolio. Let's start with a conversation.&rdquo;</Reveal>
      </header>

      <section className="section">
        <Reveal as="form" className="form-card" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Book a Free Consultation'}
          </button>
          {status === 'sent' && <p className="form-status form-status--ok">Thanks — we'll confirm your consultation shortly.</p>}
          {status === 'error' && <p className="form-status form-status--error">Something went wrong. Please try again.</p>}
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
