import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './AboutDoctor.module.styl'

export function AboutDoctor () {
  const sectionRef = useIntersectionObserver()

  return (
    <section className={`${styles.aboutDoctor} section`} id='about-doctor' ref={sectionRef}>
      <div className={`${styles.aboutDoctorContent} animate-on-scroll`}>
        <h2>Евгений Шемякин: 20 лет опыта</h2>
        <p>
          Образование среднее специальное «Лечебное дело». Окончил в 2003 году
          «Московский медицинский колледж при Центральной Клинической Больнице им.
          Н. А. Семашко МПС РФ». С 2003 постоянно работал в медучреждениях и
          реабилитационных центрах города Москвы, специализирующихся на реабилитации
          и лечении заболеваний опорно-двигательного аппарата, таких как «Центр Дикуля»,
          «Свободное движение», «Да», «Поликлиника Центросоюза» и других. Пять лет совмещал
          с работой в отделении МРТ. Обучался в Школе практической остеопатии А. Смирнова
          «Проект Остеопрактика». В настоящее время специализируется на остеопрактике,
          висцеральных техниках (висцеральный массаж, висцеральная хиропрактика), прикладной
          кинезиологии (мануально-мышечное тестирование).
        </p>
      </div>
    </section>
  )
}

export default AboutDoctor

