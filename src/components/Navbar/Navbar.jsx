import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { FaUser, FaEnvelope, FaInfoCircle, FaMusic, FaCog, FaNewspaper } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>Menu</h2>
      <div className={styles.menu_grid}>
        <div className={styles.item}>
          <NavLink to="/profile">
            <FaUser className={styles.icon} />Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs">
            <FaEnvelope className={styles.icon} />Messages
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/info">
            <FaInfoCircle className={styles.icon} />Info
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news">
            <FaNewspaper className={styles.icon} />News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="music">
            <FaMusic className={styles.icon} />Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="settings">
            <FaCog className={styles.icon} />Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export { Navbar }