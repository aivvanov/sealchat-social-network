import React from "react";
import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const dialog = (props) => {

    const path = `/dialogs/${props.id}`;

    return (
        <div className={styles.dialog}>
            <NavLink className={({ isActive }) => (isActive ? styles.active_dialog : styles.dialog_name)} to={path}>
                <img src={props.userImage} alt="userImage"/>
                {props.userName}
            </NavLink>
        </div>
    );
}

export default dialog
