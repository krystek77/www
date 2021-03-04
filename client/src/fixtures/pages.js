const pages = [
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
  { id: '7', label: 'chemia', to: '/chemia' },
  { id: '8', label: 'technologie', to: '/technologie', links: ['5', '6'] },
  { id: '9', label: 'o nas', to: '/o-nas' },
  { id: '10', label: 'kontakt', to: '/kontakt', links: [] },
];
const links = [
  {
    id: '1',
    label: 'Gościnność',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: { src: 'goscinnosc', alt: 'Hotele,pensjonaty' },
    url: '/goscinnosc',
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
    url: '/opieka-dlugoterminowa',
    isIcon: false,
  },
  {
    id: '3',
    label: 'Szpitale',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: { src: 'szpital', alt: 'Szpitale, kliniki' },
    url: '/szpitale',
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
    url: '/zaklady-pracy',
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
    url: '/cascade-drum',
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
    url: '/power-wash',
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
    url: '/pralnice',
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
    url: '/pralnicowirowki',
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
    url: '/suszarki',
    isIcon: true,
  },
];

export { pages, links };
