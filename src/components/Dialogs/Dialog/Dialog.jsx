import React from "react";
import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = ({ id, userName, userImage }) => {

    const path = `/dialogs/${id}`;

    return (
        <div className={styles.dialog}>
            <NavLink className={({ isActive }) => (isActive ? styles.active_dialog : styles.dialog_name)} to={path}>
                <img src={userImage} alt="userImage" />
                {userName}
            </NavLink>
        </div>
    );
}

export default Dialog;
