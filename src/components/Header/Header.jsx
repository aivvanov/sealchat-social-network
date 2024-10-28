import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import headerIcon from "../../assets/images/seals_header.svg"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile" className={styles.icon_container}>
        <img className={styles.icon} src={headerIcon} alt="headerIcon" />
        <div className={styles.icon_text}>sealChat</div>
      </NavLink>
      <div className={styles.loginBlock}>
        {props.isAuth
          ? <div>{props.login}</div>
          : <NavLink to="/login">Log in</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;