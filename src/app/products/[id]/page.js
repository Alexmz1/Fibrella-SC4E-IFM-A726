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
          <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-rose-quartz/20 mb-8 sm:mb-12 overflow-hidden">
            <Image
              src="/item/E537A07E-D724-4DFD-A655-4AFABD8BF1FC.jpeg"
              alt="Blouse Fibrella SC4E-IFM-A726"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
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

      {/* Mosaïque d'images avant Conception */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/item/7.jpg"
                alt="Détail produit"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/item/8AFA14D6-8FA4-48EF-9F2B-2F5DB708DBF2_1_105_c.jpeg"
                alt="Détail produit"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/item/C9840CF4-6A9F-4AF6-BDFE-4B1C6B340044_1_105_c.jpeg"
                alt="Détail produit"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/item/D9B1A924-EC69-4AFC-A44D-A37CF73E1824_1_105_c.jpeg"
                alt="Détail produit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section 1 - Conception */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 text-black uppercase text-center">
            Conception
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                Le <span className="font-semibold">protocole de conception de la marque Fibrella</span> repose sur une approche de création fondée sur le <span className="font-semibold">patronage zéro déchet</span>. Dès la phase de recherche jusqu'au prototypage, chaque pièce est pensée afin de <span className="font-semibold">réduire au maximum les chutes de matière</span>, en intégrant les contraintes du textile directement dans le processus créatif.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                Fibrella s'inscrit ainsi dans une démarche <span className="font-semibold">éco-responsable</span>, où la conception du vêtement ne se limite pas à l'esthétique mais intègre une réflexion globale sur l'impact environnemental. Le patron devient un outil de création à part entière : il structure la silhouette tout en répondant à des enjeux de durabilité.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                La <span className="font-semibold">blouse SC4E-IFM-A726</span> illustre pleinement cette philosophie. Elle est conçue en <span className="font-semibold">soie sauvage beige</span>, une matière naturelle à l'aspect organique, choisie pour sa texture vivante et sa tenue. Son <span className="font-semibold">patronage zéro déchet</span> permet une utilisation intégrale du métrage, transformant chaque surface de tissu en élément structurant du vêtement.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                La blouse a également été pensée dans une logique d'<span className="font-semibold">inclusivité et de modularité</span>. Sa construction permet un porté du <span className="font-semibold">38 au 44</span>, grâce à une silhouette adaptable qui dialogue avec le corps plutôt que de l'enfermer dans une taille figée. Le vêtement devient ainsi évolutif, durable et accessible à différentes morphologies.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                À travers cette pièce, Fibrella affirme une vision de la mode tournée vers l'avenir : une mode <span className="font-semibold">responsable, conceptuelle et consciente</span>, où innovation formelle et engagement environnemental avancent ensemble.
              </p>
            </div>
            <div className="max-w-lg mx-auto md:mx-0">
              <Image
                src="/item/conception/1.jpg"
                alt="Conception zéro déchet"
                width={700}
                height={933}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image + Text Section 2 - Matériaux */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 text-black uppercase text-center">
            Matériaux
          </h2>
          
          {/* Image 1 petite avec texte à côté */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
            <div className="max-w-md mx-auto md:mx-0">
              <Image
                src="/item/materiaux/1.png"
                alt="Matériaux Fibre Bio"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                Fibrella collabore avec l'entreprise française <span className="font-semibold">Fibre Bio</span> pour la <span className="font-semibold">blouse SC4E‑IFM‑A726</span>, tandis que le tissu en <span className="font-semibold">soie recyclée</span> utilisé provient de fournisseurs basés en <span className="font-semibold">Inde</span>.
              </p>
            </div>
          </div>

          {/* Images 2 et 3 côte à côte */}
          <div className="flex gap-6 sm:gap-8 items-start">
            <div className="flex-1">
              <Image
                src="/item/materiaux/2.png"
                alt="Soie recyclée"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="w-48 sm:w-64">
              <Image
                src="/item/materiaux/3.png"
                alt="Processus de fabrication"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Texte sur la soie sauvage */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
            <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-8 sm:mb-12">
              La <span className="font-semibold">blouse SC4E-IFM-A726</span> est conçue en <span className="font-semibold">soie sauvage recyclée issue d'une culture biologique, non violente et responsable ainsi que de fils de soie certifiée Oeko-tex</span>.
            </p>
          </div>

          {/* Images 4 et 5 côte à côté */}
          <div className="flex gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto items-start">
            <div className="flex-1">
              <Image
                src="/item/materiaux/4.jpg"
                alt="Soie sauvage recyclée"
                width={400}
                height={267}
                className="w-full h-auto"
              />
            </div>
            <div className="w-40 sm:w-56">
              <Image
                src="/item/materiaux/5.png"
                alt="Fils de soie certifiés"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Texte sur la composition */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-black/70 leading-relaxed">
              Cette soie recyclée est durable et écologique, fabriquée à partir de fibres de soie issues de chutes de soie récupérées à différentes étapes de production (filature et tissage). Ce tissu est léger et présente un éclat naturel. Il est composé à 80 % de chutes de soie de mûrier recyclées et à 20 % de soie de mûrier non recyclée. Cette soie est très confortable, respirante et prête à être teinte.
            </p>
          </div>

          {/* Image 7 */}
          <div className="max-w-xl mx-auto">
            <Image
              src="/item/materiaux/7.png"
              alt="Processus de recyclage de la soie"
              width={600}
              height={390}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Image + Text Section 3 - Artisanat */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 text-black uppercase text-center">
            Artisanat
          </h2>
          
          {/* Image 1 et texte côte à côte */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start mb-8 sm:mb-12">
            <div className="max-w-md mx-auto md:mx-0">
              <Image
                src="/item/artisanat/1.jpg"
                alt="Broderie identitaire"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
                La <span className="font-semibold">broderie présente sur la blouse</span> ne relève pas d'un simple geste décoratif : elle constitue un <span className="font-semibold">protocole identitaire propre à la pièce</span>. Chaque blouse porte une <span className="font-semibold">référence brodée unique</span>, pensée comme un identifiant lisible et durable, directement intégré au vêtement.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                Ce code fonctionne comme un <span className="font-semibold">lien entre l'objet physique et son existence numérique</span>. Il suffit au client de saisir la <span className="font-semibold">référence de la série</span> dans une barre de recherche internet pour être redirigé vers le <span className="font-semibold">site de la marque Fibrella</span>, et plus précisément vers la page dédiée à l'article. Cette interface regroupe l'ensemble des informations liées à la pièce : son processus de conception, les matières utilisées, le patronage zéro déchet, les conditions de fabrication, ainsi que les intentions créatives qui ont guidé sa réalisation.
              </p>
            </div>
          </div>

          {/* Texte sur la fin de vie */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
              La broderie permet également d'accéder aux <span className="font-semibold">informations concernant la fin de vie du vêtement</span>. Fibrella intègre ainsi une réflexion circulaire, en informant le client sur les solutions de réparation, de transformation ou de recyclage possibles, afin de prolonger ou revaloriser la pièce au-delà de son usage initial.
            </p>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed">
              Par ce système, la broderie devient une <span className="font-semibold">signature fonctionnelle</span>, à la fois trace, archive et outil de transmission. Elle ancre le vêtement dans une temporalité élargie, où chaque pièce conserve la mémoire de sa création et anticipe déjà son devenir.
            </p>
          </div>

          {/* Image 2 */}
          <div className="max-w-xl mx-auto">
            <Image
              src="/item/artisanat/2.jpg"
              alt="Détail broderie"
              width={600}
              height={400}
              className="w-full h-auto"
            />
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

      {/* Specifications Section */}
      <section className="py-12 sm:py-16 bg-summer-sand/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8 sm:mb-12 text-black uppercase text-center">
            Caractéristiques
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Texte à gauche */}
            <div className="grid sm:grid-cols-1 gap-6 sm:gap-8">
              <div className="border-l-2 border-rose-quartz pl-6">
                <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Composition</h3>
                <p className="text-black">100% soie certifiée GOTS</p>
              </div>
              <div className="border-l-2 border-cameo-green pl-6">
                <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Origine</h3>
                <p className="text-black">Fabriqué en France (Blouse)</p>
              </div>
              <div className="border-l-2 border-summer-sand pl-6">
                <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Entretien</h3>
                <p className="text-black">Lavage à sec, lavage à froid, pas de blanchiment, pas d'essorage, séchage à plat, repassage à basse température</p>
              </div>
              <div className="border-l-2 border-cameo-green pl-6">
                <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Construction</h3>
                <p className="text-black">Spécial patronage 0 WASTE</p>
              </div>
              <div className="border-l-2 border-rose-quartz pl-6">
                <h3 className="text-sm tracking-wider uppercase mb-2 text-black/60">Impact</h3>
                <p className="text-black">Empreinte carbone neutre</p>
              </div>
            </div>
            
            {/* Image à droite */}
            <div className="flex justify-center md:justify-end">
              <div className="max-w-md">
                <Image
                  src="/item/6.jpg"
                  alt="Caractéristiques du produit"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
