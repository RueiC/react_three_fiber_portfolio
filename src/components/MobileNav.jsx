import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { RiEnglishInput } from 'react-icons/ri';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';

import styles from '../styles/components/MobileNav.module.scss';
import { navLinks } from '../constants';
import { code } from '../assets';

const MobileNav = ({ toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.fixed : ''}`}>
      <div className={styles.container}>
        <a className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
          <img src={code.src} alt='logo' />
        </a>

        {toggleMenu ? (
          <div className={styles.menu}>
            <ul className={styles.navItems}>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <AiFillCloseCircle
              className={styles.btn_close}
              onClick={() => setToggleMenu(false)}
            />
          </div>
        ) : (
          <div className={styles.icon}>
            {isDarkTheme ? (
              <BsFillMoonStarsFill onClick={toggleTheme} />
            ) : (
              <BsFillSunFill onClick={toggleTheme} />
            )}
            <AiOutlineMenu onClick={() => setToggleMenu(true)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
