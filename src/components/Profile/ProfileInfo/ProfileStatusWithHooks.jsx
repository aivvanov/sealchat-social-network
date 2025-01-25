import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";
import { FaPen } from "react-icons/fa";

const ProfileStatusWithHooks = ({ authUserId, updateStatus, profile, ...props }) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {authUserId === profile.userId
                ?
                <div>
                    {!editMode &&
                        <div
                            onClick={activateEditMode}
                            className={styles.user_description}>
                            {props.status || <div className={styles.no_status_text}>Set status... ✍️</div>}
                            {(isHovered && props.status) && (
                                <FaPen
                                    className={styles.edit_icon}
                                    onClick={activateEditMode}
                                />
                            )}
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
                <div className={styles.no_status_text}>{props.status || <div className={styles.no_status_text}>No status</div>}</div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;