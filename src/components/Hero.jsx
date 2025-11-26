import { useEffect, useRef } from 'react';
import { heroData } from '../data/content';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in');
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, i * 100);
      });
    }
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <h1 className="intro-greeting fade-in">Hi, my name is</h1>
      <h2 className="big-heading fade-in">{heroData.name}.</h2>
      <h3 className="big-heading subtitle-heading fade-in">
        {heroData.subtitle}
      </h3>
      <p className="hero-description fade-in">
        {heroData.description}
      </p>
      <a href="#projects" className="cta-button fade-in">{heroData.ctaText}</a>
    </section>
  );
}


export default Hero;
