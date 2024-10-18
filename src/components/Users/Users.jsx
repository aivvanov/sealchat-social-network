import React from "react";
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpeg';


class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.currentPage ? this.currentPage : 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged(page) {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.round(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

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
                <div>
                    {pages.map(page => {
                        return <span onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page
                            ? styles.current_pagination_elem
                            : styles.pagination_elem
                        }>{`<${page}>`}</span>
                    })
                    }
                </div>
            </div>
        );
    }
}

export default Users;