import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { logo_104 } from '../assets/index';

import styles from '../styles/components/SocialMedia.module.scss';

const SocialMedia = () => (
  <div className={styles.social_media}>
    <a class={styles.icon} href='https://github.com/RueiC' target='_blank'>
      <AiFillGithub />
    </a>
    <a
      class={styles.icon}
      href='https://pda.104.com.tw/profile/share/5dy0b6zrJIrP9jdBNASsm6K4YNYnRJTG'
      target='_blank'
    >
      <img src={logo_104.src} alt='104 logo' />
    </a>
  </div>
);

export default SocialMedia;
