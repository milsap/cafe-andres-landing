import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { seo, negocio } from './src/data.js'

// Inyecta el SEO de data.js en index.html al compilar (title y meta en el HTML estático).
const seoDesdeData = () => ({
  name: 'seo-desde-data',
  transformIndexHtml: (html) =>
    html
      .replaceAll('%SEO_TITLE%', seo.title)
      .replaceAll('%SEO_DESCRIPTION%', seo.description)
      .replaceAll('%SEO_LANG%', seo.idioma)
      .replaceAll('%SEO_IMAGE%', negocio.imagenHero),
})

export default defineConfig({
  plugins: [react(), tailwindcss(), seoDesdeData()],
})
