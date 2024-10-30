import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpeg';
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const startPage = Math.max(props.currentPage - 2, 1);
    const endPage = Math.min(props.currentPage + 2, pagesCount);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const follow = (userId) => {
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(userId);
                }
            })
    }

    const unfollow = (userId) => {
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(userId);
                }
            })
    }

    return (
        <div className={styles.users_container}>
            {
                props.users.map(user => {
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
                                    ? <button className={styles.follow_button} onClick={() => { follow(user.id) }}>Follow</button>
                                    : <button className={styles.unfollow_button} onClick={() => { unfollow(user.id) }}>Unfollow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className={styles.pagination}>
                {startPage > 1 && <>
                    <span onClick={() => props.onPageChanged(1)} className={styles.pagination_elem}>{"1"}</span>
                    {startPage > 2 && <span className={styles.pagination_dots}>...</span>}
                </>}

                {pages.slice(startPage - 1, endPage).map(page => {
                    return <span key={page} onClick={() => props.onPageChanged(page)} className={props.currentPage === page
                        ? styles.current_pagination_elem
                        : styles.pagination_elem
                    }>{page}</span>
                })}

                {endPage < pagesCount && <>
                    {endPage < pagesCount - 1 && <span className={styles.pagination_dots}>...</span>}
                    <span onClick={() => props.onPageChanged(pagesCount)} className={styles.pagination_elem}>{pagesCount}</span>
                </>}
            </div>
        </div>
    );
}

export default Users;