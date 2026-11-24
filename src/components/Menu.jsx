import { menu } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

const formatoPrecio = new Intl.NumberFormat('es-EC', {
  style: 'currency',
  currency: menu.moneda,
})

export default function Menu() {
  return (
    <section id="menu" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle titulo={menu.titulo} intro={menu.intro} />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {menu.productos.map((p, i) => (
            <li
              key={p.nombre}
              className="reveal flex flex-col rounded-2xl border border-cafe/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ '--delay': `${(i % 4) * 80}ms` }}
            >
              <span className="mb-3 w-fit rounded-full bg-arena px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cafe-claro">
                {p.categoria}
              </span>
              <h3 className="font-serif text-xl font-bold">{p.nombre}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cafe-claro">{p.descripcion}</p>
              <p className="mt-5 text-2xl font-semibold text-caramelo">{formatoPrecio.format(p.precio)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
