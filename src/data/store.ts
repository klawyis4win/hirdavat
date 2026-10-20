export const storeInfo = {
  name: 'Yılmaz Hırdavat',
  tagline: 'Mahallenizin Güvenilir Hırdavatçısı',
  phone: '+90 212 555 12 34',
  phoneHref: 'tel:+902125551234',
  whatsappNumber: '902125551234',
  whatsappMessage:
    'Merhaba, ürünleriniz hakkında bilgi almak ve sipariş vermek istiyorum.',
  email: 'info@yilmazhirdavat.com',
  address: 'Atatürk Mah. Sanayi Cad. No: 42, Karadeniz / İstanbul',
  hours: [
    { day: 'Pazartesi – Cuma', time: '08:30 – 19:00' },
    { day: 'Cumartesi', time: '09:00 – 18:00' },
    { day: 'Pazar', time: '10:00 – 15:00' },
  ],
  mapEmbedSrc:
    'https://www.openstreetmap.org/export/embed.html?bbox=28.85%2C41.10%2C28.90%2C41.12&layer=mapnik&marker=41.11%2C28.875',
  mapLink: 'https://www.openstreetmap.org/?mlat=41.11&mlon=28.875#map=16/41.11/28.875',
  established: 1998,
};

export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? storeInfo.whatsappMessage);
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${text}`;
}
