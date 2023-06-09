import React, { useState } from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { github, logo_104 } from '../assets';
import styles from '../styles/components/ProjectCard.module.scss';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.container}
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        className={styles.tilt}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className={styles.image_box}>
          <img
            className={styles.project_image}
            src={image.src}
            alt='project_image'
          />
          {isHovered ? (
            <div className={styles.hover_box}>
              <a
                className={styles.source_link}
                href={source_code_link}
                target='_blank'
              >
                <img src={github.src} alt='github logo' />
              </a>
            </div>
          ) : null}
        </div>

        <div className={styles.text_box}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.tag_box}>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
