/**
 * All business content of the landing page lives here.
 * Edit this file to change the phone number, cities or conditions.
 *
 * Note: index.html (title, meta tags, JSON-LD, <noscript>) and
 * public/manifest.json repeat the phone number — update them too.
 */

/** Phone number as people read it. */
const phoneDisplay = '0703 214 161';
/** Phone number in international format, digits only after "+". */
const phoneInternational = '+996703214161';
/** Pre-filled first message for WhatsApp. */
const whatsappText = 'Здравствуйте! Нужен эвакуатор.';

export const site = {
  service: 'Эвакуатор',
  tagline: 'По городам и по области',

  phone: {
    display: phoneDisplay,
    international: phoneInternational,
    href: `tel:${phoneInternational}`,
  },

  whatsapp: {
    href: `https://wa.me/${phoneInternational.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappText)}`,
    text: whatsappText,
  },

  hours: '24/7',

  cities: ['Бишкек', 'Ош', 'Джалал-Абад', 'Талас', 'Нарын', 'Иссык-Куль'],
  citiesTail: 'и по всей области',

  values: ['Быстро', 'Надёжно', 'Доступно'],

  conditions: {
    heading: 'Условия',
    hours: { title: 'Круглосуточно', text: 'Работаем 24/7, без выходных' },
    coverage: { title: 'По всему Кыргызстану' },
    price: {
      title: 'До 5 км — 2500 сом',
      text: 'Дальше — по договорённости. Уточните по телефону или в WhatsApp',
    },
  },

  contact: {
    heading: 'Вызвать эвакуатор',
    note: 'Звоните в любое время — 24/7',
    whatsappLabel: 'Написать в WhatsApp',
  },
} as const;

export type Site = typeof site;
