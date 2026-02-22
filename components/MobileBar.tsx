export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex pb-safe" style={{ background: 'transparent' }}>
      <a
        href="tel:0673883226"
        className="flex-1 flex items-center justify-center gap-2 bg-coral text-white font-bold font-nunito py-4 text-base hover:bg-coral-dark transition-colors"
        style={{ minHeight: '56px' }}
      >
        <span>📞</span>
        <span>Appeler</span>
      </a>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=16+Rue+Coursarlon,+18000+Bourges"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-brown text-white font-bold font-nunito py-4 text-base hover:opacity-90 transition-colors"
        style={{ minHeight: '56px' }}
      >
        <span>📍</span>
        <span>Itinéraire</span>
      </a>
    </div>
  );
}
