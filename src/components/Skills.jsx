import React from 'react';

import { BallsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/index';
import styles from '../styles/components/Tech.module.scss';

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_box}>
        <p>My skills _</p>
        <h2>Front-end Stacks</h2>
      </div>

      <div className={styles.techs}>
        {technologies.map((technology) => (
          <div className={styles.ball} key={technology.name}>
            <BallsCanvas icon={technology.icon.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
