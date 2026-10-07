import { Link } from 'preact-router/match';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link href="/" className="footer__wordmark">WealthWin Services</Link>
          <p>Beyond Returns. Making wealth work smarter.</p>
          <p className="footer__note">
            Have a financial question you've been putting off? You don't need to have
            everything figured out before starting a conversation.<br/><Link href="/contact">Book a Conversation</Link>
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
            <li>Email: <a href="mailto:toral_somaiya@yahoo.com">toral_somaiya@yahoo.com</a></li>
            <li>Phone: <a href="tel:+917600996888">+91 7600 996 888</a></li>
          </ul>
        </div>
        <div>
          <h4>Based In</h4>
          <p>B-807, KP Epitome, Near DAV School, Near Lake, Makarba, Ahmedabad 380051</p>
        </div>
      </div>
      <div className="footer__bottom">&copy; 2026 WealthWin. For education and information only.</div>
    </footer>
  );
}
