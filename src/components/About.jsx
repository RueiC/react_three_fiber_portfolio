import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import styles from '../styles/components/About.module.scss';
import { aboutContent } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { about_me } from '../assets/index';

const About = () => {
  const [about, setAbout] = useState('background');

  const toggleContent = (e) => {
    const id = e.target.id;
    let formattedText = '';

    if (id === 'background') setAbout('background');
    if (id === 'myExperience') setAbout('myExperience');

    if (id === 'advantages') setAbout('advantages');
  };

  return (
    <div>
      <motion.div className={styles.title_box} variants={textVariant()}>
        <p>Introduction _</p>
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
              CSS等。在過去實作的三個專案中，學習到了如何實作API的串接、CRUD、SSG、SSR、Typescript的型別定義等，具備基礎網頁開發能力。
            </p>
          ) : null}

          {about === 'advantages' ? (
            <p>
              設計背景出身：了解Photoshop、Illustrator、Figma軟體的操作，可減少與設計師的溝通成本
              <br />
              <br />
              自學背景出身：會不斷的自主學習，促進成長
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
            <label htmlFor='advantages'>My Advantages</label>
          </div>
        </div>
        <img src={about_me.src} alt='people' />
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
