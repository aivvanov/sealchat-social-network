import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setCurrentSearchText, requestUsers, searchUsers, changePage, toggleFollowingProgress, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../common/Loader/Loader';
import SearchField from '../common/SearchField/SearchField';import { compose } from 'redux';
import { getCurrentPage, getCurrentSearchText, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    newMessageElement = React.createRef();

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        const {pageSize, currentSearchText} = this.props;
        this.props.changePage(page, pageSize, currentSearchText);
    }

    onSearchUsersChange = (e) => {
        const text = e.target.value;
        this.props.setCurrentSearchText(text);
    }

    onSearchUsersClick = () => {
        const {searchUsers, currentSearchText, pageSize} = this.props;
        searchUsers(currentSearchText, pageSize);
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
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        currentSearchText: getCurrentSearchText(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage, setCurrentSearchText, requestUsers, 
        searchUsers, changePage, toggleFollowingProgress, 
        follow, unfollow
    })
)(UsersContainer);