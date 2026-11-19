export interface GalleryMockupItem {
  id: string;
  type: 'photo' | 'video';
  badge: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  photoCount?: string;
  duration?: string;
}

export const PHOTO_GALLERY_ITEMS: GalleryMockupItem[] = [
  {
    id: 'foto-1',
    type: 'photo',
    badge: 'Lorem ipsum',
    title: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem',
    thumbnail:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Kegiatan belajar warga belajar Paket A di ruang kelas PKBM',
    photoCount: '10 Foto',
  },
  {
    id: 'foto-2',
    type: 'photo',
    badge: 'Lorem ipsum',
    title: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt ut Lore',
    thumbnail:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Diskusi kelompok warga belajar Paket B SMP di ruang kelas PKBM',
    photoCount: '10 Foto',
  },
  {
    id: 'foto-3',
    type: 'photo',
    badge: 'Lorem ipsum',
    title: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    thumbnail:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Pendampingan pembelajaran Paket C SMA bersama tutor PKBM',
    photoCount: '10 Foto',
  },
];

export const VIDEO_GALLERY_ITEMS: GalleryMockupItem[] = [
  {
    id: 'video-1',
    type: 'video',
    badge: 'Lorem ipsum',
    title: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem',
    thumbnail:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Dokumentasi video kegiatan belajar Paket A PKBM',
    duration: '03:24',
  },
  {
    id: 'video-2',
    type: 'video',
    badge: 'Lorem ipsum',
    title: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt ut Lore',
    thumbnail:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Dokumentasi video kegiatan pembelajaran Paket B PKBM',
    duration: '04:15',
  },
  {
    id: 'video-3',
    type: 'video',
    badge: 'Lorem ipsum',
    title: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    thumbnail:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Dokumentasi video pembelajaran dan diskusi Paket C PKBM',
    duration: '05:10',
  },
];
