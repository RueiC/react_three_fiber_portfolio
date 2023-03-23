import React from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import styles from '../styles/components/Works.module.scss';
import { fadeIn, textVariant } from '../utils/motion';
import { ProjectCard } from './index';

const Works = () => {
  return (
    <div className={styles.section}>
      <motion.div className={styles.title_box} variants={textVariant()}>
        <p>My work</p>
        <h2>Projects</h2>
      </motion.div>

      <div className={styles.text_box}>
        <motion.p variants={fadeIn('', '', 0.1, 1)}>
          在自學期間，除了學習基本的HTML、CSS /
          SASS、JavaScript之外，也多方探索嘗試新的技術，目前使用中且持續學習的技術為Next.js、Vue、React、TypeScript、Tailwind
          CSS等。
          <br />
          在過去實作的三個專案中，學習到了如何實作API的串接、CRUD、SSG、SSR、Typescript的型別定義等，具備基礎網頁開發能力。
        </motion.p>
      </div>

      <div className={styles.project_cards}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, 'works');
