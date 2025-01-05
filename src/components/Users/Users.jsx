import React from "react";
import styles from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, ...props }) => {

    return (
        <div className={styles.users_container}>
            {users.map(user => <User user={user} followingInProgress={followingInProgress} {...props} />)}
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>
    );
}

export default Users;