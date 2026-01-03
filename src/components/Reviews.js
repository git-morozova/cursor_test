import React, { useEffect, useRef } from 'react';
import './Reviews.css';

const Reviews = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.review-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const reviews = [
    {
      name: 'Анна',
      text: 'Очень благодарна Евгению за помощь! После первого сеанса почувствовала значительное облегчение. Профессионал своего дела!'
    },
    {
      name: 'Дмитрий',
      text: 'Долго мучился с болями в спине. После курса лечения у Евгения все прошло. Рекомендую!'
    },
    {
      name: 'Мария',
      text: 'Привела ребенка на прием. Врач очень внимательный, аккуратный. Ребенок не боялся, все прошло отлично.'
    },
    {
      name: 'Сергей',
      text: 'Отличный специалист! Помог решить проблему, с которой не справлялись другие врачи. Спасибо большое!'
    }
  ];

  return (
    <section className="reviews section" id="reviews" ref={sectionRef}>
      <h2 className="reviews-title animate-on-scroll">Отзывы</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card animate-on-scroll">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

