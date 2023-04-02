import React, { useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Typed from 'typed.js';

import styles from '../styles/components/Hero.module.scss';
import { SectionWrapper } from '../hoc';
import { ShapesCanvas, BallsCanvas } from '../components/canvas/index';
import { heroBalls } from '../constants/index';
import { logo_104 } from '../assets/index';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Next.js', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 800,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left_box}>
          <div className={styles.textbox}>
            <span className={styles.title}>Hello</span>
            <h1>I&apos;m Ray</h1>
            <ul>
              <li>設計背景出身，可減少與設計師溝通的成本</li>
              <li>曾任職電商影音行銷，理解行銷需求</li>
              <li>
                學習的技術包含 <span ref={el}></span>
              </li>
            </ul>
          </div>

          <div className={styles.links}>
            <a
              className={styles.link}
              href='https://github.com/RueiC'
              target='_blank'
            >
              <AiFillGithub />
            </a>
            <a
              className={styles.link}
              href='https://pda.104.com.tw/profile/share/5dy0b6zrJIrP9jdBNASsm6K4YNYnRJTG'
              target='_blank'
            >
              <img src={logo_104.src} alt='104 logo' />
            </a>
          </div>

          <div className={styles.btns}>
            <a
              className={styles.download}
              href='/file/【應徵前端工程師】張睿宸_履歷.pdf'
              download
            >
              DOWNLOAD RESUME
              <div className={styles.wave}></div>
            </a>
            <a className={styles.contact} href='#contact'>
              CONTACT ME
            </a>
          </div>
        </div>

        <div className={styles.right_box}>
          <div className={styles.shape}>
            <ShapesCanvas />
          </div>
          <div className={styles.balls}>
            {heroBalls.map((ball) => (
              <div className={styles.ball} key={ball.name}>
                <BallsCanvas icon={ball.icon.src} distance={ball.distance} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// export default SectionWrapper(Hero, 'hero');
export default Hero;
