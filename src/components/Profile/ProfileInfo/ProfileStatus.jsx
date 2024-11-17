import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div
                        onDoubleClick={this.activateEditMode}
                        className={styles.user_description}>
                        {this.props.status ?  this.props.status : <div className={styles.no_status_text}>Set status... ✍️</div>}
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.status_text}>
                        <input
                            type="text"
                            className={styles.status_input}
                            autoFocus
                            onBlur={this.deactivateEditMode}
                            value={this.props.status}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;