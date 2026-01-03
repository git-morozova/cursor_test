import React, { useState, useEffect, useRef } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const certificates = [
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg'
  ];

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="certificates section" ref={sectionRef}>
      <h2 className="certificates-title animate-on-scroll">Сертификаты</h2>
      <div className="certificates-carousel animate-on-scroll">
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Предыдущий">
          ‹
        </button>
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((cert, index) => (
              <div key={index} className="carousel-slide">
                <img src={cert} alt={`Сертификат ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn next" onClick={nextSlide} aria-label="Следующий">
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;

