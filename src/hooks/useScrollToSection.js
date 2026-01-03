import { useCallback } from 'react'

export function useScrollToSection () {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return scrollToSection
}

