import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import styles from './CTA.module.styl'

export function CTA () {
  const sectionRef = useIntersectionObserver()
  const scrollToContacts = useScrollToSection()

  const handleClick = () => {
    scrollToContacts('contacts')
  }

  return (
    <section className={`${styles.cta} section`} ref={sectionRef}>
      <div className={`${styles.ctaContent} animate-on-scroll`}>
        <h2>Больше не нужно терпеть боль и вредные лекарства</h2>
        <p>
          Боль может наложить некоторые ограничения на вашу жизнь. Хотя лекарства могут
          обеспечить временное облегчение, они на самом деле не решают проблему вашей боли;
          скорее, они просто маскируют симптомы.
        </p>
        <p>
          Вместо того, чтобы маскировать симптомы, приходите на прием.
        </p>
        <button className={styles.btnPrimary} onClick={handleClick}>
          Записаться на прием
        </button>
      </div>
    </section>
  )
}

export default CTA

