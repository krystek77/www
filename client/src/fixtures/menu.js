const menu = [
  { id: '1', label: 'klienci', to: '/klienci', links: ['1', '2', '3', '4'] },
  {
    id: '2',
    label: 'urządzenia pralnicze',
    to: '/urzadzenia-pralnicze',
    links: ['7', '8', '9'],
  },
  { id: '3', label: 'transport', to: '/transport', links: [] },
  {
    id: '4',
    label: 'składowanie prania',
    to: '/skladowanie-prania',
    links: [],
  },
  {
    id: '5',
    label: 'prasowanie fasonowe',
    to: '/prasowanie-fasonowe',
    links: [],
  },
  { id: '6', label: 'pompy', to: '/pompy', links: [] },
  { id: '7', label: 'chemia', to: '/chemia', links: [] },
  { id: '8', label: 'technologie', to: '/technologie', links: ['5', '6'] },
  { id: '9', label: 'o nas', to: '/o-nas', links: [] },
  { id: '10', label: 'kontakt', to: '/kontakt', links: [] },
];
const links = [
  {
    id: '1',
    label: 'Gościnność',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: { src: 'goscinnosc', alt: 'Hotele,pensjonaty' },
    to: '/goscinnosc',
    isIcon: false,
  },
  {
    id: '2',
    label: 'Opieka długoterminowa',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'opieka-dlugoterminowa',
      alt: 'Domy opieki, domy pomocy społecznej',
    },
    to: '/opieka-dlugoterminowa',
    isIcon: false,
  },
  {
    id: '3',
    label: 'Szpitale',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: { src: 'szpital', alt: 'Szpitale, kliniki' },
    to: '/szpitale',
    isIcon: false,
  },
  {
    id: '4',
    label: 'Zakłady pracy',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'zaklad-pracy',
      alt: 'Firmy produkcyjne, spożywcze, mleczarnie, ubojnie',
    },
    to: '/zaklady-pracy',
    isIcon: false,
  },
  {
    id: '5',
    label: 'Cascad drum',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'cascade-drum',
      alt: 'cascade drum',
    },
    to: '/cascade-drum',
    isIcon: true,
  },
  {
    id: '6',
    label: 'PowerWASH',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'power-wash',
      alt: 'pawer-wash',
    },
    to: '/power-wash',
    isIcon: true,
  },
  {
    id: '7',
    label: 'Pralnice',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'pralnice',
      alt: 'pralnice bębnowe, bez wirowania',
    },
    to: '/pralnice',
    isIcon: true,
  },
  {
    id: '8',
    label: 'Pralnicowirówki',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'pralnicowirowki',
      alt: 'pralnicowirówki normalnoobrotowe, szybkoobrotowe, wysokoobrotowe',
    },
    to: '/pralnicowirowki',
    isIcon: true,
  },
  {
    id: '9',
    label: 'Suszarki',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'suszarki',
      alt: 'suszarki bębnowe, komorowe, szafy suszące',
    },
    to: '/suszarki',
    isIcon: true,
  },
];

export { menu, links };
