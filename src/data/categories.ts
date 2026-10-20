import { Wrench, PaintRoller, Pipette, Package, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  items: string[];
}

export const categories: Category[] = [
  {
    id: 'el-aletleri',
    title: 'El Aletleri',
    description:
      'Civata anahtarları, tornavidalar, kerpetenler, çekiçler ve daha fazlası. Güvenilir markalarla dayanıklı el aletleri.',
    image:
      'https://images.pexels.com/photos/19582317/pexels-photo-19582317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Wrench,
    items: [
      'Tornavida & Vidalama Setleri',
      'Civata Anahtarları & Pengneler',
      'Çekiçler & Keski Aletleri',
      'Şerit Metre & Ölçü Aletleri',
      'Testere & Kesme Aletleri',
    ],
  },
  {
    id: 'boya-yalitim',
    title: 'Boya & Yalıtım',
    description:
      'İç ve dış cephe boyaları, astarlar, su yalıtım malzemeleri ve rulo-fırça setleri. Evinizi koruyun, yenileyin.',
    image:
      'https://images.pexels.com/photos/6920160/pexels-photo-6920160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: PaintRoller,
    items: [
      'İç & Dış Cephe Boyaları',
      'Astarlar & Tinerler',
      'Su Yalıtım Malzemeleri',
      'Rulo & Fırça Setleri',
      'İzolasyon Bantları',
    ],
  },
  {
    id: 'tesisat-malzemeleri',
    title: 'Tesisat Malzemeleri',
    description:
      'PVC ve boru bağlantı parçaları, vana, musluk ve sıcak-soğuk su tesisat gereçleri. Ustaların tercihi.',
    image:
      'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Pipette,
    items: [
      'PVC & Boru Balantı Parçaları',
      'Vanalar & Musluklar',
      'Sıcak/Soğuk Su Tesisatı',
      'Tesisat Bantları & Contalar',
      'Pis Su & Tahliye Malzemeleri',
    ],
  },
  {
    id: 'hirdavat',
    title: 'Hırdavat',
    description:
      'Vida, cıvata, somun, pul ve binlerce küçük parça. Aradığınız her şey rafımızda, günlük ihtiyaçtan özel işlere.',
    image:
      'https://images.pexels.com/photos/38575500/pexels-photo-38575500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Package,
    items: [
      'Vida & Cıvata Setleri',
      'Somun & Pul Çeşitleri',
      'Kanca & Bant & Bağlantı',
      'Yapıştırıcı & Silikon',
      'Ev & Mutfak Gereçleri',
    ],
  },
  {
    id: 'kilit-sistemleri',
    title: 'Kilit Sistemleri',
    description:
      'Kapı kilitleri, asma kilitler, silindir ve emniyet sistemleri. Eviniz ve iş yeriniz için güvenlik çözümleri.',
    image:
      'https://images.pexels.com/photos/9554231/pexels-photo-9554231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Lock,
    items: [
      'Kapı Kilitleri & Silindirler',
      'Asma Kilitler',
      'Emniyet & Güvenlik Sistemleri',
      'Anahtar & Çoğaltma Hizmeti',
      'Kilit Göbekleri',
    ],
  },
];
