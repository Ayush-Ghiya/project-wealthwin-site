import { Router } from 'preact-router';
import { useState } from 'preact/hooks';
import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { Approach } from './pages/Approach.jsx';
import { WealthManagement } from './pages/WealthManagement.jsx';
import { About } from './pages/About.jsx';
import { Insights } from './pages/Insights.jsx';
import { Contact } from './pages/Contact.jsx';

export function App() {
  const [currentUrl, setCurrentUrl] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  const handleChange = (e) => {
    setCurrentUrl(e.url);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav currentUrl={currentUrl} />
      <Router onChange={handleChange}>
        <Home path="/" />
        <Approach path="/approach" />
        <WealthManagement path="/wealth-management" />
        <About path="/about" />
        <Insights path="/insights" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </>
  );
}
