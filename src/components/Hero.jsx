import { negocio, enlaceWhatsapp } from '../data.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-cafe"
    >
      <img
        src={negocio.imagenHero}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-60"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cafe/70 via-cafe/40 to-cafe/80" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center text-crema">
        <p className="reveal mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-caramelo">
          {negocio.ciudad}
        </p>
        <h1
          className="reveal font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-7xl"
          style={{ '--delay': '100ms' }}
        >
          {negocio.nombre}
        </h1>
        <p
          className="reveal mt-5 font-serif text-xl italic sm:text-2xl"
          style={{ '--delay': '200ms' }}
        >
          {negocio.eslogan}
        </p>
        <p
          className="reveal mx-auto mt-4 max-w-xl text-base text-crema/85 sm:text-lg"
          style={{ '--delay': '300ms' }}
        >
          {negocio.subtitulo}
        </p>

        <div
          className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ '--delay': '400ms' }}
        >
          <a
            href={enlaceWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:brightness-105"
          >
            <WhatsAppIcon className="size-5" />
            Pedir por WhatsApp
          </a>
          <a
            href="#menu"
            className="rounded-full border border-crema/60 px-7 py-3.5 font-semibold transition hover:bg-crema hover:text-cafe"
          >
            Ver menú
          </a>
        </div>
      </div>
    </section>
  )
}
