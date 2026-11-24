// ─────────────────────────────────────────────────────────────
//  data.js — TODOS los datos del negocio viven aquí.
//  Para reutilizar la plantilla con otro negocio, cambia solo
//  este archivo (textos, precios, fotos, horarios, redes…).
// ─────────────────────────────────────────────────────────────

const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const negocio = {
  nombre: 'Café Andrés',
  eslogan: 'Café manabita, recién tostado y servido con calma.',
  subtitulo:
    'Granos de las montañas de Manabí, pan del día y el sabor de casa en el centro de Portoviejo.',
  ciudad: 'Portoviejo, Ecuador',
  // Número en formato internacional, solo dígitos (ficticio).
  whatsapp: '593999999999',
  mensajeWhatsapp: '¡Hola, Café Andrés! Quisiera hacer un pedido 😊',
  imagenHero: unsplash('1495474472287-4d71bcdd2085', 1600),
}

export const seo = {
  title: 'Café Andrés | Cafetería en Portoviejo, Ecuador',
  description:
    'Café Andrés: cafetería en Portoviejo con café manabita recién tostado, bolones, tostadas y postres caseros. Pide por WhatsApp.',
  idioma: 'es',
}

export const navegacion = [
  { id: 'menu', label: 'Menú' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'galeria', label: 'Galería' },
  { id: 'ubicacion', label: 'Ubicación' },
]

export const menu = {
  titulo: 'Nuestro menú',
  intro: 'Preparado al momento, con ingredientes de la zona.',
  moneda: 'USD',
  productos: [
    {
      nombre: 'Espresso',
      descripcion: 'Doble carga de café manabita, intenso y con crema dorada.',
      precio: 1.75,
      categoria: 'Café',
    },
    {
      nombre: 'Capuchino',
      descripcion: 'Espresso, leche vaporizada y espuma sedosa con canela.',
      precio: 2.5,
      categoria: 'Café',
    },
    {
      nombre: 'Café filtrado de Jipijapa',
      descripcion: 'Método V60, notas a panela y cacao. Taza de 300 ml.',
      precio: 2.75,
      categoria: 'Café',
    },
    {
      nombre: 'Bolón de verde',
      descripcion: 'Verde majado con queso o chicharrón, con huevo frito.',
      precio: 3.5,
      categoria: 'Desayunos',
    },
    {
      nombre: 'Tostada de maní',
      descripcion: 'Pan de casa con salsa de maní manabita y queso fresco.',
      precio: 2.25,
      categoria: 'Desayunos',
    },
    {
      nombre: 'Empanada de viento',
      descripcion: 'Crujiente, rellena de queso y espolvoreada con azúcar.',
      precio: 1.5,
      categoria: 'Bocaditos',
    },
    {
      nombre: 'Torta de chocolate',
      descripcion: 'Bizcocho húmedo de cacao fino de aroma ecuatoriano.',
      precio: 3.25,
      categoria: 'Postres',
    },
    {
      nombre: 'Jugo de maracuyá',
      descripcion: 'Fruta natural, bien frío. Con o sin azúcar.',
      precio: 2.0,
      categoria: 'Bebidas',
    },
  ],
}

export const nosotros = {
  titulo: 'Sobre nosotros',
  parrafos: [
    'Café Andrés nació en 2019 como un pequeño mostrador familiar en Portoviejo. Hoy seguimos igual de pequeños a propósito: tostamos en lotes cortos y conocemos a nuestros clientes por su nombre.',
    'Trabajamos con caficultores de las montañas de Manabí y preparamos cada taza con calma, porque el buen café no se apura.',
  ],
  imagen: unsplash('1554118811-1e0d58224f24', 1000),
  destacados: [
    { valor: '100 %', texto: 'café manabita' },
    { valor: 'Diario', texto: 'pan horneado en casa' },
  ],
}

export const galeria = {
  titulo: 'Galería',
  imagenes: [
    { src: unsplash('1509042239860-f550ce710b93'), alt: 'Latte con arte en la espuma' },
    { src: unsplash('1501339847302-ac426a4a7cbb'), alt: 'Interior acogedor de la cafetería' },
    { src: unsplash('1447933601403-0c6688de566e'), alt: 'Granos de café recién tostados' },
    { src: unsplash('1442512595331-e89e73853f31'), alt: 'Taza de café sobre mesa de madera' },
    { src: unsplash('1453614512568-c4024d13c247'), alt: 'Barra de la cafetería con clientes' },
    { src: unsplash('1511920170033-f8396924c348'), alt: 'Café servido en taza blanca' },
  ],
}

export const ubicacion = {
  titulo: 'Horarios y ubicación',
  direccion: 'Calle Olmedo y Av. Pedro Gual, Portoviejo, Manabí',
  horarios: [
    { dias: 'Lunes a viernes', horas: '07:00 – 20:00' },
    { dias: 'Sábado', horas: '08:00 – 21:00' },
    { dias: 'Domingo', horas: '08:00 – 14:00' },
  ],
  // Google Maps → Compartir → Insertar un mapa → copia el "src" del iframe.
  mapaEmbed:
    'https://www.google.com/maps?q=Parque+Central,+Portoviejo,+Ecuador&z=16&output=embed',
  enlaceMapa: 'https://maps.google.com/?q=Parque+Central,+Portoviejo,+Ecuador',
}

// Deja la URL vacía ('') para ocultar una red.
export const redes = [
  { nombre: 'Instagram', url: 'https://instagram.com/', icono: 'instagram' },
  { nombre: 'Facebook', url: 'https://facebook.com/', icono: 'facebook' },
  { nombre: 'TikTok', url: 'https://tiktok.com/', icono: 'tiktok' },
]

export const enlaceWhatsapp = (mensaje = negocio.mensajeWhatsapp) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`
