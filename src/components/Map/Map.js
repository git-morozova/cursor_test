import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Map.module.styl'

export function Map () {
  const mapRef = useIntersectionObserver()

  return (
    <section className={styles.mapSection}>
      <div className={`${styles.mapContainer} animate-on-scroll`} ref={mapRef}>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A55648818338&source=constructor'
          width='100%'
          height='500'
          frameBorder='0'
          title='Карта расположения'
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default Map

