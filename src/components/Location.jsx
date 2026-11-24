import { ubicacion, negocio } from '../data.js'
import { ClockIcon, PinIcon } from './Icons.jsx'
import SectionTitle from './SectionTitle.jsx'

export default function Location() {
  return (
    <section id="ubicacion" className="bg-cafe px-5 py-20 text-crema sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle titulo={ubicacion.titulo} claro />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-cafe-claro/40 p-6">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold">
                <ClockIcon className="size-6 text-caramelo" /> Horarios
              </h3>
              <ul className="mt-4 divide-y divide-crema/15">
                {ubicacion.horarios.map((h) => (
                  <li key={h.dias} className="flex justify-between gap-4 py-3">
                    <span>{h.dias}</span>
                    <span className="font-semibold">{h.horas}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-cafe-claro/40 p-6">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold">
                <PinIcon className="size-6 text-caramelo" /> Dirección
              </h3>
              <p className="mt-3 text-crema/85">{ubicacion.direccion}</p>
              <a
                href={ubicacion.enlaceMapa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-caramelo underline-offset-4 hover:underline"
              >
                Cómo llegar →
              </a>
            </div>
          </div>

          <div
            className="reveal min-h-80 overflow-hidden rounded-2xl shadow-xl lg:col-span-3"
            style={{ '--delay': '150ms' }}
          >
            <iframe
              title={`Mapa de ${negocio.nombre}`}
              src={ubicacion.mapaEmbed}
              className="size-full min-h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
