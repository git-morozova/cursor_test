import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-image">
        <img 
          src="https://osteo-dok.ru/img/about/banner2.png" 
          alt="Остеопракт Евгений Шемякин"
        />
        <div className="hero-overlay">
          <div className="hero-content animate-on-scroll">
            <h1>Остеопракт Евгений Шемякин</h1>
            <p className="hero-subtitle">
              Избавлю от болей, поставлю Ваши органы «на место». 
              Опыт в оздоровлении – более 20 лет
            </p>
            <button className="btn-primary" onClick={scrollToContacts}>
              Запись на прием
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

