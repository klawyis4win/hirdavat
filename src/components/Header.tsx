import { useEffect, useState } from 'react';
import { Menu, X, Wrench, Phone } from 'lucide-react';
import { storeInfo, buildWhatsAppLink } from '@/data/store';

const navLinks = [
  { href: '#anasayfa', label: 'Anasayfa' },
  { href: '#kategoriler', label: 'Kategoriler' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#anasayfa" className="flex items-center gap-2.5 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white transition-transform group-hover:scale-110">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-wide text-white">
              YILMAZ<span className="text-orange-500">HIRDAVAT</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={storeInfo.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-orange-500"
            >
              <Phone className="h-4 w-4" />
              {storeInfo.phone}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/98 backdrop-blur-md border-t border-zinc-800 animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href={storeInfo.phoneHref}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-zinc-200"
            >
              <Phone className="h-4 w-4" /> {storeInfo.phone}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-orange-500 px-4 py-3 text-center text-base font-semibold text-white"
            >
              WhatsApp ile Sipariş / Bilgi Al
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
