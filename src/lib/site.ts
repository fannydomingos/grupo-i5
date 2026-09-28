// ─────────────────────────────────────────────────────────────
//  CONTEÚDO CENTRAL DO SITE
//  Troque aqui as URLs de cada empresa quando os sites entrarem no ar.
//  `href` externo (https://...) abre em nova aba automaticamente.
// ─────────────────────────────────────────────────────────────

export type Brand = {
  key: string;
  name: string;
  wordmark: string;
  claim: string;
  headline: string;
  body: string;
  bullets: string[];
  image?: string;
  icon: string; // máscara PNG em public/img/icons
  theme: 'dark' | 'light';
  href: string; // ← URL do site da marca
  live: boolean; // false = mostra selo "em breve"
};

export const brands: Brand[] = [
  {
    key: 'incorp',
    icon: '/img/icons/incorp.png',
    name: 'i5 Incorp',
    wordmark: 'INCORP',
    claim: 'Incorporação',
    headline: 'Compacto no tamanho. Gigante em possibilidades.',
    body: 'Viver bem não significa ter mais espaço. Significa ter espaços melhores.',
    bullets: [
      'Cada metro quadrado com propósito',
      'Projetos modernos, funcionais e inteligentes',
      'Melhores localizações, mais qualidade de vida',
    ],
    // image: '/img/incorp.jpg',  ← preencha para usar foto no lugar da cena em vetor
    theme: 'light',
    href: '#', // TODO: URL do site da i5 Incorp
    live: false,
  },
  {
    key: 'imob',
    icon: '/img/icons/imob.png',
    name: 'i5 Imob',
    wordmark: 'IMOB',
    claim: 'Imobiliária',
    headline: 'Menos intermediários. Mais possibilidades.',
    body: 'Comprar um imóvel é uma decisão importante. Mas não precisa ser complicado.',
    bullets: [
      'Menos burocracia, processos mais simples',
      'Compra mais direta, sem barreiras',
      'Transparência · Tecnologia · Inteligência',
    ],
    // TODO: imagem da i5 Imob — adicione o arquivo em public/img/imob.jpg e descomente:
    // image: '/img/imob.jpg',
    theme: 'light',
    href: '#', // TODO: URL do site da i5 Imob
    live: false,
  },
  {
    key: 'hotel',
    icon: '/img/icons/hotel.png',
    name: 'i5 Hotel',
    wordmark: 'HOTEL',
    claim: 'Hospitalidade',
    headline: 'Tecnologia que simplifica. Hospitalidade que acolhe.',
    body: 'Mais de 10 anos recebendo pessoas — com estrutura, conveniência e cuidado.',
    bullets: [
      'A tecnologia simplifica',
      'O conforto acolhe',
      'As pessoas fazem a diferença',
    ],
    // image: '/img/hotel.jpg',  ← preencha para usar foto no lugar da cena em vetor
    theme: 'light',
    href: 'https://i5hotel.com.br/',
    live: true,
  },
  {
    key: 'stay',
    icon: '/img/icons/stay.png',
    name: 'Smarter by i5 Stay',
    wordmark: 'STAY',
    claim: 'Novas formas de morar',
    headline: 'Morar bem nunca foi tão simples.',
    body: 'Seu imóvel. Nosso cuidado. Sua tranquilidade.',
    bullets: [
      'Para quem tem o imóvel: gestão simplificada e menos preocupação',
      'Para quem mora: uma experiência prática e descomplicada',
      'Tecnologia e inteligência do início ao fim',
    ],
    // image: '/img/stay.jpg',  ← preencha para usar foto no lugar da cena em vetor
    theme: 'light',
    href: 'https://smart-by-i5-site.vercel.app/',
    live: true,
  },
  {
    key: 'cowork',
    icon: '/img/icons/cowork.png',
    name: 'i5 Cowork',
    wordmark: 'COWORK',
    claim: 'Novas formas de trabalhar',
    headline: 'Seu negócio em outro nível.',
    body: 'O espaço onde você trabalha também fala sobre a sua empresa.',
    bullets: [
      '24h — estrutura e conveniência de hotel',
      'Tudo pronto — sem burocracia e sem operação',
      '+ valor — mais profissionalismo',
    ],
    // image: '/img/cowork.jpg',  ← preencha para usar foto no lugar da cena em vetor
    theme: 'light',
    href: 'https://i5cowork.com.br/',
    live: true,
  },
];

// TODO: substituir os anos vazios pelos anos oficiais de cada empresa.
export const timeline = [
  { year: '2007', title: 'Nasce a i5', text: 'O começo de uma forma diferente de fazer.' },
  { year: '', title: 'Incorp', text: 'Incorporação: projetos compactos e inteligentes.' },
  { year: '', title: 'Hotel', text: 'Hospitalidade com tecnologia e acolhimento.' },
  { year: '', title: 'Imob', text: 'Imobiliária com menos intermediários.' },
  { year: '', title: 'Cowork', text: 'Novas formas de trabalhar.' },
  { year: '', title: 'Stay', text: 'Novas formas de morar.' },
  { year: '2026', title: 'Próximo capítulo', text: 'A inteligência segue transformando vidas.' },
];

export const contact = {
  email: 'contato@grupoi5.com.br', // TODO: confirmar e-mail oficial
  whatsapp: '', // TODO: ex. https://wa.me/55619XXXXXXXX
  instagram: '', // TODO: perfil oficial
};
