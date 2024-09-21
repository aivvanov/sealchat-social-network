import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon_container}>
        <NavLink to="/profile">
          <svg className={styles.icon} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="url(#grad)" strokeWidth="4" fill="none" />
            <path d="M32 20 C24 25, 28 40, 40 32 Q36 42, 24 36" fill="none" stroke="url(#grad)" strokeWidth="2" />
            <polygon points="28,24 32,20 36,24" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1E90FF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00BFFF', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </NavLink>
      </div>
    </header>
  );
}

export { Header }