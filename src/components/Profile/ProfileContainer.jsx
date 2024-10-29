import React from "react";
import Profile from "./Profile";
import axios from 'axios';
import { connect } from "react-redux";
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from '../../withRouter';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true
                })
                .then(response => {
                    if (response.data.resultCode === 0) {
                        userId = response.data.data.id;
                        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
                    }
                })
                .then(response => {
                    if (response) {
                        this.props.getUserProfile(response.data);
                    }
                })
                .catch(error => {
                    console.error("Ошибка при запросе профиля", error);
                });
        } else {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.getUserProfile(response.data);
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