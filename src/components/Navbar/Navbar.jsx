import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { FaUser, FaEnvelope, FaInfoCircle, FaMusic, FaCog, FaNewspaper, FaUsers } from 'react-icons/fa';

const Navbar = ({ dialogs }) => {
  const telegram = process.env.REACT_APP_TELEGRAM;
  const phone = process.env.REACT_APP_PHONE;
  const userImages = dialogs
    .map(image => <img src={image.icon} key={image.id} alt="userImage" />);

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
          <NavLink to="users" className={({ isActive }) => (isActive ? styles.active_link : styles.link)}>
            <FaUsers className={styles.icon} />Find users
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
      <div className={styles.info_content}>
        <div className={styles.contact_info}>
          <p className={styles.contact_header}>Contact me</p>
          <p>Telegram: <a href={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer">{telegram}</a></p>
          <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;