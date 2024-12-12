import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import headerIcon from "../../assets/images/seals_header.svg";
import { IoLogOutOutline } from "react-icons/io5";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile" className={styles.icon_container}>
        <img className={styles.icon} src={headerIcon} alt="headerIcon" />
        <div className={styles.icon_text}>sealChat</div>
      </NavLink>
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div className={styles.authBlock}>
            <span className={styles.login}>{props.login}</span>
            <IoLogOutOutline className={styles.logoutIcon} onClick={props.logout} title="Log out" />
          </div>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;