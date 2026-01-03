import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './About.module.styl'

export function About () {
  const sectionRef = useIntersectionObserver()

  return (
    <section className={`${styles.about} section`} id='osteopraktika' ref={sectionRef}>
      <div className={styles.aboutContent}>
        <div className={`${styles.aboutText} animate-on-scroll`}>
          <h2>Кто такой остеопракт</h2>
          <p>
            Недостаточная информированность по поводу остеопрактики порождает массу
            противоречивых суждений и мифов. Не верьте слухам, проведите собственное
            исследование, поспрашивайте отзывы у людей, которые были на приеме. Или
            приходите на консультацию, я подробно отвечу на ваши вопросы. Остеопракт
            не массажист и не заклинатель духов, это просто грамотный специалист с
            глубокими знаниями об анатомии человека.
          </p>
          <p>
            Основной инструмент работы остеопракта — его руки. Максимально развив их
            чувствительность, с помощью рук он чувствует любые микродвижения в теле и
            определяет причину заболевания.
          </p>
        </div>
        <div className={`${styles.aboutImages} animate-on-scroll`}>
          <img src='https://osteo-dok.ru/img/about/4.png' alt='Остеопрактика' />
          <img src='https://osteo-dok.ru/img/about/1.png' alt='Остеопрактика' />
          <img src='https://osteo-dok.ru/img/about/2.png' alt='Остеопрактика' />
          <img src='https://osteo-dok.ru/img/about/3.png' alt='Остеопрактика' />
        </div>
        <div className={`${styles.aboutWhy} animate-on-scroll`}>
          <h2>Почему именно остеопрактика</h2>
          <p>
            Существует большое количество признанных и эффективных техник лечения руками —
            массаж, мануальная терапия, костоправство, хиропрактика. Остеопрактика
            кардинально отличается от них тем, что основывается на комплексном подходе к
            организму как к единому целому.
          </p>
          <p>
            Остеопракт лечит не болезнь, а человека в целом. Он борется не с отдельными
            симптомами, а ищет и устраняет причины болезни.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

