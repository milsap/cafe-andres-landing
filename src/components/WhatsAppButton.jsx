import { enlaceWhatsapp } from '../data.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function WhatsAppButton() {
  return (
    <a
      href={enlaceWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/25 transition hover:scale-110 sm:bottom-7 sm:right-7 sm:size-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30 motion-reduce:hidden" />
      <WhatsAppIcon className="relative size-7 sm:size-8" />
    </a>
  )
}
