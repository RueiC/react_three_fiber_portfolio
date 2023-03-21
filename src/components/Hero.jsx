import { AiFillGithub } from 'react-icons/ai';

import styles from '../styles/components/Hero.module.scss';
import { SectionWrapper } from '../hoc';
import { ShapesCanvas, BallsCanvas } from '../components/canvas/index';
import { heroBalls } from '../constants/index';
import { logo_104 } from '../assets/index';

const Hero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left_box}>
          <div className={styles.textbox}>
            <span className={styles.title}>Hello</span>
            <h1>I&apos;m Ray</h1>
            <div>
              從行銷領域跨領域自學前端技術
              <br />
              設計背景出身，可減少與設計師溝通的成本
              <br />
              學習的技術包含{' '}
              <strong>
                Next.js<span></span>
              </strong>
              、<strong>React</strong>、<strong>Vue 3</strong>、
              <strong>Typescript</strong> 等
              <br />
              具備基礎網頁開發能力
            </div>
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
    </div>
  );
};

export default SectionWrapper(Hero, 'hero');
// export default Hero;
