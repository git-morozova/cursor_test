import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
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

  return (
    <section className="services section" ref={sectionRef}>
      <div className="services-content animate-on-scroll">
        <h2>В каких случаях поможет остеопракт</h2>
        <div className="services-text">
          <p>
            Комплексный подход и грамотное применение методик позволяет решать проблемы, 
            связанные: с болями в спине и шее, в том числе и при грыжах межпозвонковых дисков; 
            постоперационными и посттравматическими изменениями; с нарушением осанки и состояний 
            стоп; изменениями в суставах; головными болями.
          </p>
          <p>
            А также: проблемы с нарушением состояний внутренних органов (кроме: острого 
            воспаления, острой хирургической патологии, онкологических процессов), таких как: 
            нарушение функционирования кишечника (расстройства, запоры, синдром раздражённой 
            кишки); изжога; периодические боли у женщин; хронические воспаления и застойные 
            явления в малом тазу; отёки и варикозные явления на ногах.
          </p>
          <p>
            Применяется в целях профилактики и улучшения общего самочувствия.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

