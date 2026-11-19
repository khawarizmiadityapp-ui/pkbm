export interface AlbumPhotoItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryMockupItem {
  id: string;
  type: 'photo' | 'video';
  badge: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  href?: string;
  photoCount?: string;
  photos?: AlbumPhotoItem[];
  duration?: string;
}

export const PHOTO_GALLERY_ITEMS: GalleryMockupItem[] = [
  {
    id: 'foto-1',
    type: 'photo',
    badge: 'Lorem ipsum',
    title: 'Foto Album Kegiatan Belajar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem',
    thumbnail:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Kegiatan belajar warga belajar Paket A di ruang kelas PKBM',
    href: '/galeri/foto/foto-1',
    photoCount: '4 Foto',
    photos: [
      {
        id: 'p1-1',
        src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Suasana kegiatan belajar di ruang kelas PKBM',
        caption: 'Sesi pembelajaran tatap muka di kelas',
      },
      {
        id: 'p1-2',
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
        alt: 'Warga belajar menyimak materi bersama tutor',
        caption: 'Pendampingan dan diskusi materi kelas',
      },
      {
        id: 'p1-3',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
        alt: 'Kegiatan seminar dan evaluasi pembelajaran',
        caption: 'Evaluasi pembelajaran bersama peserta',
      },
      {
        id: 'p1-4',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Warga belajar mengerjakan latihan berbasis komputer',
        caption: 'Praktik literasi digital dan asesmen berbasis komputer',
      },
    ],
  },
  {
    id: 'foto-2',
    type: 'photo',
    badge: 'Lorem ipsum',
    title: 'Foto Album Diskusi Kelompok',
    description:
      'Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt ut Lore',
    thumbnail:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Diskusi kelompok warga belajar Paket B SMP di ruang kelas PKBM',
    href: '/galeri/foto/foto-2',
    photoCount: '4 Foto',
    photos: [
      {
        id: 'p2-1',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
        alt: 'Diskusi kelompok warga belajar Paket B',
        caption: 'Pemaparan materi oleh tutor PKBM',
      },
      {
        id: 'p2-2',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
        alt: 'Kolaborasi tugas kelompok warga belajar',
        caption: 'Kerja kelompok dan diskusi aktif',
      },
      {
        id: 'p2-3',
        src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Suasana belajar di kelas kesetaraan',
        caption: 'Pembelajaran interaktif di ruang kelas',
      },
      {
        id: 'p2-4',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Penggunaan perangkat komputer untuk modul belajar',
        caption: 'Akses modul digital mandiri',
      },
    ],
  },
  {
    id: 'foto-3',
    type: 'photo',
    badge: 'Lorem ipsum',
    title: 'Foto Album Ujian & Asesmen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    thumbnail:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    thumbnailAlt: 'Pendampingan pembelajaran Paket C SMA bersama tutor PKBM',
    href: '/galeri/foto/foto-3',
    photoCount: '4 Foto',
    photos: [
      {
        id: 'p3-1',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
        alt: 'Persiapan ujian kesetaraan Paket C',
        caption: 'Pembekalan peserta sebelum ujian dimulai',
      },
      {
        id: 'p3-2',
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
        alt: 'Pelaksanaan ujian tertulis di ruang ujian',
        caption: 'Pelaksanaan ujian tertulis warga belajar',
      },
      {
        id: 'p3-3',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
        alt: 'Sesi pengawasan dan arahan pengawas ujian',
        caption: 'Arahan tata tertib ujian kesetaraan',
      },
      {
        id: 'p3-4',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Pelaksanaan asesmen berbasis komputer PKBM',
        caption: 'Pelaksanaan asesmen berbasis komputer (ANBK)',
      },
    ],
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
