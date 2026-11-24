import { useEffect, useState } from 'react'
import { negocio, navegacion } from '../data.js'

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const [solido, setSolido] = useState(false)

  useEffect(() => {
    const alDesplazar = () => setSolido(window.scrollY > 40)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  const fondo = solido || abierto ? 'bg-crema/95 shadow-sm backdrop-blur text-cafe' : 'text-crema'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${fondo}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-serif text-xl font-bold tracking-tight">
          {negocio.nombre}
        </a>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {navegacion.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-caramelo">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {abierto && (
        <ul className="space-y-1 border-t border-cafe/10 px-5 pb-4 pt-2 md:hidden">
          {navegacion.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-lg px-3 py-2 font-medium hover:bg-arena"
                onClick={() => setAbierto(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
