import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import { storeInfo, buildWhatsAppLink } from '@/data/store';

export default function Contact() {
  return (
    <section id="iletisim" className="bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            İletişim
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-zinc-900">
            Bize Ulaşın, Hemen Çözüm Üretelim
          </h2>
          <p className="mt-4 text-zinc-600">
            Dükkana uğrayın, telefonla arayın veya WhatsApp'tan yazın. Hangi
            kanalı seçerseniz seçin, yanınızdayız.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <a
              href={storeInfo.phoneHref}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-zinc-100 transition-all hover:shadow-md hover:border-orange-200"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-medium text-zinc-500">Telefon</div>
                <div className="text-lg font-semibold text-zinc-900">
                  {storeInfo.phone}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-zinc-100">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-medium text-zinc-500">Adres</div>
                <div className="text-base font-semibold text-zinc-900">
                  {storeInfo.address}
                </div>
                <a
                  href={storeInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>

            <a
              href={`mailto:${storeInfo.email}`}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-zinc-100 transition-all hover:shadow-md hover:border-orange-200"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-medium text-zinc-500">E-posta</div>
                <div className="text-lg font-semibold text-zinc-900">
                  {storeInfo.email}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-zinc-100">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Clock className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium text-zinc-500">Çalışma Saatleri</div>
                <ul className="mt-1.5 space-y-1">
                  {storeInfo.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm">
                      <span className="text-zinc-600">{h.day}</span>
                      <span className="font-semibold text-zinc-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-orange-500 p-5 text-white font-semibold text-lg shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp ile Sipariş / Bilgi Al
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200 min-h-[420px] lg:min-h-full">
            <iframe
              src={storeInfo.mapEmbedSrc}
              className="h-full w-full min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              title="Dükkan Konumu"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
