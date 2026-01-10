"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-cameo-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-black cursor-pointer">
            Fibrella
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          <Link href="/" className="text-sm tracking-wider uppercase text-black hover:text-cameo-green transition-colors">
            Accueil
          </Link>
          <Link href="/products" className="text-sm tracking-wider uppercase text-black hover:text-rose-quartz transition-colors">
            Collection
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-cameo-green/20 py-4">
          <div className="flex flex-col gap-4 px-6">
            <Link 
              href="/" 
              className="text-sm tracking-wider uppercase text-black hover:text-cameo-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/products" 
              className="text-sm tracking-wider uppercase text-black hover:text-rose-quartz transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
