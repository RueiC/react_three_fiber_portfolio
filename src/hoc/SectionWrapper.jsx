import { motion } from 'framer-motion';

import styles from '../styles/hoc/SectionWrapper.module.scss';
import { staggerContainer } from '../utils/motion';
import { NavigationDots, SocialMedia } from '../components/index';

const sectionName = ['works', 'experience', 'contact'];

const StarWrapper = (Component, idName) =>
  function HOC() {
    const sectonStyles = `${idName !== 'hero' ? styles.center_section : ''} ${
      sectionName.includes(idName) ? styles.secondary_bg : styles.primary_bg
    }`;

    return (
      <motion.section
        id={idName}
        className={styles.container}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        {idName !== 'hero' ? <SocialMedia /> : null}

        <div className={`${styles.wrapper} ${sectonStyles}`}>
          <Component />
        </div>
        <NavigationDots active={idName} />
      </motion.section>
    );
  };

export default StarWrapper;
