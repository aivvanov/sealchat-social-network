import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from '../../withRouter';
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.userId);
        this.props.getStatus(this.props.router.params.userId);
    }

    render() {
        return <Profile 
            {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}
            authUserId={this.props.authUserId}
            isAuth={this.props.isAuth}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        newStatusText: state.profilePage.newStatusText,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);