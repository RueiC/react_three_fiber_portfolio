import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import styles from '../styles/components/About.module.scss';
import { fadeIn, textVariant } from '../utils/motion';
import { about_me } from '../assets/index';

const About = () => {
  const [about, setAbout] = useState('background');

  const toggleContent = (e) => {
    const id = e.target.id;

    if (id === 'background') setAbout('background');
    if (id === 'myExperience') setAbout('myExperience');

    if (id === 'advantages') setAbout('advantages');
  };

  return (
    <div>
      <motion.div className={styles.title_box} variants={textVariant()}>
        <p>Introduction</p>
        <h2>About Me</h2>
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.content_box}
          variants={fadeIn('', '', 0.1, 1)}
        >
          {about === 'background' ? (
            <p>
              我的名字是張睿宸，在上一份工作中從事的是影音行銷的工作，離職後便開始自學網頁相關技術，直到目前持續的在自學之中。
              <br />
              <br />
              我畢業於「元智大學資訊傳播學系 -
              設計組」，我在大學接觸過設計以及程式語言，是設計背景出身，對於Photoshop、Illustrator、Figma的操作熟悉，我相信未來在前端領域工作可減少與設計師溝通的成本。
            </p>
          ) : null}

          {about === 'myExperience' ? (
            <p>
              在自學期間，除了學習基本的HTML、CSS /
              SASS、JavaScript之外，也多方探索嘗試新的技術，目前使用中且持續學習的技術為Next.js、Vue、React、TypeScript、Tailwind
              CSS等。
              <br />
              <br />
              在整個自學的過程中，我實作了三個專案：
              <br />
              <br />
              • 第一個專案是用React Three Fiber做的作品集網站，主要是用React
              Three Fiber、SASS、Framer Motion、來完成網站的視覺效果。
              <br />
              <br />
              • 第二個專案是用Vue
              3做的，名字叫做Quizler，藉由製作自己的單字卡，透過學習模式，來增加自己的記憶，讓語言學習更有效率。
              <br />
              <br />
              •
              第三個專案是用Next.js做的電商購物網站，除了把放品放到購物車結帳之外，也可以針對商品做評論以及評分。
              <br />
              <br />•
              最後一個專案是用Next.js做的，名字叫做Pincture，你可以在上面上傳自己的圖片，收藏以及評論別人分享的圖片，是一個收集靈感的工具。
            </p>
          ) : null}

          {about === 'advantages' ? (
            <p>
              最後做一下總結，我自己是設計背景出身，了解Photoshop、Illustrator、Figma軟體的操作，可減少與設計師的溝通成本。另外直到現在依然持續不斷的自學當中，未來會持續不斷的自主學習，促進成長。
              <br />
              <br />
              未來希望能夠以前端工程師的身份，持續讓開發技能成長精進；同時也希望累積開發經驗的同時，試著將產品思維融入開發的過程，變成一個思考更全面的人。
              <br />
              <br />
              期許未來可以在該領域中持續的精進成長，並為貴公司提供更多價值。
            </p>
          ) : null}
        </motion.div>

        <div className={styles.toggle_box} onClick={toggleContent}>
          <div
            className={`${styles.toggle_card} ${
              about === 'background' ? styles.selected : ''
            }`}
          >
            <input
              id='background'
              type='radio'
              name='toggle'
              value='background'
            />
            <label htmlFor='background'>My Background</label>
          </div>

          <div
            className={`${styles.toggle_card} ${
              about === 'myExperience' ? styles.selected : ''
            }`}
          >
            <input
              id='myExperience'
              type='radio'
              name='toggle'
              value='myExperience'
            />
            <label htmlFor='myExperience'>My Experience</label>
          </div>

          <div
            className={`${styles.toggle_card} ${
              about === 'advantages' ? styles.selected : ''
            }`}
          >
            <input
              id='advantages'
              type='radio'
              name='toggle'
              value='advantages'
            />
            <label htmlFor='advantages'>Conclusion</label>
          </div>
        </div>
        <img src={about_me.src} alt='people' />
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
