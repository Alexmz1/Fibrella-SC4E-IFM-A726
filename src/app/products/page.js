import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  // Données temporaires - à remplacer par les vraies données plus tard
  const products = [
    {
      id: 1,
      name: "Blouse Fibrella SC4E-IFM-A726",
      category: "Vêtements",
      image: "/placeholder-product.jpg",
      color: "rose-quartz"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-black">
              COLLECTION
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre collection de mode circulaire, 
              où l'élégance rencontre la durabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-gray-100 mb-6 overflow-hidden">
                  {/* Placeholder pour l'image */}
                  <div className={`w-full h-full bg-${product.color}/20 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                        <svg className="w-12 h-12 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-black/40 tracking-wider">IMAGE PLACEHOLDER</p>
                    </div>
                  </div>
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-l font-light tracking-wider uppercase mb-2 text-black group-hover:text-cameo-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-black/60 mb-2 tracking-wide">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-24 bg-summer-sand/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-6 text-black">
            Mode Responsable
          </h2>
          <p className="text-black/70 leading-relaxed">
            Chaque pièce de notre collection est conçue avec soin, 
            dans le respect de l'environnement et des artisans qui les créent. 
            La mode circulaire, c'est l'avenir de la mode.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
