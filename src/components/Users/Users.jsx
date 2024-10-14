import React from "react";
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpeg';

const Users = (props) => {

    if (props.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return (
        <div className={styles.users_container}>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={styles.user_card}>
                            <div className={styles.user_info}>
                                <img className={styles.user_photo} src={user.photos.small ? user.photos.small : userPhoto} alt="userPhoto" />
                                <div className={styles.user_details}>
                                    <div className={styles.user_name}>{user.name}</div>
                                    <div className={styles.user_status}>{user.status ? user.status : "Unknown status"}</div>
                                    <div className={styles.user_location}>
                                        {user.city ? user.city : "Unknown city"}, {user.country ? user.country : "Unknown country"}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.action_button}>
                                {user.followed
                                    ? <button className={styles.unfollow_button} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                    : <button className={styles.follow_button} onClick={() => { props.follow(user.id) }}>Follow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className={styles.show_more_container}>
                <button className={styles.show_more_button}>Show more</button>
            </div>
        </div>
    );
}

export default Users;