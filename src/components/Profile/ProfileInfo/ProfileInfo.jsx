import React from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import profileBackground from '../../../assets/images/pexels_profile_background.jpg'
import defaultProfilePicture from '../../../assets/images/userPhoto.jpeg';
import { Navigate } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ isAuth, profile, status, updateStatus, authUserId }) => {

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    if (!profile) {
        return <Loader />
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
                <div className={styles.user_name}>{profile.fullName}</div>
                {/* <ProfileStatus status={status} updateStatus={updateStatus} authUserId={authUserId} profile={profile} /> */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} authUserId={authUserId} profile={profile} />
                <div className={styles.social_links}>
                    {profile.contacts.github && (
                        <a href={`https://${profile.contacts.github}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_GITHUB_LOGO_URL} alt="github_link" />
                        </a>
                    )}
                    {profile.contacts.instagram && (
                        <a href={`https://${profile.contacts.instagram}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_INSTAGRAM_LOGO_URL} alt="instagram_link" />
                        </a>
                    )}
                    {profile.contacts.youtube && (
                        <a href={`https://${profile.contacts.youtube}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_YOUTUBE_LOGO_URL} alt="youtube_link" />
                        </a>
                    )}
                    {profile.contacts.facebook && (
                        <a href={`https://${profile.contacts.facebook}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_FACEBOOK_LOGO_URL} alt="facebook_link" />
                        </a>
                    )}
                    {profile.contacts.vk && (
                        <a href={`https://${profile.contacts.vk}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_VK_LOGO_URL} alt="vk_link" />
                        </a>
                    )}
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