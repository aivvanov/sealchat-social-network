import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalCount, setCurrentSearchText, searchUsers, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../common/Loader/Loader';
import SearchField from '../common/SearchField/SearchField';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    newMessageElement = React.createRef();

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    onSearchUsersChange = (e) => {
        const text = e.target.value;
        this.props.setCurrentSearchText(text);
    }

    onSearchUsersClick = () => {
        this.props.toggleIsFetching(true);
        const userSearchText = this.props.currentSearchText;
        usersAPI.searchUsersRequest(userSearchText, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
        this.props.searchUsers()
    }

    render() {
        return <>
            < SearchField
                currentSearchText={this.props.currentSearchText}
                newMessageElement={this.newMessageElement}
                onSearchUsersChange={this.onSearchUsersChange}
                onSearchUsersClick={this.onSearchUsersClick}
            />
            {this.props.isFetching
                ? <Loader />
                : <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        currentSearchText: state.usersPage.currentSearchText,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, setCurrentSearchText, searchUsers, toggleIsFetching
})(UsersContainer);