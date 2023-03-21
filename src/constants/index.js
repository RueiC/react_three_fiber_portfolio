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
    points: ['接觸設計、程式設計'],
  },
  {
    title: '電商影音行銷專員',
    company_name: '智選科技有限公司',
    icon: company,
    iconBg: '#f8f8f8',
    date: '2021 Jul - 2022 Feb',
    points: [
      '協助行銷部門藉由自媒體執行品牌推廣',
      '製作影片增加產品曝光及流量轉換',
      '經營公司YouTube頻道',
    ],
  },
  {
    title: '開始自學前端技術',
    company_name: '自學之路',
    icon: code,
    iconBg: '#f8f8f8',
    date: '2022 Feb - ',
    points: ['離職後便開始自學網頁相關技術，直到目前持續的在自學之中'],
  },
];

const projects = [
  {
    name: 'Quizler',
    description: '通過單詞卡學習新語言',
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
    name: 'Pincture',
    description: '圖片分享收藏平台',
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
    image: pincture,
    source_code_link: 'https://github.com/RueiC/next_js_pincture_app',
  },
  {
    name: 'Sprout',
    description: '電商購物網站',
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
