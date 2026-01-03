import React, { useMemo } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Pricing.module.styl'

export function Pricing () {
  const sectionRef = useIntersectionObserver()

  const prices = useMemo(() => [
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
  ], [])

  return (
    <section className={`${styles.pricing} section`} id='pricing' ref={sectionRef}>
      <h2 className={`${styles.pricingTitle} animate-on-scroll`}>Прейскурант на прием в г. Королев</h2>
      <div className={styles.pricingGrid}>
        {prices.map((item, index) => (
          <div key={index} className={`${styles.pricingCard} animate-on-scroll`}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className={styles.price}>{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing

