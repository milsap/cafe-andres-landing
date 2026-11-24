import { galeria } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

export default function Gallery() {
  return (
    <section id="galeria" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle titulo={galeria.titulo} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galeria.imagenes.map((img, i) => (
            <li
              key={img.src}
              className="reveal group overflow-hidden rounded-2xl bg-arena"
              style={{ '--delay': `${(i % 3) * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
