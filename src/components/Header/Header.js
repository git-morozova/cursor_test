import React, { useState, useEffect } from 'react'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import styles from './Header.module.styl'

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollToSection = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  const handleAppointmentClick = () => {
    scrollToSection('contacts')
  }

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <span>+7 (977) 309-90-31</span>
          <span>г. Королев, ул. Калининградская, 12</span>
          <span>г. Москва – выезд на дом</span>
        </div>
      </div>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>Остеопракт</div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
            <a href='#osteopraktika' onClick={(e) => handleNavClick(e, 'osteopraktika')}>Остеопрактика</a>
            <a href='#pricing' onClick={(e) => handleNavClick(e, 'pricing')}>Цены</a>
            <a href='#about-doctor' onClick={(e) => handleNavClick(e, 'about-doctor')}>Обо мне</a>
            <a href='#reviews' onClick={(e) => handleNavClick(e, 'reviews')}>Отзывы</a>
            <a href='#contacts' onClick={(e) => handleNavClick(e, 'contacts')}>Контакты</a>
            <button className={styles.btnAppointment} onClick={handleAppointmentClick}>
              Записаться на прием
            </button>
            <div className={styles.socialIcons}>
              <a href='https://vk.com' target='_blank' rel='noopener noreferrer' aria-label='VK'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12.785 16.241s.287-.033.434-.2c.135-.15.131-.433.131-.433s-.02-1.3.58-1.492c.592-.19 1.35.95 2.155 1.37.605.315 1.064.246 1.064.246l2.145-.03s1.118-.07.588-.95c-.044-.07-.315-.65-1.33-1.84-.92-1.18-1.28-1.48.5-2.27.24-.11 1.07-.9 1.07-1.82s-.11-1.31-.78-1.31c-.67 0-1.52.05-1.88.24-.25.13-.44.42-.33.44.14.02.45.09.62.33.21.3.21.97.21.97s.12 1.78-.28 2.01c-.28.15-.66-.16-1.48-1.54-.42-.7-.74-1.47-.74-1.47s-.06-.15-.17-.23c-.13-.09-.31-.12-.31-.12l-1.6.02s-.36.01-.49.16c-.12.13-.01.4-.01.4s1.58 3.72 3.37 5.6.82.82 1.15 1.08 1.28 1.66.09.42-.09.63-.09.63l-1.45.07z'/>
                </svg>
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                </svg>
              </a>
            </div>
          </nav>
          <button className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu} aria-label='Меню'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header

