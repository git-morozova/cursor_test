import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import styles from './Hero.module.styl'

export function Hero () {
  const sectionRef = useIntersectionObserver()
  const scrollToContacts = useScrollToSection()

  const handleClick = () => {
    scrollToContacts('contacts')
  }

  return (
    <section className={styles.hero} ref={sectionRef}>
      <div className={styles.heroImage}>
        <img
          src='https://osteo-dok.ru/img/about/banner2.png'
          alt='Остеопракт Евгений Шемякин'
        />
        <div className={styles.heroOverlay}>
          <div className={`${styles.heroContent} animate-on-scroll`}>
            <h1>Остеопракт<br />Евгений Шемякин</h1>
            <p className={styles.heroSubtitle}>
              Избавлю от болей, поставлю Ваши органы «на место». <br />
              Опыт в оздоровлении – более 20 лет
            </p>
            <button className={styles.btnPrimary} onClick={handleClick}>
              Запись на прием
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

