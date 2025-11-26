import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Navigation() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/professional-development">Development</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ol>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
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
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/work" onClick={closeMenu}>Work</Link></li>
            <li><Link to="/professional-development" onClick={closeMenu}>Development</Link></li>
            <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
          </ol>
          <a href="#" className="resume-button">Resume</a>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle mobile" 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                Switch to Light Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                Switch to Dark Mode
              </>
            )}
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Navigation;
