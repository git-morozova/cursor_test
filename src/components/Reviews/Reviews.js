import React, { useMemo } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Reviews.module.styl'

export function Reviews () {
  const sectionRef = useIntersectionObserver()

  const reviews = useMemo(() => [
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
  ], [])

  return (
    <section className={`${styles.reviews} section`} id='reviews' ref={sectionRef}>
      <h2 className={`${styles.reviewsTitle} animate-on-scroll`}>Отзывы</h2>
      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={`${styles.reviewCard} animate-on-scroll`}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewText}>"{review.text}"</p>
            <p className={styles.reviewName}>— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews

