import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {props.authUserId === props.profile.userId
                ?
                <div>
                    {!editMode &&
                        <div
                            onDoubleClick={activateEditMode}
                            className={styles.user_description}>
                            {props.status || <div className={styles.no_status_text}>Set status... ✍️</div>}
                        </div>
                    }
                    {editMode &&
                        <div className={styles.status_text}>
                            <input
                                type="text"
                                className={styles.status_input}
                                value={status}
                                autoFocus
                                onBlur={deactivateEditMode}
                                onChange={onStatusChange}
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

export default ProfileStatusWithHooks;