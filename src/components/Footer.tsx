import { Wrench, Phone } from 'lucide-react';
import { storeInfo, buildWhatsAppLink } from '@/data/store';

const quickLinks = [
  { href: '#anasayfa', label: 'Anasayfa' },
  { href: '#kategoriler', label: 'Kategoriler' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#iletisim', label: 'İletişim' },
];

const categoryLinks = [
  { href: '#kategoriler', label: 'El Aletleri' },
  { href: '#kategoriler', label: 'Boya & Yalıtım' },
  { href: '#kategoriler', label: 'Tesisat Malzemeleri' },
  { href: '#kategoriler', label: 'Hırdavat' },
  { href: '#kategoriler', label: 'Kilit Sistemleri' },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#anasayfa" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold tracking-wide text-white">
                YILMAZ<span className="text-orange-500">HIRDAVAT</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              {storeInfo.established}'den beri mahallenizin güvenilir
              hırdavatçısı. Geleneksel esnaflık, modern ürün çeşitliliği.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Hızlı Erişim
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-orange-500"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Kategoriler
            </h4>
            <ul className="mt-4 space-y-2.5">
              {categoryLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-orange-500"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              İletişim
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 shrink-0 text-orange-500 mt-0.5" />
                <a
                  href={storeInfo.phoneHref}
                  className="transition-colors hover:text-orange-500"
                >
                  {storeInfo.phone}
                </a>
              </li>
              <li className="leading-relaxed">{storeInfo.address}</li>
            </ul>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600"
            >
              WhatsApp'tan Yazın
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {storeInfo.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
