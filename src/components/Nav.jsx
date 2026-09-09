import { useEffect, useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/approach', label: 'Our Approach' },
  { href: '/wealth-management', label: 'Wealth Management' },
  { href: '/about', label: 'About Toral' },
  { href: '/insights', label: 'Insights & Learning' },
];

export function Nav({ currentUrl }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [currentUrl]);

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          <img src="/assets/wealthwin-logo.png" alt="WealthWin" />
        </Link>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} activeClassName="active-link" aria-current={currentUrl === l.href ? 'page' : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav__cta btn--arrow">Let's Talk</Link>
      </div>
    </nav>
  );
}
