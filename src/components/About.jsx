import { nosotros } from '../data.js'

export default function About() {
  return (
    <section id="nosotros" className="bg-arena px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="reveal overflow-hidden rounded-3xl shadow-xl">
          <img
            src={nosotros.imagen}
            alt="Interior de la cafetería"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="reveal" style={{ '--delay': '150ms' }}>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">{nosotros.titulo}</h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-caramelo" />
          {nosotros.parrafos.map((texto) => (
            <p key={texto.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-cafe-claro">
              {texto}
            </p>
          ))}
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {nosotros.destacados.map((d) => (
              <div key={d.texto} className="rounded-2xl bg-crema p-5">
                <dt className="font-serif text-3xl font-bold text-oliva">{d.valor}</dt>
                <dd className="mt-1 text-sm text-cafe-claro">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
