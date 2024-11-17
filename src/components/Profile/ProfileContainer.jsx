import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus, updateStatusText } from '../../redux/profile-reducer';
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
            updateStatusText={this.props.updateStatusText}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        newStatusText: state.profilePage.newStatusText
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, updateStatusText }),
    withRouter
)(ProfileContainer);