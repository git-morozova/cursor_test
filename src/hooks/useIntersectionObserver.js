import { useEffect, useRef } from 'react'

export function useIntersectionObserver (options = { threshold: 0.1 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      options
    )

    const elements = elementRef.current.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      if (elementRef.current) {
        const currentElements = elementRef.current.querySelectorAll('.animate-on-scroll')
        currentElements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [options.threshold])

  return elementRef
}

