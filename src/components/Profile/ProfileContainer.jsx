import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { withRouter } from '../../withRouter';
import { compose } from "redux";

class ProfileContainer extends React.Component {

    refrashProfile() {
        this.props.getUserProfile(this.props.router.params.userId);
        this.props.getStatus(this.props.router.params.userId);
    }

    componentDidMount() {
        this.refrashProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refrashProfile();
        }
    }

    render() {
        return <Profile
            {...this.props}
            isOwner={!this.props.router.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            authUserId={this.props.authUserId}
            isAuth={this.props.isAuth}
            savePhoto={this.props.savePhoto}
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
    // withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter
)(ProfileContainer);