import React, { useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.pricing-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const prices = [
    {
      title: 'Сеанс остеопракта для взрослого',
      price: '6000 ₽',
      image: 'https://osteo-dok.ru/img/department/4.png'
    },
    {
      title: 'Сеанс остеопракта для детей до 1 года',
      price: '3000 ₽',
      image: 'https://osteo-dok.ru/img/department/1.png'
    },
    {
      title: 'Сеанс остеопракта для маленьких детей и ослабленных пожилых',
      price: '3000 ₽',
      image: 'https://osteo-dok.ru/img/department/2.png'
    }
  ];

  return (
    <section className="pricing section" id="pricing" ref={sectionRef}>
      <h2 className="pricing-title animate-on-scroll">Прейскурант на прием в г. Королев</h2>
      <div className="pricing-grid">
        {prices.map((item, index) => (
          <div key={index} className="pricing-card animate-on-scroll">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="price">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

