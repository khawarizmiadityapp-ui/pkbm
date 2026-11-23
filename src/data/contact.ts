export interface ContactInfoItem {
  id: 'email' | 'phone' | 'hours' | 'address';
  label: string;
  value: string;
}

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'phone',
    label: 'Telepon / WhatsApp',
    value: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'hours',
    label: 'Jam Operasional',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 'address',
    label: 'Alamat',
    value: 'Lorem ipsum dolor sit amet, Kota Bandung, Jawa Barat',
  },
];

export const WHATSAPP_NUMBER = '6285722459994';

export const CONTACT_LINKS = {
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}`,
  mapEmbedSrc:
    'https://maps.google.com/maps?q=Kota%20Bandung,%20Jawa%20Barat&t=&z=12&ie=UTF8&iwloc=&output=embed',
  mapExternalHref:
    'https://www.google.com/maps/place/Bandung,+Kota+Bandung,+Jawa+Barat/',
} as const;
