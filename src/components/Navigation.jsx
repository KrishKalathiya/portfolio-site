import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navigation() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setScrolledToTop(true);
      } else {
        setScrolledToTop(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('blur');
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const headerClass = `${scrolledToTop ? '' : 'scrolled'} ${scrollDirection === 'down' ? 'hidden' : ''}`;

  return (
    <>
      <a className="skip-to-content" href="#content">Skip to content</a>
      
      <header id="header" className={headerClass}>
        <nav>
          <div className="logo">
            <Link to="/" aria-label="home">
              <svg width="42" height="42" viewBox="0 0 42 42">
                <polygon points="21 1 40 12 40 31 21 41 2 31 2 12" fill="none" stroke="currentColor" strokeWidth="2"/>
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto Mono" fontSize="20" fill="currentColor">Y</text>
              </svg>
            </Link>
          </div>
          <div className="nav-links">
            <ol>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/professional-development">Development</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ol>
            <div className="resume-button-container">
              <a href="#" className="resume-button">Resume</a>
            </div>
          </div>
          <div className={`menu-button ${menuOpen ? 'open' : ''}`} id="menuButton" onClick={toggleMenu}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      <aside className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <nav>
          <ol>
            <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/work" onClick={closeMenu}>Work</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/professional-development" onClick={closeMenu}>Development</Link></li>
            <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
          </ol>
          <a href="#" className="resume-button">Resume</a>
        </nav>
      </aside>
    </>
  );
}

export default Navigation;
