import { useEffect } from 'react'

// Añade la clase "visible" a todo elemento .reveal cuando entra en pantalla.
export function useReveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible')
            observer.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    elementos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
