export type ArticleCategory = 'EDUKASI' | 'NEWS' | 'PPDB' | 'SNPMB';

export interface Article {
  id: string;
  slug: string;
  category: ArticleCategory;
  day: string;
  month: string;
  publishedAt: string;
  author: string;
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
    publishedAt: '13 Nov 2026',
    author: 'Admin PKBM INTAN',
    title:
      'Agenda November: Fun Sport Badminton 14 November dan Outbound PKBM INTAN 21 November 2026',
    description:
      'Informasi kegiatan olahraga dan outbound sebagai bagian dari aktivitas ekstrakurikuler peserta didik PKBM INTAN.',
    thumbnail: '/images/blog/article-badminton-outbound.svg',
    thumbnailAlt:
      'Poster Agenda November Fun Sport Badminton dan Outbound PKBM INTAN 2026',
  },
  {
    id: 'art-2',
    slug: 'pkbm-intan-buka-perpustakaan-digital-perpus-pkbm-id',
    category: 'NEWS',
    day: '13',
    month: 'NOV',
    publishedAt: '13 Nov 2026',
    author: 'Admin PKBM INTAN',
    title:
      'PKBM INTAN Buka Perpustakaan Digital perpus.pkbm.id: Ribuan Modul dan Buku Bisa Dibaca Gratis',
    description:
      'PKBM INTAN menghadirkan akses perpustakaan digital untuk mendukung kegiatan belajar masyarakat.',
    thumbnail: '/images/blog/article-perpustakaan-digital.svg',
    thumbnailAlt:
      'Banner Perpustakaan Digital PKBM INTAN perpus.pkbm.id dengan koleksi modul belajar',
  },
  {
    id: 'art-3',
    slug: 'ekstrakurikuler-barista-batch-5-pkbm-intan-resmi-dimulai',
    category: 'NEWS',
    day: '13',
    month: 'NOV',
    publishedAt: '13 Nov 2026',
    author: 'Admin PKBM INTAN',
    title: 'Ekstrakurikuler Barista Batch 5 PKBM INTAN Resmi Dimulai',
    description:
      'Program pelatihan keterampilan barista untuk meningkatkan kompetensi dan pengalaman praktis peserta didik.',
    thumbnail: '/images/blog/article-kelas-barista.svg',
    thumbnailAlt:
      'Banner Program Ekstrakurikuler Kelas Barista Batch 5 PKBM INTAN',
  },
  {
    id: 'art-4',
    slug: 'mengenal-pendidikan-kesetaraan-paket-a-b-dan-c',
    category: 'EDUKASI',
    day: '10',
    month: 'NOV',
    publishedAt: '10 Nov 2026',
    author: 'Tim Akademik',
    title: 'Mengenal Pendidikan Kesetaraan Paket A, B, dan C',
    description:
      'Informasi mengenai pendidikan kesetaraan dan kesempatan belajar bagi masyarakat.',
    thumbnail: '/images/blog/article-pendidikan-kesetaraan.svg',
    thumbnailAlt:
      'Ilustrasi Informasi Pendidikan Kesetaraan Paket A, B, dan C PKBM INTAN',
  },
  {
    id: 'art-5',
    slug: 'informasi-penerimaan-peserta-didik-baru-pkbm-intan',
    category: 'PPDB',
    day: '05',
    month: 'NOV',
    publishedAt: '05 Nov 2026',
    author: 'Panitia PPDB',
    title: 'Informasi Penerimaan Peserta Didik Baru PKBM INTAN',
    description:
      'Informasi pendaftaran dan persyaratan calon peserta didik baru.',
    thumbnail: '/images/blog/article-ppdb-pkbm-intan.svg',
    thumbnailAlt:
      'Banner Informasi Penerimaan Peserta Didik Baru PKBM INTAN',
  },
  {
    id: 'art-6',
    slug: 'persiapan-melanjutkan-pendidikan-ke-perguruan-tinggi',
    category: 'SNPMB',
    day: '02',
    month: 'NOV',
    publishedAt: '02 Nov 2026',
    author: 'Bimbingan Karir',
    title: 'Persiapan Melanjutkan Pendidikan ke Perguruan Tinggi',
    description:
      'Informasi dan panduan persiapan pendidikan lanjutan bagi peserta didik.',
    thumbnail: '/images/blog/article-persiapan-snpmb.svg',
    thumbnailAlt:
      'Ilustrasi Panduan Persiapan SNPMB dan Perguruan Tinggi PKBM INTAN',
  },
];
