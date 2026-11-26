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
    title: 'Paket A',
    subHeading: 'Program Paket A (Setara SD/MI)',
    paragraphs: [
      'Paket A adalah program pendidikan pada jalur nonformal setara dengan SD/MI bagi siapapun yang terkendala ke pendidikan formal atau memilih Pendidikan Kesetaraan untuk ketuntasan pendidikan.',
      'Pemegang Ijazah Program Paket A memiliki hak eligibilitas yang sama dengan pemegang ijazah SD/MI. Program ini menjadi fondasi penting bagi warga belajar untuk melanjutkan ke jenjang pendidikan dasar berikutnya.',
    ],
    requirementsTitle: 'Berkas Persyaratan Paket A:',
    features: [
      'Tidak ada batasan usia peserta',
      'Waktu belajar fleksibel',
      'Diterima dari seluruh Indonesia',
      'Tenaga pendidik berpengalaman',
    ],
    relatedPrograms: [
      {
        id: 'paket-b',
        title: 'Paket B',
        subtitle: 'Setara SMP / MTs',
        href: '/program/paket-b',
      },
      {
        id: 'paket-c',
        title: 'Paket C',
        subtitle: 'Setara SMA / MA',
        href: '/program/paket-c',
      },
    ],
  },
  'paket-b': {
    id: 'paket-b',
    slug: '/program/paket-b',
    title: 'Paket B',
    subHeading: 'Program Paket B (Setara SMP/MTS)',
    paragraphs: [
      'Paket A adalah program pendidikan pada jalur nonformal setara dengan SmP/MTS bagi siapapun yang terkendala ke pendidikan formal atau memilih Pendidikan Kesetaraan untuk ketuntasan pendidikan.',
      'Pemegang Ijazah Program Paket A memiliki hak eligibilitas yang sama dengan pemegang ijazah SD/MI. Program ini menjadi fondasi penting bagi warga belajar untuk melanjutkan ke jenjang pendidikan dasar berikutnya.',
    ],
    requirementsTitle: 'Berkas Persyaratan Paket B:',
    features: [
      'Tidak ada batasan usia peserta',
      'Waktu belajar fleksibel',
      'Diterima dari seluruh Indonesia',
      'Tenaga pendidik berpengalaman',
    ],
    relatedPrograms: [
      {
        id: 'paket-a',
        title: 'Paket A',
        subtitle: 'Setara SD / MI',
        href: '/program/paket-a',
      },
      {
        id: 'paket-c',
        title: 'Paket C',
        subtitle: 'Setara SMA / MA',
        href: '/program/paket-c',
      },
    ],
  },
  'paket-c': {
    id: 'paket-c',
    slug: '/program/paket-c',
    title: 'Paket C',
    subHeading: 'Program Paket C (Setara SMA/SMK)',
    paragraphs: [
      'Paket A adalah program pendidikan pada jalur nonformal setara dengan SMA/SMK bagi siapapun yang terkendala ke pendidikan formal atau memilih Pendidikan Kesetaraan untuk ketuntasan pendidikan.',
      'Pemegang Ijazah Program Paket A memiliki hak eligibilitas yang sama dengan pemegang ijazah SD/MI. Program ini menjadi fondasi penting bagi warga belajar untuk melanjutkan ke jenjang pendidikan dasar berikutnya.',
    ],
    requirementsTitle: 'Berkas Persyaratan Paket C:',
    features: [
      'Tidak ada batasan usia peserta',
      'Waktu belajar fleksibel',
      'Diterima dari seluruh Indonesia',
      'Tenaga pendidik berpengalaman',
    ],
    relatedPrograms: [
      {
        id: 'paket-b',
        title: 'Paket B',
        subtitle: 'Setara SMP / MTs',
        href: '/program/paket-b',
      },
      {
        id: 'paket-a',
        title: 'Paket A',
        subtitle: 'Setara SD / MI',
        href: '/program/paket-a',
      },
    ],
  },
};
