import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';
import { BallsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/index';
import styles from '../styles/components/Tech.module.scss';

const Skills = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.title_box} variants={textVariant()}>
        <p>My skills</p>
        <h2>Front-end Stacks</h2>
      </motion.div>

      <motion.div className={styles.techs} variants={fadeIn('', '', 0.1, 1)}>
        {technologies.map((technology) => (
          <div className={styles.ball} key={technology.name}>
            <BallsCanvas icon={technology.icon.src} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
