import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const telegram = process.env.REACT_APP_TELEGRAM;
    const phone = process.env.REACT_APP_PHONE;

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.contact_info}>
                    <p className={styles.contact_header}>Contact me</p>
                    <p>Telegram: <a href={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer">{telegram}</a></p>
                    <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
