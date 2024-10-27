import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import headerIcon from "../../assets/images/seals_header.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile" className={styles.icon_container}>
        <img className={styles.icon} src={headerIcon} alt="headerIcon" />
        <div className={styles.icon_text}>sealChat</div>
      </NavLink>
    </header>
  );
}

export default Header;