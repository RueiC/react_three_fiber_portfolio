import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styles from '../styles/components/ExperienceCard.module.scss';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--primaryBg-color)',
        color: 'var(--text-color)',
        borderRadius: '10px',
        padding: '10px 40px 25px 40px',
        boxShadow: `2px 2px 10px 4px ${'var(--shadow-color)'}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${'var(--primaryBg-color)'}`,
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.icon_box}>
          <img src={experience.icon.src} alt={experience.company_name} />
        </div>
      }
    >
      <div className={styles.title_box}>
        <h3>{experience.title}</h3>
        <p style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className={styles.experience_list}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
