import React, { useEffect, useRef } from 'react';
import './Contacts.css';

const Contacts = () => {
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
    <section className="contacts section" id="contacts" ref={sectionRef}>
      <div className="contacts-content animate-on-scroll">
        <h2>Запись на прием к специалисту</h2>
        <div className="contacts-info">
          <div className="contact-item">
            <strong>📍 г. Королев, ул. Калининградская, 12</strong>
          </div>
          <div className="contact-item">
            <strong>📍 г. Москва – выезд на дом</strong>
          </div>
          <div className="contact-item">
            <strong>📱 Пишите:</strong>
            <a href="tel:+79773099031" className="phone-link">+7 (977) 309-90-31</a>
          </div>
        </div>
        <div className="contacts-warning">
          <p>
            <strong>Внимание!</strong> Частое общение со «специалистами из банков», 
            «капитанами полиции» и прочими замечательными людьми заставляет обратиться 
            с просьбой не звонить по телефону и не отправлять sms.
          </p>
          <p>
            <strong>Пишите, пожалуйста, в мессенджеры</strong> – так ваша заявка точно не пропадет.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

