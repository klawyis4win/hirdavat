import { Store, Award, Users, Clock } from 'lucide-react';
import { storeInfo } from '@/data/store';

const stats = [
  { icon: Store, value: '1998', label: 'Kuruluş Yılı' },
  { icon: Users, value: '10.000+', label: 'Mutlu Müşteri' },
  { icon: Award, value: '5.000+', label: 'Ürün Çeşidi' },
  { icon: Clock, value: '25+', label: 'Yıllık Tecrübe' },
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-zinc-900 py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Hakkımızda
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white">
              Mahallenin Parçasıyız
            </h2>
            <div className="mt-4 space-y-4 text-zinc-300 leading-relaxed">
              <p>
                {storeInfo.name}, {storeInfo.established} yılında küçük bir
                mahalle dükkanı olarak yolculuğuna başladı. O günden bu güne,
                mahalle sakinlerinin ve ustaların güvenilir adresi olmaya devam
                ediyoruz.
              </p>
              <p>
                Geleneksel esnaf anlayışını modern bir ürün çeşitliliğiyle
                birleştiriyoruz. Bir vidadan boya tenekesine, bir kilit göbeğinden
                tesisat borusuna kadar ihtiyacınız olan her şey burada. Ve eğer
                aradığınız şey rafta yoksa, sizin için buluyoruz.
              </p>
              <p>
                Bizim için iş sadece satış değil, komşuluk. Doğru ürünü, doğru
                fiyata, doğru tavsiyeyle sunmak en önemli ilkemiz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6 text-center transition-all hover:bg-zinc-800 hover:border-orange-500/30"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
