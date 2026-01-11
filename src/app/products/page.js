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
      image: "/item/D9B1A924-EC69-4AFC-A44D-A37CF73E1824_1_105_c.jpeg",
      color: "rose-quartz"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 sm:mb-6 text-black">
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
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-gray-100 mb-6 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-light tracking-wider uppercase mb-2 text-black group-hover:text-cameo-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 mb-2 tracking-wide">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 sm:py-24 bg-summer-sand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-light tracking-wider uppercase mb-4 sm:mb-6 text-black">
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
