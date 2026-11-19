export type AgendaCategory = 'Webinar' | 'Edukasi' | 'Olahraga' | 'Lainnya';

export type AgendaStatus = 'upcoming' | 'completed';

export interface AgendaItem {
  id: string;
  slug: string;
  category: AgendaCategory;
  badgeLabel?: string;
  status: AgendaStatus;
  isFree?: boolean;
  title: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  modeLabel: 'Offline' | 'Online' | 'Hybrid';
  location: string;
  organizer: string;
  feeLabel: string;
  statusNote: string;
  actionLabel: string;
  poster: string;
  posterAlt: string;
}

export interface AgendaFilterOption {
  value: 'ALL' | AgendaCategory;
  label: string;
}

export const AGENDA_FILTERS: AgendaFilterOption[] = [
  { value: 'ALL', label: 'Semua' },
  { value: 'Webinar', label: 'Webinar' },
  { value: 'Edukasi', label: 'Edukasi' },
  { value: 'Olahraga', label: 'Olahraga' },
  { value: 'Lainnya', label: 'Lainnya' },
];

export const AGENDA_CATEGORY_BADGES: Record<AgendaCategory, string> = {
  Edukasi: 'bg-[#F97316] text-white',
  Olahraga: 'bg-[#10B981] text-white',
  Webinar: 'bg-[#0284C7] text-white',
  Lainnya: 'bg-[#E9A820] text-white',
};

export const AGENDAS: AgendaItem[] = [
  {
    id: 'agenda-1',
    slug: 'tka-2026-paket-c',
    category: 'Edukasi',
    badgeLabel: 'ASESMEN',
    status: 'completed',
    title: 'Tes Kemampuan Akademik (TKA) 2026 Paket C',
    description:
      'Pelaksanaan Tes Kemampuan Akademik bagi warga belajar Paket C sebagai persiapan evaluasi akhir pendidikan kesetaraan.',
    dateLabel: '31 Okt 2026',
    timeLabel: '07:00',
    modeLabel: 'Offline',
    location: 'SMP Negeri 17 Kota Bandung (Jl. Pacuan Kuda, Sukamiskin, Kec. Arcamanik, Kota Bandung)',
    organizer: 'PKBM',
    feeLabel: 'Gratis untuk Warga Belajar',
    statusNote: 'Status: Selesai diuji',
    actionLabel: 'Rincian Informasi',
    poster: '/images/agenda/agenda-outbound-2026.svg',
    posterAlt: 'Poster Tes Kemampuan Akademik (TKA) 2026 Paket C',
  },
  {
    id: 'agenda-2',
    slug: 'mabar-fun-sport-badminton',
    category: 'Olahraga',
    badgeLabel: 'OLAHRAGA',
    status: 'completed',
    isFree: true,
    title: 'MABAR FUN SPORT BADMINTON PKBM',
    description:
      'Kegiatan olahraga bersama warga belajar dan tutor PKBM untuk mempererat kebersamaan serta menjaga kebugaran.',
    dateLabel: '08 Aug 2026',
    timeLabel: '13:00',
    modeLabel: 'Offline',
    location: 'Progresif Futsal (Jl. Soekarno Hatta No. 785A - Kota Bandung)',
    organizer: 'PKBM',
    feeLabel: 'Gratis untuk Warga',
    statusNote: 'Gratis untuk Warga',
    actionLabel: 'Dokumentasi',
    poster: '/images/agenda/agenda-fun-sport-badminton.svg',
    posterAlt: 'Poster Mabar Fun Sport Badminton PKBM',
  },
  {
    id: 'agenda-3',
    slug: 'funsport-25-jul-2026',
    category: 'Olahraga',
    badgeLabel: 'OLAHRAGA',
    status: 'completed',
    isFree: true,
    title: 'FunSport 25 Jul 2026 : Badminton Time!',
    description:
      'Sesi latihan dan pertandingan persahabatan badminton warga belajar PKBM bersama komunitas.',
    dateLabel: '25 Jul 2026',
    timeLabel: '13:00',
    modeLabel: 'Offline',
    location: 'Progresif Futsal (Jl. Soekarno Hatta No.785A, Babakan Penghulu, Kec. Cinambo, Kota Bandung)',
    organizer: 'PKBM',
    feeLabel: 'Gratis',
    statusNote: 'Kegiatan Terlaksana',
    actionLabel: 'Dokumentasi',
    poster: '/images/agenda/agenda-fun-sport-badminton.svg',
    posterAlt: 'Poster FunSport 25 Jul 2026 Badminton Time PKBM',
  },
  {
    id: 'agenda-4',
    slug: 'webinar-sosialisasi-persiapan-snpmb-2026',
    category: 'Webinar',
    badgeLabel: 'WEBINAR',
    status: 'upcoming',
    isFree: true,
    title: 'Webinar Sosialisasi & Persiapan SNPMB 2026',
    description:
      'Pembekalan jalur masuk perguruan tinggi negeri dan strategi pemilihan jurusan bagi warga belajar Paket C.',
    dateLabel: '14 Nov 2026',
    timeLabel: '09:00',
    modeLabel: 'Online',
    location: 'Zoom Meeting & Live YouTube PKBM',
    organizer: 'Tim Bimbingan Akademik PKBM',
    feeLabel: 'Gratis untuk Warga',
    statusNote: 'Pendaftaran Dibuka',
    actionLabel: 'Rincian Informasi',
    poster: '/images/agenda/agenda-webinar-snpmb.svg',
    posterAlt: 'Poster Webinar Persiapan SNPMB dan Perguruan Tinggi PKBM',
  },
  {
    id: 'agenda-5',
    slug: 'in-depth-learning-scam-ready-asean',
    category: 'Webinar',
    badgeLabel: 'WEBINAR',
    status: 'completed',
    title: 'In-Depth Learning Scam Ready ASEAN Foundation',
    description:
      'Edukasi literasi keamanan digital dan pencegahan penipuan daring untuk warga belajar dan masyarakat umum.',
    dateLabel: '19 Sep 2026',
    timeLabel: '10:00',
    modeLabel: 'Online',
    location: 'Zoom Meeting PKBM',
    organizer: 'PKBM x ASEAN Foundation',
    feeLabel: 'Gratis',
    statusNote: 'Kegiatan Terlaksana',
    actionLabel: 'Dokumentasi',
    poster: '/images/agenda/agenda-scam-ready-asean.svg',
    posterAlt: 'Poster Webinar In-Depth Learning Scam Ready ASEAN Foundation',
  },
  {
    id: 'agenda-6',
    slug: 'kelas-barista-batch-5',
    category: 'Lainnya',
    badgeLabel: 'LAINNYA',
    status: 'completed',
    title: 'Ekstrakurikuler Kelas Barista & Kewirausahaan Batch 5',
    description:
      'Pelatihan keterampilan meracik kopi dan manajemen usaha kafe bagi warga belajar PKBM.',
    dateLabel: '22 Agu 2026',
    timeLabel: '09:30',
    modeLabel: 'Offline',
    location: 'Workshop Kewirausahaan PKBM, Kota Bandung',
    organizer: 'Divisi Keterampilan PKBM',
    feeLabel: 'Subsidi Lembaga',
    statusNote: 'Kegiatan Terlaksana',
    actionLabel: 'Dokumentasi',
    poster: '/images/agenda/agenda-kelas-barista.svg',
    posterAlt: 'Poster Ekstrakurikuler Kelas Barista Batch 5 PKBM',
  },
];
