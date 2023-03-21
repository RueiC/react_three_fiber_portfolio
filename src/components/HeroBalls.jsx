import React from 'react';
import { BallCanvas } from './canvas';
import { heroBalls } from '../constants/index';
import styles from '../styles/components/HeroBalls.module.scss';

const HeroBalls = () => {
  return (
    <div className={styles.balls}>
      {heroBalls.map((ball) => (
        <div className={styles.ball} key={ball.name}>
          <BallCanvas icon={ball.icon.src} />
        </div>
      ))}
    </div>
  );
};

export default HeroBalls;
