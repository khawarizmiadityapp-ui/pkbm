export type ProfileId = 'tentang-pkbm' | 'visi-misi';

export interface ProfileSectionBlock {
  heading: string;
  paragraphs?: string[];
}

export interface ProfileMockupData {
  id: ProfileId;
  title: string;
  breadcrumbLabel: string;
  href: string;
  sections: ProfileSectionBlock[];
}

export interface ProfileNavItem {
  id: ProfileId;
  label: string;
  href: string;
  icon: 'file' | 'target';
}

export const PROFILE_NAV_ITEMS: ProfileNavItem[] = [
  {
    id: 'tentang-pkbm',
    label: 'Tentang PKBM',
    href: '/profil',
    icon: 'file',
  },
  {
    id: 'visi-misi',
    label: 'Visi & Misi',
    href: '/visi-misi',
    icon: 'target',
  },
];

const LOREM_PARAGRAPHS = [
  'Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet lorem ipsum',
  'Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet lorem ipsum',
  'Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet lorem ipsum',
  'Lorem ipsum dolor sit amet lorem ipsum Lorem ipsum dolor sit amet lorem ipsum',
];

export const PROFILE_DATA: Record<ProfileId, ProfileMockupData> = {
  'tentang-pkbm': {
    id: 'tentang-pkbm',
    title: 'Tentang PKBM',
    breadcrumbLabel: 'Tentang PKBM',
    href: '/profil',
    sections: [
      {
        heading: 'Tentang PKBM ',
        paragraphs: LOREM_PARAGRAPHS,
      },
      {
        heading: 'Legalitas dan Kredibilitas Lembaga',
        paragraphs: [],
      },
    ],
  },
  'visi-misi': {
    id: 'visi-misi',
    title: 'Visi & Misi',
    breadcrumbLabel: 'Visi & Misi',
    href: '/visi-misi',
    sections: [
      {
        heading: 'VISI MISI PKBM ',
        paragraphs: LOREM_PARAGRAPHS,
      },
    ],
  },
};
