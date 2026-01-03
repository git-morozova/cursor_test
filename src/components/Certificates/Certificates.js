import React, { useState, useMemo, useCallback } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Certificates.module.styl'

export function Certificates () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useIntersectionObserver()

  const certificates = useMemo(() => [
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg',
    'https://osteo-dok.ru/img/experts/3.jpg'
  ], [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }, [certificates.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }, [certificates.length])

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  return (
    <section className={`${styles.certificates} section`} ref={sectionRef}>
      <h2 className={`${styles.certificatesTitle} animate-on-scroll`}>Сертификаты</h2>
      <div className={`${styles.certificatesCarousel} animate-on-scroll`}>
        <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevSlide} aria-label='Предыдущий'>
          ‹
        </button>
        <div className={styles.carouselContainer}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((cert, index) => (
              <div key={index} className={styles.carouselSlide}>
                <img src={cert} alt={`Сертификат ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextSlide} aria-label='Следующий'>
          ›
        </button>
      </div>
      <div className={styles.carouselDots}>
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates

