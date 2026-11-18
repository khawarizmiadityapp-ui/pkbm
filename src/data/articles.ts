export type ArticleCategory = 'EDUKASI' | 'NEWS' | 'PPDB' | 'SNPMB';

export interface Article {
  id: string;
  slug: string;
  category: ArticleCategory;
  day: string;
  month: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
}

export interface CategoryFilterOption {
  value: 'ALL' | ArticleCategory;
  label: string;
  inactiveClasses: string;
  activeClasses: string;
}

export const CATEGORY_FILTERS: CategoryFilterOption[] = [
  {
    value: 'ALL',
    label: 'Semua',
    inactiveClasses:
      'bg-white text-[#102F4D] border-[#DCE3EA] hover:bg-[#EDF2F7]',
    activeClasses: 'bg-[#102F4D] text-white border-[#102F4D]',
  },
  {
    value: 'EDUKASI',
    label: 'EDUKASI',
    inactiveClasses:
      'bg-white text-[#A86D0A] border-[#E9A820]/70 hover:bg-[#FEF8EB]',
    activeClasses: 'bg-[#B87A0E] text-white border-[#B87A0E]',
  },
  {
    value: 'NEWS',
    label: 'NEWS',
    inactiveClasses:
      'bg-white text-[#C84B17] border-[#D96B38]/60 hover:bg-[#FFF4EE]',
    activeClasses: 'bg-[#C84B17] text-white border-[#C84B17]',
  },
  {
    value: 'PPDB',
    label: 'PPDB',
    inactiveClasses:
      'bg-white text-[#1D6FA5] border-[#3B8CC4]/60 hover:bg-[#EFF7FC]',
    activeClasses: 'bg-[#1D6FA5] text-white border-[#1D6FA5]',
  },
  {
    value: 'SNPMB',
    label: 'SNPMB',
    inactiveClasses:
      'bg-white text-[#0E7490] border-[#2693AF]/60 hover:bg-[#ECFAFD]',
    activeClasses: 'bg-[#0E7490] text-white border-[#0E7490]',
  },
];

export const CATEGORY_BADGE_STYLES: Record<ArticleCategory, string> = {
  NEWS: 'bg-[#C84B17] text-white',
  EDUKASI: 'bg-[#B87A0E] text-white',
  PPDB: 'bg-[#1D6FA5] text-white',
  SNPMB: 'bg-[#0E7490] text-white',
};

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'agenda-november-fun-sport-badminton-dan-outbound-2026',
    category: 'NEWS',
    day: '13',
    month: 'NOV',
    title:
      'Agenda November: Fun Sport Badminton 14 November dan Outbound PKBM 21 November 2026',
    description:
      'Informasi kegiatan olahraga dan outbound sebagai bagian dari aktivitas ekstrakurikuler peserta didik PKBM.',
    thumbnail: '/images/blog/article-badminton-outbound.svg',
    thumbnailAlt:
      'Poster Agenda November Fun Sport Badminton dan Outbound PKBM 2026',
  },
  {
    id: 'art-2',
    slug: 'pkbm-buka-perpustakaan-digital-perpus-pkbm-id',
    category: 'NEWS',
    day: '13',
    month: 'NOV',
    title:
      'PKBM Buka Perpustakaan Digital perpus.pkbm.id: Ribuan Modul dan Buku Bisa Dibaca Gratis',
    description:
      'PKBM menghadirkan akses perpustakaan digital untuk mendukung kegiatan belajar masyarakat.',
    thumbnail: '/images/blog/article-perpustakaan-digital.svg',
    thumbnailAlt:
      'Banner Perpustakaan Digital PKBM perpus.pkbm.id dengan koleksi modul belajar',
  },
  {
    id: 'art-3',
    slug: 'ekstrakurikuler-barista-batch-5-pkbm-resmi-dimulai',
    category: 'NEWS',
    day: '13',
    month: 'NOV',
    title: 'Ekstrakurikuler Barista Batch 5 PKBM Resmi Dimulai',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    thumbnail: '/images/blog/article-kelas-barista.svg',
    thumbnailAlt:
      'Banner Program Ekstrakurikuler Kelas Barista Batch 5 PKBM',
  },
  {
    id: 'art-4',
    slug: 'mengenal-pendidikan-kesetaraan-paket-a-b-dan-c',
    category: 'EDUKASI',
    day: '10',
    month: 'NOV',
    title: 'Mengenal Pendidikan Kesetaraan Paket A, B, dan C',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    thumbnail: '/images/blog/article-pendidikan-kesetaraan.svg',
    thumbnailAlt:
      'Ilustrasi Informasi Pendidikan Kesetaraan Paket A, B, dan C PKBM',
  },
  {
    id: 'art-5',
    slug: 'informasi-penerimaan-peserta-didik-baru-pkbm',
    category: 'PPDB',
    day: '05',
    month: 'NOV',
    title: 'Informasi Penerimaan Peserta Didik Baru PKBM',
    description:
      'Informasi pendaftaran dan persyaratan calon peserta didik baru.',
    thumbnail: '/images/blog/article-ppdb-pkbm.svg',
    thumbnailAlt:
      'Banner Informasi Penerimaan Peserta Didik Baru PKBM',
  },
  {
    id: 'art-6',
    slug: 'persiapan-melanjutkan-pendidikan-ke-perguruan-tinggi',
    category: 'SNPMB',
    day: '02',
    month: 'NOV',
    title: 'Persiapan Melanjutkan Pendidikan ke Perguruan Tinggi',
    description:
      'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis.',
    thumbnail: '/images/blog/article-persiapan-snpmb.svg',
    thumbnailAlt:
      'Ilustrasi Panduan Persiapan SNPMB dan Perguruan Tinggi PKBM',
  },
];
