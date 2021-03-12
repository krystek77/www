import { connectMenuAndLinks } from '../utils/func';
const menu = [
  { id: '1', label: 'klienci', to: '/klienci', links: ['1', '2', '3', '4'] },
  {
    id: '2',
    label: 'urządzenia pralnicze',
    to: '/urzadzenia-pralnicze',
    links: ['7', '8', '9', '13', '14', '15'],
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
  {
    id: '8',
    label: 'technologie',
    to: '/technologie',
    links: ['5', '6', '10', '11', '12'],
  },
  { id: '9', label: 'wiadomości', to: '/wiadomosci', links: [] },
  { id: '10', label: 'o nas', to: '/o-nas', links: [] },
  { id: '11', label: 'kontakt', to: '/kontakt', links: [] },
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
      src: 'domy_pomocy_spolecznej',
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
    image: { src: 'szpitale_i_kliniki', alt: 'Szpitale, kliniki' },
    to: '/szpitale',
    isIcon: false,
  },
  {
    id: '4',
    label: 'Zakłady pracy',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'przemysl',
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
  {
    id: '10',
    label: 'TraceTech',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'trace-tech',
      alt: 'trace-tech',
    },
    to: '/trace-tech',
    isIcon: true,
  },
  {
    id: '11',
    label: 'sensodry',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'senso-dry',
      alt: 'senso-dry',
    },
    to: '/senso-dry',
    isIcon: true,
  },
  {
    id: '12',
    label: 'supereco',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'super-eco',
      alt: 'super-eco',
    },
    to: '/super-eco',
    isIcon: true,
  },
  {
    id: '13',
    label: 'Prasownice',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'prasownice',
      alt: 'nieckowe, walcowe, wielowalcowe',
    },
    to: '/prawownice',
    isIcon: true,
  },
  {
    id: '14',
    label: 'Wirówki pralnicze',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'wirowki-pralnicze',
      alt: 'wolnostojące, automatyczne',
    },
    to: '/wirowki-pralnicze',
    isIcon: true,
  },
  {
    id: '15',
    label: 'Bariery higieny',
    description:
      'Phosfluorescently monetize premium partnerships after high-quality initiatives. Collaboratively.',
    image: {
      src: 'bariery-higieny',
      alt: 'bez wirowania, normalnoobrotowe, wsyokoobrotowe',
    },
    to: '/bariery-higieny',
    isIcon: true,
  },
];

const connectedMenuAndLinks = connectMenuAndLinks(menu, links);

export { menu, links, connectedMenuAndLinks };
