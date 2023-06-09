import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  figma,
  threejs,
  quizler,
  sprout,
  pincture,
  yzu,
  code,
  company,
  r3f,
} from '../assets';

export const navLinks = [
  {
    id: 'works',
    title: 'Works',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const heroBalls = [
  {
    name: 'CSS 3',
    icon: css,
    distance: 12,
  },
  {
    name: 'React JS',
    icon: reactjs,
    distance: 15,
  },
  {
    name: 'TypeScript',
    icon: typescript,
    distance: 6,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    distance: 10,
  },
  {
    name: 'figma',
    icon: figma,
    distance: 8,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: '資訊傳播學系 設計組',
    company_name: '元智大學',
    icon: yzu,
    iconBg: '#f8f8f8',
    date: '2015 Sep - 2020 Jun',
    points: ['在大學時期多方探索，接觸了視覺設計與程式設計'],
  },
  {
    title: '電商影音行銷專員',
    company_name: '智選科技有限公司',
    icon: company,
    iconBg: '#f8f8f8',
    date: '2021 Jul - 2022 Feb',
    points: [
      '與運營部門合作，通過自媒體開展品牌推廣。',
      '製作優質的影片來推廣產品和服務，利用說故事的技巧來增加曝光與流量。',
      '管理公司的 YouTube 頻道，監督內容創作的各個方面，從構思和腳本到拍攝和後期製作。',
    ],
  },
  {
    title: '開始自學前端技術',
    company_name: '自學之路',
    icon: code,
    iconBg: '#f8f8f8',
    date: '2022 Feb - ',
    points: [
      '我意識到自己對前端開發的熱情，便離開了上一份工作。目前持續的自學當中，致力於持續成長和發展。',
    ],
  },
];

const projects = [
  {
    name: '3D Portfolio',
    description:
      '使用 React Three Fiber 開發了一個作品集網站，使用 SASS 和 Framer Motion 實現流暢的用戶體驗',
    tags: [
      {
        name: 'R3F',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'SASS',
      },
    ],
    image: r3f,
    source_code_link:
      'https://github.com/RueiC/react_three_fiber_portfolio/tree/main',
  },
  {
    name: 'Quizler',
    description:
      '使用 Vue 3, TypeScript 開發的閃卡應用程式，它提高了用戶的語言學習效率以及良好的使用者體驗',
    tags: [
      {
        name: 'vue 3',
      },
      {
        name: 'typescript',
      },
      {
        name: 'tailwind css',
      },
    ],
    image: quizler,
    source_code_link: 'https://github.com/RueiC/vue3_quizler_app',
  },
  {
    name: 'Sprout',
    description:
      '使用 Next.js, TypeScript 開發了一個電商網站，用戶能夠將商品添加到他們的購物車、留下評論和評價產品',
    tags: [
      {
        name: 'next.js',
      },
      {
        name: 'typescript',
      },
      {
        name: 'tailwind css',
      },
    ],
    image: sprout,
    source_code_link: 'https://github.com/RueiC/next_js_sprout_store/tree/main',
  },
];

const aboutContent = {
  background: `我的名字是張睿宸，在上一份工作中從事的是影音行銷的工作，離職後便開始自學網頁相關技術，直到目前持續的在自學之中。\n我畢業於「元智大學資訊傳播學系 - 設計組」，我在大學接觸過設計以及程式語言，是設計背景出身，對於Photoshop、Illustrator、Figma的操作熟悉，我相信未來在前端領域工作可減少與設計師溝通的成本。`,
  experience:
    '在自學期間，除了學習基本的HTML、CSS / SASS、JavaScript之外，也多方探索嘗試新的技術，目前使用中且持續學習的技術為Next.js、Vue、React、TypeScript、Tailwind CSS等。在過去實作的三個專案中，學習到了如何實作API的串接、CRUD、SSG、SSR、Typescript的型別定義等，具備基礎網頁開發能力。',
  advantages: `設計背景出身：了解Photoshop、Illustrator、Figma軟體的操作，可減少與設計師的溝通成本\n自學背景出身：會不斷的自主學習，促進成長`,
};

export { heroBalls, technologies, experiences, projects, aboutContent };
