import React, { useMemo } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Features.module.styl'

export function Features () {
  const sectionRef = useIntersectionObserver()

  const features = useMemo(() => [
    {
      icon: '🛡️',
      title: 'Безопасно',
      text: 'Главный принцип остеопрактики — помоги, не навреди. Вот почему этот метод лечения показан даже самым маленьким пациентам.'
    },
    {
      icon: '⚡',
      title: 'Эффективно',
      text: 'Остеопрактика эффективна в решении множества проблем, связанных со здоровьем. Результат остеопрактической коррекции уже после 1 сеанса.'
    },
    {
      icon: '👤',
      title: 'Индивидуально',
      text: 'Во время первого визита специалист проводит опрос и осмотр для выбора оптимальной техники коррекции Вашей проблемы.'
    }
  ], [])

  return (
    <section className={`${styles.features} section`} ref={sectionRef}>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={`${styles.featureCard} animate-on-scroll`}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

