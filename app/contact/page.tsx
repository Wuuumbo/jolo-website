import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nous Trouver - ElfeJolo | 71 Rue d'Auron, Bourges",
  description:
    "ElfeJolo se trouve au 71 Rue d'Auron, 18000 Bourges. Ouvert du mardi au samedi de 10h à 18h30. Contactez-nous au 06 73 88 32 26.",
};

const hours = [
  { day: 'Lundi', time: 'Fermé', open: false },
  { day: 'Mardi', time: '10h – 18h30', open: true },
  { day: 'Mercredi', time: '10h – 18h30', open: true },
  { day: 'Jeudi', time: '10h – 18h30', open: true },
  { day: 'Vendredi', time: '10h – 18h30', open: true },
  { day: 'Samedi', time: '10h – 18h30', open: true },
  { day: 'Dimanche', time: 'Fermé', open: false },
];

const payments = [
  { icon: '💳', label: 'Carte bancaire' },
  { icon: '💵', label: 'Espèces' },
  { icon: '📝', label: 'Chèques' },
  { icon: '📱', label: 'Paiement mobile NFC' },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-coral/10 text-coral px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
            📍 Nous trouver
          </span>
          <h1
            className="text-5xl md:text-6xl font-fredoka text-brown mb-4"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Venez nous <span className="text-coral">rendre visite</span>
          </h1>
          <p className="text-brown-light font-nunito text-lg max-w-xl mx-auto">
            On vous attend avec le sourire ! Parking gratuit dans la rue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-brown/5" style={{ minHeight: '400px' }}>
            <iframe
              title="ElfeJolo sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.4!2d2.3964!3d47.0804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA0JzQ5LjQiTiAywrAyMyczMS4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr&q=71+Rue+d+Auron+18000+Bourges"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white rounded-3xl p-6 border border-brown/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-coral/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                📍
              </div>
              <div>
                <h3
                  className="font-fredoka text-xl text-brown mb-1"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  Adresse
                </h3>
                <p className="text-brown-light font-nunito">71 Rue d'Auron<br />18000 Bourges</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=71+Rue+d'Auron,+18000+Bourges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-coral text-sm font-bold hover:underline font-nunito"
                >
                  Itinéraire →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-6 border border-brown/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-sage/20 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                📞
              </div>
              <div>
                <h3
                  className="font-fredoka text-xl text-brown mb-1"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  Téléphone
                </h3>
                <a
                  href="tel:0673883226"
                  className="text-coral font-bold text-lg hover:underline font-nunito"
                >
                  06 73 88 32 26
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl p-6 border border-brown/5 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow/30 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                📲
              </div>
              <div>
                <h3
                  className="font-fredoka text-xl text-brown mb-2"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  Réseaux sociaux
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/elfejolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-coral text-white rounded-full text-sm font-bold hover:bg-coral-dark transition-all font-nunito"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/elfejolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-brown text-white rounded-full text-sm font-bold hover:opacity-90 transition-all font-nunito"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-3xl p-6 border border-brown/5 shadow-sm">
              <h3
                className="font-fredoka text-xl text-brown mb-4"
                style={{ fontFamily: 'Fredoka One, cursive' }}
              >
                💳 Modes de paiement
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {payments.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-sm font-nunito text-brown-light">
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-brown/5 shadow-sm max-w-2xl mx-auto">
          <h2
            className="font-fredoka text-3xl text-brown mb-6 text-center"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            🕐 Horaires d'ouverture
          </h2>
          <div className="divide-y divide-brown/5">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between items-center py-3">
                <span className="font-bold font-nunito text-brown">{h.day}</span>
                <span
                  className={`font-nunito text-sm font-bold px-3 py-1 rounded-full ${
                    h.open
                      ? 'bg-sage/20 text-sage-dark'
                      : 'bg-brown/5 text-brown/40'
                  }`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow/20 rounded-2xl p-4 text-sm text-brown-light font-nunito text-center">
            🎉 <strong className="text-brown">Parking gratuit</strong> dans la rue · Arrivages tous les jours !
          </div>
        </div>

        {/* Sell your toys */}
        <div
          className="mt-12 rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #FFD166, #FF8C6B)' }}
        >
          <div className="text-5xl mb-4">💰</div>
          <h2
            className="font-fredoka text-3xl text-white mb-3"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Vous avez des jouets à vendre ?
          </h2>
          <p className="text-white/90 font-nunito mb-6 max-w-md mx-auto">
            Apportez vos jeux et jouets en boutique ! Cécilia les rachète ou les met en dépôt-vente. 
            Deuxième vie garantie 🌱
          </p>
          <a
            href="tel:0673883226"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-coral rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-nunito"
          >
            📞 Appeler pour en savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
