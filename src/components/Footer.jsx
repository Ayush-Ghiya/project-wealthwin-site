import { Link } from 'preact-router/match';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src="/assets/wealthwin-logo.png" alt="WealthWin" className="footer__logo" />
          <p>Beyond Returns. Making wealth work smarter.</p>
          <p className="footer__note">
            Have a financial question you've been putting off? You don't need to have
            everything figured out before starting a conversation.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul className="footer__links">
            <li><Link href="/approach">Our Approach</Link></li>
            <li><Link href="/wealth-management">Wealth Management</Link></li>
            <li><Link href="/insights">Insights &amp; Learning</Link></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul className="footer__links">
            <li><Link href="/about">About Toral</Link></li>
            <li><Link href="/contact">Book a Conversation</Link></li>
            <li><a href="mailto:hello@wealthwin.in">hello@wealthwin.in</a></li>
            <li>Phone: [your phone]</li>
          </ul>
        </div>
        <div>
          <h4>Based In</h4>
          <p>Mumbai &middot; India</p>
        </div>
      </div>
      <div className="footer__bottom">&copy; 2026 WealthWin. For education and information only.</div>
    </footer>
  );
}
