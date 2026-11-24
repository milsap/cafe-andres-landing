import { negocio, redes } from '../data.js'
import { iconosRedes } from './Icons.jsx'

const anio = new Date().getFullYear()

export default function Footer() {
  const visibles = redes.filter((r) => r.url)
  return (
    <footer className="bg-[#2e1b13] px-5 py-12 text-crema/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-2xl font-bold text-crema">{negocio.nombre}</p>
          <p className="mt-1 text-sm">{negocio.ciudad}</p>
        </div>

        <ul className="flex gap-3">
          {visibles.map((r) => {
            const Icono = iconosRedes[r.icono]
            return (
              <li key={r.nombre}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.nombre}
                  className="flex size-11 items-center justify-center rounded-full bg-crema/10 transition hover:bg-caramelo hover:text-cafe"
                >
                  {Icono && <Icono />}
                </a>
              </li>
            )
          })}
        </ul>

        <p className="text-xs">
          © {anio} {negocio.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
