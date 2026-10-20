import { Truck, ShieldCheck, Headphones, Tag } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Orijinal & Garantili Ürünler',
    desc: 'Sadece güvenilir markaların orijinal ürünlerini satıyoruz. Her ürün garantili.',
  },
  {
    icon: Tag,
    title: 'Uygun Fiyat, Net İş',
    desc: 'Mahalle esnafı fiyatlandırması. sürpriz yok, kalite var. Toptan ve perakende.',
  },
  {
    icon: Truck,
    title: 'Hızlı Tedarik',
    desc: 'Rafımızda olmayan ürünü sizin için 24 saat içinde tedarik ediyoruz.',
  },
  {
    icon: Headphones,
    title: 'Uzman Destek',
    desc: 'Hangi malzemeyi ne için kullanacağınızı bilmiyorsanız, bizden sorun.',
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
