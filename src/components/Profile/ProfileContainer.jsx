import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from '../../withRouter';
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            profileAPI.auth()
                .then(data => {
                    if (data.resultCode === 0) {
                        userId = data.data.id;
                        return profileAPI.getProfile(userId);
                    }
                })
                .then(data => {
                    if (data) {
                        this.props.getUserProfile(data);
                    }
                })
                .catch(error => {
                    console.error("Ошибка при запросе профиля", error);
                });
        } else {
            profileAPI.getProfile(userId)
                .then(data => {
                    this.props.getUserProfile(data);
                })
                .catch(error => {
                    console.error("Ошибка при запросе профиля", error);
                });
        }
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