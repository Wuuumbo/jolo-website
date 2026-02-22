import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown text-white pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" style={{ transform: 'translateY(-1px)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 fill-cream">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🧚</span>
            <span className="font-fredoka text-2xl text-coral" style={{ fontFamily: 'Fredoka One, cursive' }}>
              Elfe<span className="text-yellow">Jolo</span>
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed font-nunito">
            La boutique magique de jouets, jeux et livres de seconde main à Bourges. Arrivages tous les jours !
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/elfejolo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white hover:bg-coral-dark transition-colors hover:scale-110 transform text-lg"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/elfejolo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white hover:bg-coral-dark transition-colors hover:scale-110 transform text-lg"
            >
              ✦
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-fredoka text-lg text-yellow mb-4" style={{ fontFamily: 'Fredoka One, cursive' }}>
            Navigation
          </h3>
          <ul className="space-y-2 text-white/70 text-sm font-nunito">
            <li><Link href="/" className="hover:text-coral transition-colors">Accueil</Link></li>
            <li><Link href="/catalogue" className="hover:text-coral transition-colors">Catalogue</Link></li>
            <li><Link href="/a-propos" className="hover:text-coral transition-colors">Notre histoire</Link></li>
            <li><Link href="/contact" className="hover:text-coral transition-colors">Nous trouver</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-fredoka text-lg text-yellow mb-4" style={{ fontFamily: 'Fredoka One, cursive' }}>
            Nous trouver
          </h3>
          <ul className="space-y-3 text-white/70 text-sm font-nunito">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>16 Rue Coursarlon<br />18000 Bourges</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:0673883226" className="hover:text-coral transition-colors">06 73 88 32 26</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">🕐</span>
              <span>Mar–Mer, Ven–Sam<br />10h – 18h30</span>
            </li>
            <li className="flex items-center gap-2">
              <span>⭐</span>
              <span className="text-yellow font-bold">4.9/5</span>
              <span>sur Google</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs font-nunito">
        © {new Date().getFullYear()} ElfeJolo – Boutique de seconde main à Bourges. Tous droits réservés.
      </div>
    </footer>
  );
}
