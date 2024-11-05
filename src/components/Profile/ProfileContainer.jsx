import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from '../../withRouter';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithRoutProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithRoutProfileComponent);