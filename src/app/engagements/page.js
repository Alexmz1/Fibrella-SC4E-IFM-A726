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

      <Footer />
    </>
  );
}
