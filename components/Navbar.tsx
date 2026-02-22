'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/catalogue', label: '🧸 Catalogue' },
  { href: '/a-propos', label: '✨ Notre histoire' },
  { href: '/contact', label: '📍 Nous trouver' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl group-hover:animate-[wiggle_0.5s_ease-in-out]">🧚</span>
          <span
            className="font-fredoka text-2xl text-coral leading-none"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Elfe<span className="text-brown">Jolo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full font-nunito font-700 text-brown hover:bg-coral hover:text-white transition-all duration-200 text-sm font-bold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/elfejolo"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-coral text-white rounded-full text-sm font-bold hover:bg-coral-dark transition-all duration-200 hover:scale-105"
          >
            Facebook →
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-brown transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span className={`block w-6 h-0.5 bg-brown transition-all ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block w-6 h-0.5 bg-brown transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-peach px-4 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 rounded-xl font-bold text-brown hover:bg-peach transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.facebook.com/elfejolo"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-4 bg-coral text-white text-center rounded-xl font-bold"
          >
            Voir notre Facebook →
          </a>
        </div>
      )}
    </header>
  );
}
