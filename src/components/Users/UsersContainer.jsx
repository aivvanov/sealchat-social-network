import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalCountAC, setCurrentSearchTextAC, searchUsersAC } from "../../redux/users-reducer";
import axios from 'axios';
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.currentPage ? this.currentPage : 1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    onSearchUsersChange = (e) => {
        const text = e.target.value;
        this.props.setCurrentSearchText(text);
    }

    onSearchUsersClick = () => {
        const userSearchText = this.props.currentSearchText;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?term=${userSearchText}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
        this.props.searchUsers()
    }

    render() {
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            currentSearchText={this.props.currentSearchText}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onSearchUsersChange={this.onSearchUsersChange}
            onSearchUsersClick={this.onSearchUsersClick}
            onPageChanged={this.onPageChanged}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        currentSearchText: state.usersPage.currentSearchText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        },
        setCurrentSearchText: (text) => {
            dispatch(setCurrentSearchTextAC(text))
        },
        searchUsers: () => {
            dispatch(searchUsersAC())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);