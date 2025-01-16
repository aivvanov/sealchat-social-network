import React from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import profileBackground from '../../../assets/images/pexels_profile_background.jpg'
import defaultProfilePicture from '../../../assets/images/userPhoto.jpeg';
import { Navigate } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { createLink } from "../../common/FormsControls/FormsControls";

const ProfileInfo = ({ isAuth, profile, status, updateStatus, authUserId, isOwner, savePhoto }) => {

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

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    if (!profile) {
        return <Loader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={styles.main_div}>
            <img
                className={styles.background_image}
                src={profileBackground}
                alt="background_image"
            />
            <div className={styles.user_info}>
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
                { isOwner && <input type="file" onChange={onMainPhotoSelected} /> }
                <div className={styles.user_name}>{profile.fullName}</div>
                {/* <ProfileStatus status={status} updateStatus={updateStatus} authUserId={authUserId} profile={profile} /> */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} authUserId={authUserId} profile={profile} />
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
        </div>
    );
};

export default ProfileInfo;