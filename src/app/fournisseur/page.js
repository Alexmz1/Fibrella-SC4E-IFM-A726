import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function FournisseurPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 sm:mb-6 text-black">
              FOURNISSEUR
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              Une démarche globale de responsabilité
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-6">
            Concernant l'<span className="font-semibold">expédition de ses produits</span>, la marque <span className="font-semibold">Fibrella</span> s'inscrit dans une démarche globale de responsabilité, en collaborant exclusivement avec des <span className="font-semibold">entreprises et des ateliers partageant les mêmes engagements éthiques et environnementaux</span>.
          </p>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed">
            Chaque étape, de la conception à l'envoi, est pensée afin de limiter l'impact écologique tout en valorisant des savoir-faire locaux et responsables.
          </p>
        </div>
      </section>

      {/* Image 1 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-auto">
            <Image
              src="/fournisseur/1.png"
              alt="Fournisseur 1"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Image 2 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-auto">
            <Image
              src="/fournisseur/2.png"
              alt="Fournisseur 2"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Papeterie Section */}
      <section className="py-12 sm:py-16 bg-rose-quartz/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-6 sm:mb-8 text-black uppercase text-center">
            Papeterie Française
          </h2>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-6">
            Pour les <span className="font-semibold">packagings d'expédition</span>, <span className="font-semibold">Fibrella</span> collabore avec une <span className="font-semibold">papeterie française située à Montségur</span>, spécialisée dans la fabrication de <span className="font-semibold">papier de soie 100 % écologique</span>.
          </p>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed">
            Ce papier est conçu dans le respect de normes environnementales strictes et s'inscrit dans une logique de production durable et raisonnée.
          </p>
        </div>
      </section>

      {/* Image 3 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-auto">
            <Image
              src="/fournisseur/3.png"
              alt="Fournisseur 3"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Image 4 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-auto">
            <Image
              src="/fournisseur/4.png"
              alt="Fournisseur 4"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 sm:py-16 bg-cameo-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-6 sm:mb-8 text-black uppercase text-center">
            Certifications & Engagements
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-rose-quartz pl-6">
              <h3 className="text-lg font-medium mb-2 text-black"><span className="font-semibold">FSC</span></h3>
              <p className="text-base text-black/80 leading-relaxed">
                L'entreprise et son artisanat sont <span className="font-semibold">certifiés FSC</span>, garantissant une gestion responsable des ressources forestières.
              </p>
            </div>
            <div className="border-l-4 border-cameo-green pl-6">
              <h3 className="text-lg font-medium mb-2 text-black"><span className="font-semibold">SEDEX</span></h3>
              <p className="text-base text-black/80 leading-relaxed">
                Attestant de pratiques éthiques en matière de conditions de travail et de chaîne d'approvisionnement.
              </p>
            </div>
            <div className="border-l-4 border-summer-sand pl-6">
              <h3 className="text-lg font-medium mb-2 text-black"><span className="font-semibold">Imprim'Luxe</span></h3>
              <p className="text-base text-black/80 leading-relaxed">
                Les impressions répondent également aux standards Imprim'Luxe, assurant une qualité haut de gamme tout en respectant des critères environnementaux exigeants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Images 5, 6, 7 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative w-full h-auto">
              <Image
                src="/fournisseur/5.png"
                alt="Fournisseur 5"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src="/fournisseur/6.png"
                alt="Fournisseur 6"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src="/fournisseur/7.png"
                alt="Fournisseur 7"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smartpack.me Section */}
      <section className="py-12 sm:py-16 bg-summer-sand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-6 sm:mb-8 text-black uppercase text-center">
            Smartpack.me
          </h2>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-6">
            Dans cette même logique d'engagement environnemental, <span className="font-semibold">Fibrella collabore également avec Smartpack.me</span>, une <span className="font-semibold">entreprise française spécialisée dans la conception et la production de boîtes en carton écologiques</span>.
          </p>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-6">
            Les solutions développées par Smartpack.me répondent à des critères stricts de durabilité, en privilégiant des matériaux recyclés et recyclables, tout en garantissant une qualité de fabrication adaptée aux exigences du secteur de la mode.
          </p>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed">
            Ces boîtes, pensées pour limiter l'impact environnemental, sont <span className="font-semibold">certifiées selon des normes reconnues</span>, assurant à la fois la traçabilité des matières premières, une gestion responsable des ressources et des procédés de fabrication respectueux de l'environnement. Leur conception s'inscrit dans une démarche d'éco-conception globale, où fonctionnalité, protection du produit et réduction des déchets sont étroitement liées.
          </p>
        </div>
      </section>

      {/* Image 8 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-auto">
            <Image
              src="/fournisseur/8.png"
              alt="Fournisseur 8"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Images 9, 10 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="relative w-full h-auto max-w-md">
              <Image
                src="/fournisseur/9.png"
                alt="Fournisseur 9"
                width={600}
                height={450}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src="/fournisseur/10.png"
                alt="Fournisseur 10"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image 11 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-auto">
            <Image
              src="/fournisseur/11.png"
              alt="Fournisseur 11"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
