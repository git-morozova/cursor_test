import React, { useEffect, useRef } from 'react';
import './AboutDoctor.css';

const AboutDoctor = () => {
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
    <section className="about-doctor section" id="about-doctor" ref={sectionRef}>
      <div className="about-doctor-content animate-on-scroll">
        <h2>Евгений Шемякин: 20 лет опыта</h2>
        <p>
          Образование среднее специальное «Лечебное дело». Окончил в 2003 году 
          «Московский медицинский колледж при Центральной Клинической Больнице им. 
          Н. А. Семашко МПС РФ». С 2003 постоянно работал в медучреждениях и 
          реабилитационных центрах города Москвы, специализирующихся на реабилитации 
          и лечении заболеваний опорно-двигательного аппарата, таких как «Центр Дикуля», 
          «Свободное движение», «Да», «Поликлиника Центросоюза» и других. Пять лет совмещал 
          с работой в отделении МРТ. Обучался в Школе практической остеопатии А. Смирнова 
          «Проект Остеопрактика». В настоящее время специализируется на остеопрактике, 
          висцеральных техниках (висцеральный массаж, висцеральная хиропрактика), прикладной 
          кинезиологии (мануально-мышечное тестирование).
        </p>
      </div>
    </section>
  );
};

export default AboutDoctor;

