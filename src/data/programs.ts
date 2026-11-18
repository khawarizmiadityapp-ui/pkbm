export interface RelatedProgramItem {
  id: 'paket-a' | 'paket-b' | 'paket-c';
  title: string;
  subtitle: string;
  href: string;
}

export interface ProgramMockupData {
  id: 'paket-a' | 'paket-b' | 'paket-c';
  slug: string;
  title: string;
  badge?: string;
  subHeading: string;
  paragraphs: string[];
  requirementsTitle: string;
  features: string[];
  relatedPrograms: RelatedProgramItem[];
}

export const PROGRAMS_DATA: Record<'paket-a' | 'paket-b' | 'paket-c', ProgramMockupData> = {
  'paket-a': {
    id: 'paket-a',
    slug: '/program/paket-a',
    title: 'Kesetaraan Paket A',
    badge: 'Setara SD / MI',
    subHeading: 'Program Paket A (Setara SD/MI)',
    paragraphs: [
      'Paket A adalah program pendidikan pada jalur nonformal setara dengan SD/MI bagi siapapun yang terkendala ke pendidikan formal atau memilih Pendidikan Kesetaraan untuk ketuntasan pendidikan.',
      'Pemegang Ijazah Program Paket A memiliki hak eligibilitas yang sama dengan pemegang ijazah SD/MI. Program ini menjadi fondasi penting bagi warga belajar untuk melanjutkan ke jenjang pendidikan dasar berikutnya.',
    ],
    requirementsTitle: 'Berkas Persyaratan Paket A:',
    features: [
      'Ijazah resmi Negara',
      'Tidak ada batasan usia peserta',
      'Waktu belajar fleksibel',
      'Diterima dari seluruh Indonesia',
      'Tutor professional berpengalaman',
    ],
    relatedPrograms: [
      {
        id: 'paket-b',
        title: 'Kesetaraan Paket B',
        subtitle: 'Setara SMP / MTs',
        href: '/program/paket-b',
      },
      {
        id: 'paket-c',
        title: 'Kesetaraan Paket C',
        subtitle: 'Setara SMA / MA',
        href: '/program/paket-c',
      },
    ],
  },
  'paket-b': {
    id: 'paket-b',
    slug: '/program/paket-b',
    title: 'Kesetaraan Paket B',
    badge: 'Setara SD / MI',
    subHeading: 'Program Paket B (Setara SMP/MTS)',
    paragraphs: [
      'Paket A adalah program pendidikan pada jalur nonformal setara dengan SmP/MTS bagi siapapun yang terkendala ke pendidikan formal atau memilih Pendidikan Kesetaraan untuk ketuntasan pendidikan.',
      'Pemegang Ijazah Program Paket A memiliki hak eligibilitas yang sama dengan pemegang ijazah SD/MI. Program ini menjadi fondasi penting bagi warga belajar untuk melanjutkan ke jenjang pendidikan dasar berikutnya.',
    ],
    requirementsTitle: 'Berkas Persyaratan Paket B:',
    features: [
      'Ijazah resmi Negara',
      'Tidak ada batasan usia peserta',
      'Waktu belajar fleksibel',
      'Diterima dari seluruh Indonesia',
      'Tutor professional berpengalaman',
    ],
    relatedPrograms: [
      {
        id: 'paket-a',
        title: 'Kesetaraan Paket A',
        subtitle: 'Setara SD / MI',
        href: '/program/paket-a',
      },
      {
        id: 'paket-c',
        title: 'Kesetaraan Paket C',
        subtitle: 'Setara SMA / MA',
        href: '/program/paket-c',
      },
    ],
  },
  'paket-c': {
    id: 'paket-c',
    slug: '/program/paket-c',
    title: 'Kesetaraan Paket C',
    subHeading: 'Program Paket C (Setara SMA/SMK)',
    paragraphs: [
      'Paket A adalah program pendidikan pada jalur nonformal setara dengan SMA/SMK bagi siapapun yang terkendala ke pendidikan formal atau memilih Pendidikan Kesetaraan untuk ketuntasan pendidikan.',
      'Pemegang Ijazah Program Paket A memiliki hak eligibilitas yang sama dengan pemegang ijazah SD/MI. Program ini menjadi fondasi penting bagi warga belajar untuk melanjutkan ke jenjang pendidikan dasar berikutnya.',
    ],
    requirementsTitle: 'Berkas Persyaratan Paket C:',
    features: [
      'Ijazah resmi Negara',
      'Tidak ada batasan usia peserta',
      'Waktu belajar fleksibel',
      'Diterima dari seluruh Indonesia',
      'Tutor professional berpengalaman',
    ],
    relatedPrograms: [
      {
        id: 'paket-b',
        title: 'Kesetaraan Paket B',
        subtitle: 'Setara SMP / MTs',
        href: '/program/paket-b',
      },
      {
        id: 'paket-a',
        title: 'Kesetaraan Paket A',
        subtitle: 'Setara SD / MI',
        href: '/program/paket-a',
      },
    ],
  },
};
