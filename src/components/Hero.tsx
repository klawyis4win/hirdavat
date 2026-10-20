import { ArrowRight, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { storeInfo, buildWhatsAppLink } from '@/data/store';

export default function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/15060421/pexels-photo-15060421.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Hırdavat dükkanı"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-900/80 to-zinc-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 animate-fade-in-up">
            <ShieldCheck className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-400">
              {storeInfo.established}'den beri yanınızdayız
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in-up delay-100">
            {storeInfo.tagline}
          </h1>

          <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            El aletlerinden boya ve yalıtıma, tesisat malzemelerinden kilit
            sistemlerine kadar ihtiyacınız olan her şey tek çatı altında. Kaliteli
            ürün, güvenilir fiyat, mahalle esnafı sıcaklığı.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              WhatsApp ile Sipariş / Bilgi Al
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#kategoriler"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Kategorileri Keşfet
            </a>
          </div>

          {/* Quick info bar */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up delay-400">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
              <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
              <span className="text-sm text-zinc-300">
                {storeInfo.address}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
              <Clock className="h-5 w-5 shrink-0 text-orange-500" />
              <span className="text-sm text-zinc-300">
                Hafta içi 08:30 – 19:00
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-orange-500" />
              <span className="text-sm text-zinc-300">
                Orijinal ürün, garantili satış
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-1 rounded-full bg-orange-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
