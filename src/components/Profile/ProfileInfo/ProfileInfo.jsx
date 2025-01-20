import React, { useRef, useState } from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import profileBackground from '../../../assets/images/pexels_profile_background.jpg'
import defaultProfilePicture from '../../../assets/images/userPhoto.jpeg';
import { Navigate } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { createLink } from "../../common/FormsControls/FormsControls";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({ isAuth, profile, status, updateStatus, authUserId, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    const fileInputRef = useRef(null);

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    if (!profile) {
        return <Loader />
    }

    const createAppLink = (profile) => {
        if (!profile.contacts) {
            return null;
        }

        const links = [];
        for (var key in profile.contacts) {
            if (profile.contacts.hasOwnProperty(key) && profile.contacts[key] !== null) {
                const linkAdress = process.env[`REACT_APP_${key.toUpperCase()}_LOGO_URL`];
                if (linkAdress) {
                    links.push(createLink(profile, key, linkAdress));
                }
            }
        }
        return links.length ? links : null;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onPhotoClick = () => {
        if (isOwner) {
            fileInputRef.current.click();
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => setEditMode(false));
    }

    return (
        <div className={styles.main_div}>
            <img
                className={styles.background_image}
                src={profileBackground}
                alt="background_image"
            />
            <div className={styles.user_info}>
                <div className={styles.profile_picture_container} onClick={onPhotoClick}>
                    {profile.photos.large
                        ? <img
                            className={styles.profile_picture}
                            src={profile.photos.large}
                            alt="profile_picture"
                        />
                        : <img
                            className={styles.profile_picture}
                            src={defaultProfilePicture}
                            alt="profile_picture"
                        />
                    }
                    {isOwner && <div className={styles.upload_overlay}>Change Photo</div>}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={onMainPhotoSelected}
                />
                {/* <ProfileStatus status={status} updateStatus={updateStatus} authUserId={authUserId} profile={profile} /> */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} authUserId={authUserId} profile={profile} />
                {editMode
                    ? <ProfileDataFormReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} createAppLink={createAppLink} goToEditMode={() => { setEditMode(true) }} />
                }
            </div>
        </div>
    );
};

export const ProfileData = ({ profile, isOwner, goToEditMode, createAppLink }) => {

    return <div>
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        </div>
        <div className={styles.user_name}>{profile.fullName}</div>
        <div>{profile.aboutMe && `About me: ${profile.aboutMe}`}</div>
        <div className={styles.social_links}>
            {createAppLink(profile)}
        </div>
        <div className={styles.job_info}>
            <div className={`${styles.job_status} ${profile.lookingForAJob ? styles.looking_for_job : styles.not_looking_for_job}`}>
                <span className={styles.job_icon}>
                    {profile.lookingForAJob ? "🔍" : "✔️"}
                </span>
                {profile.lookingForAJob ? "Actively looking for a job" : "Not looking for a job"}
            </div>
            {profile.lookingForAJob && (
                <div className={styles.job_description}>
                    <strong>Desired Job Description:</strong> {profile.lookingForAJobDescription}
                </div>
            )}
        </div>
    </div>
}

export default ProfileInfo;