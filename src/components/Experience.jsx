import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { ExperienceCard } from './index';
import { SectionWrapper } from '../hoc';
import styles from '../styles/components/Experience.module.scss';
import { experiences } from '../constants/index';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <div>
      <motion.div className={styles.title_box} variants={textVariant()}>
        <p>What I have done so far</p>
        <h2>Work Experience</h2>
      </motion.div>

      <div className={styles.card_box}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
