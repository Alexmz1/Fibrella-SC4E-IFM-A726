import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ProductDetailPage({ params }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image Section */}
      <section className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-rose-quartz/20 mb-8 sm:mb-12">
            {/* Placeholder pour image hero */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                  <svg className="w-16 h-16 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-black/40 tracking-wider">IMAGE HERO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-4 sm:mb-6 text-black uppercase">
            Blouse Fibrella SC4E-IFM-A726
          </h1>
          <div className="w-20 sm:w-24 h-px bg-black mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-black/70 leading-relaxed px-4">
            Une pièce emblématique de notre collection, 
            alliant savoir-faire traditionnel et innovation durable.
          </p>
        </div>
      </section>

      {/* Image + Text Section 1 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative aspect-[3/4] bg-cameo-green/20">
              {/* Placeholder image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <svg className="w-12 h-12 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-black/40 tracking-wider">DETAIL IMAGE 1</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-4 sm:mb-6 text-black uppercase">
                Conception
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                Chaque détail de cette veste a été pensé pour minimiser l'impact environnemental. 
                Les matériaux sont sourcés localement et sélectionnés pour leur durabilité.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                Le processus de fabrication respecte les standards les plus élevés de l'industrie, 
                garantissant une pièce qui traversera les années sans perdre de sa qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section 2 (inversé) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-4 sm:mb-6 text-black uppercase">
                Matériaux
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                Tissus biologiques certifiés, teintures naturelles et finitions écologiques 
                se combinent pour créer une pièce aussi belle qu'éthique.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                Notre engagement envers la mode circulaire signifie que chaque composant 
                peut être recyclé ou composté en fin de vie, fermant ainsi la boucle.
              </p>
            </div>
            <div className="relative aspect-[3/4] bg-summer-sand/30 order-1 md:order-2">
              {/* Placeholder image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <svg className="w-12 h-12 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-black/40 tracking-wider">DETAIL IMAGE 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section 3 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative aspect-[3/4] bg-rose-quartz/20">
              {/* Placeholder image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <svg className="w-12 h-12 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-black/40 tracking-wider">DETAIL IMAGE 3</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-4 sm:mb-6 text-black uppercase">
                Artisanat
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                Confectionnée par des artisans qualifiés, chaque veste est unique. 
                Les techniques traditionnelles se marient à l'innovation pour créer 
                une pièce d'exception.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                Le temps et l'attention accordés à chaque détail garantissent 
                une qualité supérieure et une durabilité exceptionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-cameo-green/20 mb-6 sm:mb-8">
            {/* Placeholder image large */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                  <svg className="w-16 h-16 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-black/40 tracking-wider">FULL WIDTH IMAGE</p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-base sm:text-lg text-black/70 leading-relaxed italic">
              "La mode circulaire n'est pas qu'une tendance, c'est une nécessité. 
              Chaque pièce raconte une histoire de respect et de conscience."
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 sm:py-16 bg-summer-sand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 text-black uppercase text-center">
            Caractéristiques
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="border-l-2 border-rose-quartz pl-6">
              <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Composition</h3>
              <p className="text-black">100% coton biologique certifié GOTS</p>
            </div>
            <div className="border-l-2 border-cameo-green pl-6">
              <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Origine</h3>
              <p className="text-black">Fabriqué en France avec amour</p>
            </div>
            <div className="border-l-2 border-summer-sand pl-6">
              <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Entretien</h3>
              <p className="text-black">Lavage à froid, séchage naturel</p>
            </div>
            <div className="border-l-2 border-rose-quartz pl-6">
              <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Impact</h3>
              <p className="text-black">Empreinte carbone neutre</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
