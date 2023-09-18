export default function Card() {
  return (
    <div className="relative flex w-full lg:flex-row flex-col rounded-xl bg-dark-sand bg-clip-border shadow-md">
        <div className="relative m-0 lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
          <img
            src="/appImg/djenkafoArt.jpg"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="mb-4 block text-3xl font-semibold leading-snug text-dark-green">
            Djenkafo Art
          </h4>
          <p className="mb-8 block text-base font-normal leading-relaxed text-light-sand">
            Réalisation d&apos;un site vitrine pour une association cuturelle de ma région. C&apos;est ma toute 
            première réalisation, mon premier site en ligne. J&apos;ai utilisé HTML, CSS, Bootstrap et un peu de JavaScript
            pour améliorer l&apos;expérience des utilisateurs. J&apos;ai utilisé Figma pour le design qui est différent selon le format des écrans.
          </p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-sand 
              bg-dark-green rounded-lg mr-3 hover:bg-light-green focus:ring-4 focus:outline-none focus:ring-dark-green">
              Visiter le site
          </a>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-sand 
              bg-dark-green rounded-lg hover:bg-light-green focus:ring-4 focus:outline-none focus:ring-dark-green">
              Visiter le fichier GitHub
          </a>
        </div>
      </div>
  )
}
