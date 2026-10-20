import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { categories } from '@/data/categories';
import { buildWhatsAppLink } from '@/data/store';

export default function Categories() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <section id="kategoriler" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Ürün Kategorileri
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-zinc-900">
            Aradığınız Her Şey Raflarımızda
          </h2>
          <p className="mt-4 text-zinc-600">
            Beş ana kategoride binlerce ürün. İhtiyacınızı belirleyin, gerisini
            bize bırakın.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category detail */}
        <div
          key={active.id}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-scale-in"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={active.image}
              alt={active.title}
              className="h-72 w-full object-cover sm:h-96 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/90 backdrop-blur px-3 py-2">
              <active.icon className="h-5 w-5 text-orange-600" />
              <span className="font-semibold text-zinc-900">{active.title}</span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900">
              {active.title}
            </h3>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              {active.description}
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-zinc-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={buildWhatsAppLink(
                `Merhaba, "${active.title}" kategorisindeki ürünler hakkında bilgi almak istiyorum.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg group"
            >
              Bu kategoride bilgi al
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
