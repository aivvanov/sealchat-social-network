import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpeg';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, ...props }) => {

    const follow = (userId) => {
        props.follow(userId);
    }

    const unfollow = (userId) => {
        props.unfollow(userId);
    }

    return (
        <div key={user.id} className={styles.user_card}>
            <div className={styles.user_info}>
                <NavLink to={`/Profile/${user.id}`}>
                    <img className={styles.user_photo} src={user.photos.small ? user.photos.small : userPhoto} alt="userPhoto" />
                </NavLink>
                <div className={styles.user_details}>
                    <div className={styles.user_name}>{user.name}</div>
                    <div className={styles.user_status}>{user.status ? user.status : "Unknown status"}</div>
                    <div className={styles.user_location}>
                        {user.city ? user.city : "Unknown city"}, {user.country ? user.country : "Unknown country"}
                    </div>
                </div>
            </div>
            <div className={styles.action_button}>
                {!user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        className={styles.follow_button}
                        onClick={() => { follow(user.id) }}>Follow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        className={styles.unfollow_button}
                        onClick={() => { unfollow(user.id) }}>Unfollow</button>
                }
            </div>
        </div>
    );
}

export default User;