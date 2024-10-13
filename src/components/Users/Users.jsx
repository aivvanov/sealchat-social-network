import React from "react";
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: "1",
                fullName: "Xander Ivanov",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s",
                location: {
                    id: 1,
                    city: "Moscow",
                    country: "Russia"
                },
                isFollowed: true,
                statusText: "Hello! How you guys doing here?"
            },
            {
                id: "2",
                fullName: "Tara Basro",
                photoUrl: "https://cdn1-production-images-kly.akamaized.net/xO8KZWeoffVVctm4WuQL6eoFt20=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1948948/original/042673800_1519880576-FOTO_1.jpg",
                location: {
                    id: 1,
                    city: "New-York",
                    country: "USA"
                },
                isFollowed: false,
                statusText: "I`m here!!!!"
            },
            {
                id: "3",
                fullName: "Daniel Adnan",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvongFeVghuPM8EkKOenRpSDxn8ffL48Xkg&s",
                location: {
                    id: 1,
                    city: "London",
                    country: "England UK"
                },
                isFollowed: true,
                statusText: "hey hey hey!"
            },
            {
                id: "4",
                fullName: "Mia Goth",
                photoUrl: "https://ntvb.tmsimg.com/assets/assets/754303_v9_bc.jpg",
                location: {
                    id: 1,
                    city: "Moscow",
                    country: "Russia"
                },
                isFollowed: false,
                statusText: "Idk what to do"
            },
            {
                id: "5",
                fullName: "Lily Collins",
                photoUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/552822_v9_bc.jpg",
                location: {
                    id: 1,
                    city: "Chicago",
                    country: "USA"
                },
                isFollowed: false,
                statusText: "Just wanna talk with someone :("
            }
        ]);
    }

    return (
        <div className={styles.users_container}>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={styles.user_card}>
                            <div className={styles.user_info}>
                                <img className={styles.user_photo} src={user.photoUrl} alt="userPhoto" />
                                <div className={styles.user_details}>
                                    <div className={styles.user_name}>{user.fullName}</div>
                                    <div className={styles.user_status}>{user.statusText}</div>
                                    <div className={styles.user_location}>
                                        {user.location.city}, {user.location.country}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.action_button}>
                                {user.isFollowed
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