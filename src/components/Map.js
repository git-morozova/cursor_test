import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section className="map-section">
      <div className="map-container animate-on-scroll" ref={mapRef}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A55648818338&source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
          title="Карта расположения"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Map;

