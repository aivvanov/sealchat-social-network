import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {this.props.authUserId === this.props.profile.userId
                    ?
                    <div>
                        {!this.state.editMode &&
                            <div
                                onDoubleClick={this.activateEditMode}
                                className={styles.user_description}>
                                {this.props.status || <div className={styles.no_status_text}>Set status... ✍️</div>}
                            </div>
                        }
                        {this.state.editMode &&
                            <div className={styles.status_text}>
                                <input
                                    type="text"
                                    className={styles.status_input}
                                    autoFocus
                                    onBlur={this.deactivateEditMode}
                                    value={this.state.status}
                                    onChange={this.onStatusChange}
                                />
                            </div>
                        }
                    </div>
                    :
                    <div className={styles.no_status_text}>{this.props.status || <div className={styles.no_status_text}>No status</div>}</div>
                }
            </div>
        )
    }
}

export default ProfileStatus;