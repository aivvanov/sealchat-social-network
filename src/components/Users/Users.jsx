import React from "react";
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpeg';


class Users extends React.Component {

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <div className={styles.users_container}>
                {
                    this.props.users.map(user => {
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
                                        ? <button className={styles.unfollow_button} onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                        : <button className={styles.follow_button} onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}

export default Users;