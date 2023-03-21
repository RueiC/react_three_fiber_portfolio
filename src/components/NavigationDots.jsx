import React from 'react';
import styles from '../styles/components/NavigationDots.module.scss';

const NavigationDots = ({ active }) => (
  <div className={styles.navigation_dot}>
    {['hero', 'works', 'skills', 'experience', 'about', 'contact'].map(
      (item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          style={active === item ? { backgroundColor: '#f2cd5d' } : {}}
        />
      ),
    )}
  </div>
);

export default NavigationDots;
