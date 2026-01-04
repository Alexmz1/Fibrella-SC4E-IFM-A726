import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-cameo-green/20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-light tracking-[0.2em] uppercase text-black">
          Fibrella
        </h1>
        <nav className="flex gap-8">
          <Link href="/" className="text-sm tracking-wider uppercase text-black hover:text-cameo-green transition-colors">
            Accueil
          </Link>
          <Link href="/products" className="text-sm tracking-wider uppercase text-black hover:text-rose-quartz transition-colors">
            Collection
          </Link>
        </nav>
      </div>
    </header>
  );
}
