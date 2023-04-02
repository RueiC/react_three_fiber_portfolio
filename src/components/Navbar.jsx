import React, { useEffect, useState } from 'react';

import { MobileNav, DesktopNav } from '../components/index';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('light_theme');
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      <DesktopNav toggleTheme={toggleTheme} />
      <MobileNav toggleTheme={toggleTheme} />
    </>
  );
};

export default Navbar;
