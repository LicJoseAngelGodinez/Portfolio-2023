import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarStyles, setNavbarStyles] = useState(`${styles.navbar}`);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      setNavbarStyles(`${styles.navbar} ${styles.responsiveNav}`);
    } else {
      setNavbarStyles(`${styles.navbar}`);
    }
  },[menuOpen]);

  return (
    <header className={styles.navHeader}>
      <nav className={navbarStyles}>
        <button className={`${styles.navBtn} ${styles.closeNavBtn}`} onClick={toggleMenu}>
          <FaTimes />
        </button>
        <Link onClick={toggleMenu} to="/">Home</Link>
        <Link onClick={toggleMenu} to="/test">Test</Link>
        <Link onClick={toggleMenu} to="/NotFound">404</Link>
      </nav>
      <button className={styles.navBtn} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
