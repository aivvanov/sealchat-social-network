import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { FaUser, FaEnvelope, FaInfoCircle, FaMusic, FaCog, FaNewspaper } from 'react-icons/fa';

const Navbar = (props) => {

  const userImages = props.state.map(image => <img src={image.icon} alt="userImage" />);

  return (
    <nav className={styles.nav}>
      <h2>Menu</h2>
      <div className={styles.menu_grid}>
        <div className={styles.item}>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaUser className={styles.icon} />Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaEnvelope className={styles.icon} />Messages
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/info" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaInfoCircle className={styles.icon} />Info
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaNewspaper className={styles.icon} />News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="music" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaMusic className={styles.icon} />Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="settings" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaCog className={styles.icon} />Settings
          </NavLink>
        </div>
        <div className={styles.friends_block}>
          <h3>My friends</h3>
          {userImages}
        </div>
      </div>
    </nav>
  );
}

export { Navbar }