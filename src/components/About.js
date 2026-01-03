import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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
    <section className="about section" id="osteopraktika" ref={sectionRef}>
      <div className="about-content">
        <div className="about-text animate-on-scroll">
          <h2>Кто такой остеопракт</h2>
          <p>
            Недостаточная информированность по поводу остеопрактики порождает массу 
            противоречивых суждений и мифов. Не верьте слухам, проведите собственное 
            исследование, поспрашивайте отзывы у людей, которые были на приеме. Или 
            приходите на консультацию, я подробно отвечу на ваши вопросы. Остеопракт 
            не массажист и не заклинатель духов, это просто грамотный специалист с 
            глубокими знаниями об анатомии человека.
          </p>
          <p>
            Основной инструмент работы остеопракта — его руки. Максимально развив их 
            чувствительность, с помощью рук он чувствует любые микродвижения в теле и 
            определяет причину заболевания.
          </p>
        </div>
        <div className="about-images animate-on-scroll">
          <img src="https://osteo-dok.ru/img/about/4.png" alt="Остеопрактика" />
          <img src="https://osteo-dok.ru/img/about/1.png" alt="Остеопрактика" />
          <img src="https://osteo-dok.ru/img/about/2.png" alt="Остеопрактика" />
          <img src="https://osteo-dok.ru/img/about/3.png" alt="Остеопрактика" />
        </div>
        <div className="about-why animate-on-scroll">
          <h2>Почему именно остеопрактика</h2>
          <p>
            Существует большое количество признанных и эффективных техник лечения руками — 
            массаж, мануальная терапия, костоправство, хиропрактика. Остеопрактика 
            кардинально отличается от них тем, что основывается на комплексном подходе к 
            организму как к единому целому.
          </p>
          <p>
            Остеопракт лечит не болезнь, а человека в целом. Он борется не с отдельными 
            симптомами, а ищет и устраняет причины болезни.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

