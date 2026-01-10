import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider mb-6 sm:mb-8 text-black">
              MODE
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider text-black">
              CIRCULAIRE
            </h2>
          </div>
          <div className="w-24 sm:w-32 h-px bg-black mx-auto mb-12 sm:mb-16"></div>
          <p className="text-base sm:text-lg tracking-wide text-black/70 max-w-2xl mx-auto leading-relaxed px-4">
            Une approche innovante de la mode durable, 
            où chaque pièce raconte une histoire de transformation et de conscience environnementale.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Fournisseurs */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-rose-quartz mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wider uppercase mb-4 text-black">
                Fournisseurs
              </h3>
              <p className="text-black/70 leading-relaxed">
                Partenaires éthiques et certifiés, 
                sélectionnés pour leur engagement envers la durabilité 
                et les pratiques responsables.
              </p>
            </div>

            {/* Trésorier */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cameo-green mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wider uppercase mb-4 text-black">
                Trésorier
              </h3>
              <p className="text-black/70 leading-relaxed">
                Gestion transparente des ressources, 
                garantissant une traçabilité complète 
                de la chaîne de valeur.
              </p>
            </div>

            {/* Production */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-summer-sand mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light tracking-wider uppercase mb-4 text-black">
                Production
              </h3>
              <p className="text-black/70 leading-relaxed">
                Fabrication locale et artisanale, 
                respectueuse de l'environnement 
                et des savoir-faire traditionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
