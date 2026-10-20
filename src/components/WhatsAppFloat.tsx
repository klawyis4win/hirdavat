import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/data/store';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-green-500 px-5 py-4 text-white font-semibold shadow-xl shadow-green-500/40 transition-all hover:bg-green-600 hover:scale-105 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">Sipariş / Bilgi Al</span>
    </a>
  );
}
