import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nos engagements | Fibrella',
  description: 'Les engagements environnementaux et sociaux de Fibrella'
};

export default function EngagementsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-cameo-green/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-center text-black mb-6">
            NOS ENGAGEMENTS
          </h1>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>
      </section>

      {/* Images Eco */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative w-full h-auto max-w-4xl mx-auto">
              <Image
                src="/eco/1.jpg"
                alt="Engagement environnemental 1"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-auto max-w-sm mx-auto">
              <Image
                src="/eco/2.jpg"
                alt="Engagement environnemental 2"
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fin de Vie Section */}
      <section className="py-12 sm:py-16 bg-rose-quartz/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 text-black uppercase text-center">
            Fin de Vie
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
              <Image
                src="/item/fin_de_vie/1.1.png"
                alt="Fin de vie"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-4">
                Dans une logique de <span className="font-semibold">responsabilité étendue et de circularité totale</span>, <span className="font-semibold">Fibrella a mis en place un protocole précis pour la fin de vie de chacun de ses produits</span>, en collaboration avec les entreprises <span className="font-semibold">Collecte Éco Textile</span> et <span className="font-semibold">Framinex</span>, partenaires déjà engagés ensemble dans le recyclage textile. <span className="font-semibold">Depuis 2025</span>, Fibrella s'est officiellement associée à ces acteurs afin de garantir une gestion maîtrisée, sécurisée et traçable de ses pièces en fin d'usage.
              </p>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-4">
                Grâce à <span className="font-semibold">Collecte Éco Textile</span>, Fibrella déploie sur l'ensemble du territoire français des <span className="font-semibold">conteneurs de récupération sécurisés</span>, exclusivement dédiés aux produits de la marque. L'accès à ces conteneurs est contrôlé : pour y déposer une ou plusieurs pièces à recycler, le client doit <span className="font-semibold">entrer le code-barres brodé directement sur le vêtement</span>, assurant ainsi une identification précise du produit et une traçabilité complète jusqu'à sa fin de vie.
              </p>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                Chaque semaine, <span className="font-semibold">Collecte Éco Textile récupère le contenu des conteneurs</span> et l'achemine vers l'entreprise française <span className="font-semibold">Framinex</span>, spécialisée dans le <span className="font-semibold">tri, la transformation et le recyclage des matières textiles</span>. Les fibres recyclées sont ensuite réintégrées dans un nouveau cycle de production : elles peuvent être <span className="font-semibold">revalorisées sous forme de nouvelles matières</span>, et <span className="font-semibold">réintroduites au sein de l'atelier Fibrella</span>, fermant ainsi la boucle de la création.
              </p>
            </div>
          </div>

          {/* Additional Images - Images rapprochées */}
          <div className="mt-8 space-y-6">
            <div className="max-w-4xl mx-auto">
              <Image
                src="/item/fin_de_vie/1.2.png"
                alt="Processus de recyclage"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <Image
                src="/item/fin_de_vie/1.3.png"
                alt="Collecte éco textile"
                width={900}
                height={675}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-5xl mx-auto">
              <Image
                src="/item/fin_de_vie/1.4.png"
                alt="Transformation des fibres"
                width={1400}
                height={787}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <Image
                src="/item/fin_de_vie/1.5.png"
                alt="Cycle de production circulaire"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Image 1.6 centrée */}
          <div className="mt-6 flex justify-center">
            <div className="max-w-5xl w-full">
              <Image
                src="/item/fin_de_vie/1.6.png"
                alt="Fibrella circulaire"
                width={800}
                height={1067}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
