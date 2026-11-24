export default function SectionTitle({ titulo, intro, claro = false }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`font-serif text-4xl font-bold sm:text-5xl ${claro ? 'text-crema' : 'text-cafe'}`}>
        {titulo}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-caramelo" />
      {intro && (
        <p className={`mt-5 text-lg ${claro ? 'text-crema/80' : 'text-cafe-claro'}`}>{intro}</p>
      )}
    </div>
  )
}
