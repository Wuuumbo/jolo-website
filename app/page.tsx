'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const categories = [
  { emoji: '🧸', title: 'Peluches & Poupées', desc: 'Des compagnons doux pour petits et grands' },
  { emoji: '🎲', title: 'Jeux de société', desc: 'Des soirées famille inoubliables' },
  { emoji: '📚', title: 'Livres jeunesse', desc: 'Des histoires à dévorer sous la couette' },
  { emoji: '🧩', title: 'Puzzles', desc: 'Des heures de concentration et de plaisir' },
  { emoji: '🎭', title: 'Déguisements', desc: 'Devenez un super-héros, une fée…' },
  { emoji: '🎨', title: 'Loisirs créatifs', desc: 'Kits neufs pour éveiller la créativité' },
];

const testimonials = [
  {
    text: 'Véritable caverne d\'Ali Baba ! Cécilia connaît parfaitement ses produits et conseille avec passion.',
    author: 'Marie L.',
    stars: 5,
  },
  {
    text: 'Les jouets sont en très bon état et les prix sont imbattables. On revient à chaque anniversaire !',
    author: 'Thomas R.',
    stars: 5,
  },
  {
    text: 'Une boutique superbe, une gérante vraiment sympathique. Le paradis pour les enfants !',
    author: 'Sophie M.',
    stars: 5,
  },
];

function FloatingEmoji({ emoji, className }: { emoji: string; className: string }) {
  return (
    <div className={`absolute text-4xl select-none pointer-events-none ${className}`}>
      {emoji}
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-cream pt-20"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, #FFE5D9 0%, #FFF8F0 60%)',
        }}
      >
        {/* Background blobs */}
        <div
          className="absolute top-20 right-10 w-64 h-64 bg-yellow/30 blob animate-float"
          style={{ filter: 'blur(40px)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-sage/20 blob-2 animate-float-delay"
          style={{ filter: 'blur(50px)' }}
        />

        {/* Floating emojis */}
        <FloatingEmoji emoji="🧸" className="top-32 left-[8%] animate-float text-5xl" />
        <FloatingEmoji emoji="🎲" className="top-48 right-[10%] animate-float-delay text-4xl" />
        <FloatingEmoji emoji="📚" className="bottom-40 left-[15%] animate-float-delay2 text-4xl" />
        <FloatingEmoji emoji="🌟" className="top-24 right-[30%] animate-float text-3xl" />
        <FloatingEmoji emoji="🎠" className="bottom-32 right-[15%] animate-float-delay2 text-4xl" />

        {/* Hero content */}
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-coral/20 rounded-full px-5 py-2 mb-8 shadow-sm">
            <span className="text-xl">⭐</span>
            <span className="text-brown font-bold text-sm font-nunito">
              4.9/5 sur Google · Arrivages tous les jours !
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-fredoka text-brown mb-6 leading-tight text-shadow"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            La boutique
            <br />
            <span className="text-coral">magique</span> de
            <br />
            <span className="text-sage">Bourges</span>
          </h1>

          <p className="text-lg md:text-xl text-brown-light font-nunito max-w-2xl mx-auto mb-10 leading-relaxed">
            Jeux, jouets, livres et déguisements de{' '}
            <span className="font-bold text-coral">seconde main</span> soigneusement sélectionnés.
            Un trésor pour chaque enfant, une planète préservée pour tous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogue"
              className="px-8 py-4 bg-coral text-white rounded-full text-lg font-bold hover:bg-coral-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-coral/30 font-nunito"
            >
              🧸 Voir le catalogue
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-brown border-2 border-brown/10 rounded-full text-lg font-bold hover:border-coral hover:text-coral transition-all duration-200 hover:scale-105 shadow-sm font-nunito"
            >
              📍 Nous trouver
            </Link>
          </div>

          {/* Address pill */}
          <div className="mt-10 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-5 py-2.5 rounded-full text-sm text-brown-light font-nunito border border-brown/5">
            <span>📍</span>
            <span>16 Rue Coursarlon, 18000 Bourges</span>
            <span className="text-brown/30">·</span>
            <span>Mar–Mer, Ven–Sam : 10h–18h30</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-brown/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-3 bg-coral rounded-full animate-[float_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-yellow/30 text-brown px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              ✨ Qu'est-ce qu'on trouve chez ElfeJolo ?
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Une caverne d'<span className="text-coral">Ali Baba</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="reveal opacity-0 translate-y-8 transition-all bg-white rounded-3xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 cursor-default border border-brown/5 group"
                style={{ transitionDuration: `${600 + i * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {cat.emoji}
                </div>
                <h3
                  className="font-fredoka text-lg md:text-xl text-brown mb-2"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  {cat.title}
                </h3>
                <p className="text-brown-light text-sm font-nunito leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT BANNER ─── */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FF8C6B 0%, #FFD166 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="text-[200px] font-fredoka absolute -top-10 -left-10 text-white select-none" style={{ fontFamily: 'Fredoka One, cursive' }}>
            ✨
          </div>
          <div className="text-[150px] font-fredoka absolute -bottom-10 -right-10 text-white select-none" style={{ fontFamily: 'Fredoka One, cursive' }}>
            🧸
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2
              className="text-4xl md:text-5xl font-fredoka text-white mb-6 text-shadow"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Cécilia vous accueille avec le sourire 🌸
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-nunito leading-relaxed mb-8 max-w-2xl mx-auto">
              ElfeJolo, c'est avant tout une aventure humaine. Née du désir de donner une seconde
              vie aux jouets, la boutique est devenue <strong>la référence jeunesse de Bourges</strong>.
              Des produits soigneusement sélectionnés, des conseils personnalisés selon l'âge,
              et une ambiance chaleureuse qui fait revenir.
            </p>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 bg-white text-coral px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-nunito"
            >
              Découvrir notre histoire →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-sage/20 text-sage-dark px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              ⭐ Avis clients
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Ils nous <span className="text-coral">adorent</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all bg-white rounded-3xl p-8 border border-brown/5 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDuration: `${600 + i * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="star text-xl">★</span>
                  ))}
                </div>
                <p className="text-brown-light font-nunito leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center text-lg">
                    😊
                  </div>
                  <span className="font-bold text-brown font-nunito">{t.author}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-flex items-center gap-3 bg-yellow/20 px-8 py-4 rounded-full">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-brown text-lg font-nunito">
                Note moyenne de <span className="text-coral">4.9/5</span> sur Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / VISIT ─── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFE5D9)' }}
          >
            <div className="absolute top-4 right-6 text-5xl opacity-30 animate-float">🌟</div>
            <div className="absolute bottom-4 left-6 text-4xl opacity-30 animate-float-delay">🎈</div>

            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown mb-4"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Venez nous rendre visite ! 🎉
            </h2>
            <p className="text-brown-light font-nunito text-lg mb-8 max-w-xl mx-auto">
              Arrivages tous les jours. Vous pouvez même apporter vos jouets à vendre !
              On accepte cartes, chèques et espèces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0673883226"
                className="px-8 py-4 bg-coral text-white rounded-full text-lg font-bold hover:bg-coral-dark transition-all duration-200 hover:scale-105 shadow-lg font-nunito"
              >
                📞 06 73 88 32 26
              </a>
              <a
                href="https://www.facebook.com/elfejolo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brown text-white rounded-full text-lg font-bold hover:opacity-90 transition-all duration-200 hover:scale-105 font-nunito"
              >
                📲 Suivez-nous sur Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
