import React, { useState, useEffect, useRef } from 'react';
import './BeforeAfter.css';

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  // Примеры пар до/после (в реальном проекте здесь будут реальные изображения)
  const beforeAfterPairs = [
    {
      before: 'https://via.placeholder.com/400x300?text=До+лечения+1',
      after: 'https://via.placeholder.com/400x300?text=После+лечения+1'
    },
    {
      before: 'https://via.placeholder.com/400x300?text=До+лечения+2',
      after: 'https://via.placeholder.com/400x300?text=После+лечения+2'
    },
    {
      before: 'https://via.placeholder.com/400x300?text=До+лечения+3',
      after: 'https://via.placeholder.com/400x300?text=После+лечения+3'
    }
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);
  };

  return (
    <section className="before-after section" ref={sectionRef}>
      <h2 className="before-after-title animate-on-scroll">Результаты лечения</h2>
      <div className="before-after-carousel animate-on-scroll">
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Предыдущий">
          ‹
        </button>
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {beforeAfterPairs.map((pair, index) => (
              <div key={index} className="carousel-slide">
                <div className="before-after-pair">
                  <div className="before-after-item">
                    <div className="label">До</div>
                    <img src={pair.before} alt={`До лечения ${index + 1}`} />
                  </div>
                  <div className="before-after-item">
                    <div className="label">После</div>
                    <img src={pair.after} alt={`После лечения ${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn next" onClick={nextSlide} aria-label="Следующий">
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {beforeAfterPairs.map((_, index) => (
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

export default BeforeAfter;

