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
    if (id === 'experiences') setAbout('experiences');

    if (id === 'advantages') setAbout('advantages');
  };

  return (
    <div>
      <motion.div className={styles.title_box} variants={textVariant()}>
        <p>Introduction</p>
        <h2>{about}</h2>
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.content_box}
          variants={fadeIn('', '', 0.1, 1)}
        >
          {about === 'background' ? (
            <p>
              我的名字是張睿宸，我畢業於「元智大學資訊傳播學系 -
              設計組」，我在大學接觸過視覺設計以及程式語言，是
              <strong>設計背景</strong>出身，對於 <strong>Photoshop</strong>、
              <strong>Illustrator</strong>、<strong>Figma</strong>{' '}
              的操作熟悉，我相信未來在前端領域工作可減少與設計師溝通的成本。
              <br />
              <br />
              我之前從事電商影音行銷的工作，具備行銷經驗。之後我意識到自己對前端開發的熱情，便離開了上一份工作。目前持續的自學當中，致力於持續成長和發展。
            </p>
          ) : null}

          {about === 'experiences' ? (
            <p>
              在自學期間，我不僅學習了 HTML、CSS、JavaScript{' '}
              的基礎知識，還對新技術進行了探索和嘗試。目前專注於學習{' '}
              <strong>Next.js</strong>、<strong>Vue 3</strong>、
              <strong>React</strong>、<strong>TypeScript</strong>、
              <strong>Tailwind CSS</strong> 等前沿技術。此外正在研究{' '}
              <strong>React Three Fiber</strong> 和 <strong>three.js</strong>。
              <br />
              <br />
              為了更精進我的技能，我開發了三個專案，展示了我在前端開發方面的熱情：
              <ul>
                <li>
                  3D Portfolio｜使用 React Three Fiber
                  開發了一個作品集網站，使用 SASS 和 Framer Motion
                  實現流暢的用戶體驗。
                </li>
                <li>
                  Quizler｜使用 Vue 3, TypeScript
                  開發的閃卡應用程式，它提高了用戶的語言學習效率以及良好的使用者體驗。
                </li>
                <li>
                  Sprout｜使用 Next.js, TypeScript
                  開發了一個電商網站，用戶能夠將商品添加到他們的購物車、留下評論和評價產品。
                </li>
              </ul>
            </p>
          ) : null}

          {about === 'advantages' ? (
            <p>
              <ul>
                <li>
                  我是設計背景出身，了解 <strong>Photoshop</strong>、
                  <strong>Illustrator</strong>、<strong>Figma</strong>{' '}
                  軟體的操作，
                  <strong>可減少與設計師的溝通成本</strong>。
                </li>
                <li>曾任職電商行銷領域，理解行銷需求。</li>
                <li>目前持續的自學當中，致力於持續成長和發展。</li>
              </ul>
              <br />
              未來希望能夠以前端工程師的身份，持續讓開發技能成長精進；同時也希望累積開發經驗的同時，試著將產品思維融入開發的過程，變成一個思考更全面的人。
              <br />
              <br />
              憑藉著過去的設計以及行銷經驗，再加上對於前端的熱情，期許未來可以為貴公司提供更多價值。
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
              about === 'experiences' ? styles.selected : ''
            }`}
          >
            <input
              id='experiences'
              type='radio'
              name='toggle'
              value='Experiences'
            />
            <label htmlFor='experiences'>My Experience</label>
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
