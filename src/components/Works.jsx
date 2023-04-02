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
          在自學期間，我不僅學習了 HTML、CSS、JavaScript{' '}
          的基礎知識，還對新技術進行了探索和嘗試。目前專注於學習{' '}
          <strong>Next.js</strong>、<strong>Vue 3</strong>、
          <strong>React</strong>、<strong>TypeScript</strong>、
          <strong>Tailwind CSS</strong> 等前沿技術。此外正在研究{' '}
          <strong>React Three Fiber</strong> 和 <strong>three.js</strong>。
          <br />
          <br />
          為了更精進我的技能，我開發了三個專案，展示了我在前端開發方面的熱情
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
