import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalCountAC, setCurrentSearchTextAC, searchUsersAC } from "../../redux/users-reducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer