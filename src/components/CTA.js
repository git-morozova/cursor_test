import React, { useEffect, useRef } from 'react';
import './CTA.css';

const CTA = () => {
  const sectionRef = useRef(null);

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

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta section" ref={sectionRef}>
      <div className="cta-content animate-on-scroll">
        <h2>Больше не нужно терпеть боль и вредные лекарства</h2>
        <p>
          Боль может наложить некоторые ограничения на вашу жизнь. Хотя лекарства могут 
          обеспечить временное облегчение, они на самом деле не решают проблему вашей боли; 
          скорее, они просто маскируют симптомы.
        </p>
        <p>
          Вместо того, чтобы маскировать симптомы, приходите на прием.
        </p>
        <button className="btn-primary" onClick={scrollToContacts}>
          Записаться на прием
        </button>
      </div>
    </section>
  );
};

export default CTA;

