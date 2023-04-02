import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { RiEnglishInput } from 'react-icons/ri';

import styles from '../styles/components/DesktopNav.module.scss';
import { navLinks } from '../constants';
import { code } from '../assets';

const Navbar = ({ toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.fixed : ''}`}>
      <div className={styles.container}>
        <a className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
          <img src={code.src} alt='logo' />
        </a>

        <ul className={styles.navItems}>
          {navLinks.map((nav, i) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                style={{ animationDelay: `calc(0.2s * ${i + 1})` }}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <div>
            {/* <div className={styles.icon}>
              <RiEnglishInput />
            </div> */}
            <div className={styles.icon}>
              {isDarkTheme ? (
                <BsFillMoonStarsFill onClick={toggleTheme} />
              ) : (
                <BsFillSunFill onClick={toggleTheme} />
              )}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
