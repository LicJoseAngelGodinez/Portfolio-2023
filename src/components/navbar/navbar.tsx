import React, { useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.navHeader}>
      <nav className={`${styles.navbar} ${menuOpen && styles.responsiveNav}`}>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/NotFound">404</Link>
        <button className={`${styles.navBtn} ${styles.closeNavBtn}`} onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>
      <button className={styles.navBtn} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
