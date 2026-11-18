export type AgendaCategory = 'Olahraga' | 'Webinar' | 'Lainnya';

export type AgendaStatus = 'upcoming' | 'completed';

export interface AgendaItem {
  id: string;
  slug: string;
  category: AgendaCategory;
  status: AgendaStatus;
  title: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  organizer: string;
  feeLabel: string;
  poster: string;
  posterAlt: string;
}

export interface AgendaFilterOption {
  value: 'ALL' | AgendaCategory;
  label: string;
}

export const AGENDA_FILTERS: AgendaFilterOption[] = [
  { value: 'ALL', label: 'Semua' },
  { value: 'Olahraga', label: 'Olahraga' },
  { value: 'Webinar', label: 'Webinar' },
  { value: 'Lainnya', label: 'Lainnya' },
];

export const AGENDA_CATEGORY_BADGES: Record<AgendaCategory, string> = {
  Olahraga: 'bg-[#EFF7FC] text-[#1D6FA5] border border-[#1D6FA5]/20',
  Webinar: 'bg-[#ECFAFD] text-[#0E7490] border border-[#0E7490]/20',
  Lainnya: 'bg-[#FEF8EB] text-[#A86D0A] border border-[#E9A820]/30',
};

export const AGENDAS: AgendaItem[] = [
  {
    id: 'agenda-1',
    slug: 'outbound-pkbm-intan-2026',
    category: 'Olahraga',
    status: 'upcoming',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    dateLabel: 'Lorem ipsum',
    timeLabel: 'Dolor sit amet',
    location: 'Lorem ipsum dolor',
    organizer: 'Lorem ipsum',
    feeLabel: 'Lorem ipsum dolor',
    poster: '/images/agenda/agenda-outbound-2026.svg',
    posterAlt: 'Poster Outbound PKBM INTAN 2026 Pembelajaran Luar Kelas di Grafika Cikole Lembang',
  },
  {
    id: 'agenda-2',
    slug: 'kelas-barista-batch-5',
    category: 'Lainnya',
    status: 'completed',
    title: 'Ut enim ad minim veniam, quis nostrud exercitation',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    dateLabel: 'Lorem ipsum',
    timeLabel: 'Dolor sit amet',
    location: 'Lorem ipsum dolor',
    organizer: 'Lorem ipsum',
    feeLabel: 'Lorem ipsum dolor',
    poster: '/images/agenda/agenda-kelas-barista.svg',
    posterAlt: 'Poster Ekstrakurikuler Kelas Barista Batch 5 PKBM INTAN',
  },
  {
    id: 'agenda-3',
    slug: 'in-depth-learning-scam-ready-asean',
    category: 'Webinar',
    status: 'completed',
    title: 'Excepteur sint occaecat cupidatat non proident',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
    dateLabel: 'Lorem ipsum',
    timeLabel: 'Dolor sit amet',
    location: 'Lorem ipsum dolor',
    organizer: 'Lorem ipsum',
    feeLabel: 'Lorem ipsum dolor',
    poster: '/images/agenda/agenda-scam-ready-asean.svg',
    posterAlt: 'Poster Webinar In-Depth Learning Scam Ready ASEAN Foundation',
  },
  {
    id: 'agenda-4',
    slug: 'fun-sport-badminton-november-2026',
    category: 'Olahraga',
    status: 'completed',
    title: 'Nemo enim ipsam voluptatem quia voluptas sit',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci.',
    dateLabel: 'Lorem ipsum',
    timeLabel: 'Dolor sit amet',
    location: 'Lorem ipsum dolor',
    organizer: 'Lorem ipsum',
    feeLabel: 'Lorem ipsum dolor',
    poster: '/images/agenda/agenda-fun-sport-badminton.svg',
    posterAlt: 'Poster Fun Sport Badminton PKBM INTAN November 2026',
  },
  {
    id: 'agenda-5',
    slug: 'webinar-sosialisasi-persiapan-snpmb-2026',
    category: 'Webinar',
    status: 'upcoming',
    title: 'Quis autem vel eum iure reprehenderit qui in ea',
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.',
    dateLabel: 'Lorem ipsum',
    timeLabel: 'Dolor sit amet',
    location: 'Lorem ipsum dolor',
    organizer: 'Lorem ipsum',
    feeLabel: 'Lorem ipsum dolor',
    poster: '/images/agenda/agenda-webinar-snpmb.svg',
    posterAlt: 'Poster Webinar Persiapan SNPMB dan Perguruan Tinggi PKBM INTAN',
  },
  {
    id: 'agenda-6',
    slug: 'workshop-literasi-perpustakaan-digital',
    category: 'Lainnya',
    status: 'upcoming',
    title: 'At vero eos et accusamus et iusto odio dignissimos',
    description:
      'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.',
    dateLabel: 'Lorem ipsum',
    timeLabel: 'Dolor sit amet',
    location: 'Lorem ipsum dolor',
    organizer: 'Lorem ipsum',
    feeLabel: 'Lorem ipsum dolor',
    poster: '/images/agenda/agenda-workshop-literasi.svg',
    posterAlt: 'Poster Workshop Literasi Digital Perpustakaan PKBM INTAN',
  },
];
