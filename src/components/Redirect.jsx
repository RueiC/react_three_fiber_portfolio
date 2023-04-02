import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import styles from '../styles/components/Redirect.module.scss';

const Redirect = () => {
  return (
    <div className={styles.btn} onClick={() => window.scrollTo(0, 0)}>
      <BiArrowToTop />
    </div>
  );
};

export default Redirect;
