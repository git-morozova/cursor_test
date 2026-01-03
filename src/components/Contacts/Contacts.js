import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Contacts.module.styl'

export function Contacts () {
  const sectionRef = useIntersectionObserver()

  return (
    <section className={`${styles.contacts} section`} id='contacts' ref={sectionRef}>
      <div className={`${styles.contactsContent} animate-on-scroll`}>
        <h2>Запись на прием к специалисту</h2>
        <div className={styles.contactsInfo}>
          <div className={styles.contactItem}>
            <strong>📍 г. Королев, ул. Калининградская, 12</strong>
          </div>
          <div className={styles.contactItem}>
            <strong>📍 г. Москва – выезд на дом</strong>
          </div>
          <div className={styles.contactItem}>
            <strong>📱 Пишите:</strong>
            <a href='tel:+79773099031' className={styles.phoneLink}>+7 (977) 309-90-31</a>
          </div>
        </div>
        <div className={styles.contactsWarning}>
          <p>
            <strong>Внимание!</strong> Частое общение со «специалистами из банков»,
            «капитанами полиции» и прочими замечательными людьми заставляет обратиться
            с просьбой не звонить по телефону и не отправлять sms.
          </p>
          <p>
            <strong>Пишите, пожалуйста, в мессенджеры</strong> – так ваша заявка точно не пропадет.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contacts

