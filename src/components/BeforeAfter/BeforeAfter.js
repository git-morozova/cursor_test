import React, { useState, useMemo, useCallback } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './BeforeAfter.module.styl'

export function BeforeAfter () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useIntersectionObserver()

  const beforeAfterPairs = useMemo(() => [
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
  ], [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length)
  }, [beforeAfterPairs.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
  }, [beforeAfterPairs.length])

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  return (
    <section className={`${styles.beforeAfter} section`} ref={sectionRef}>
      <h2 className={`${styles.beforeAfterTitle} animate-on-scroll`}>Результаты лечения</h2>
      <div className={`${styles.beforeAfterCarousel} animate-on-scroll`}>
        <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevSlide} aria-label='Предыдущий'>
          ‹
        </button>
        <div className={styles.carouselContainer}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {beforeAfterPairs.map((pair, index) => (
              <div key={index} className={styles.carouselSlide}>
                <div className={styles.beforeAfterPair}>
                  <div className={styles.beforeAfterItem}>
                    <div className={styles.label}>До</div>
                    <img src={pair.before} alt={`До лечения ${index + 1}`} />
                  </div>
                  <div className={styles.beforeAfterItem}>
                    <div className={styles.label}>После</div>
                    <img src={pair.after} alt={`После лечения ${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextSlide} aria-label='Следующий'>
          ›
        </button>
      </div>
      <div className={styles.carouselDots}>
        {beforeAfterPairs.map((_, index) => (
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

export default BeforeAfter

