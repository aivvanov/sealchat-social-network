import React from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import profileBackground from '../../../assets/images/pexels_profile_background.jpg'
import defaultProfilePicture from '../../../assets/images/userPhoto.jpeg';
import { Navigate } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.isAuth) {
        return <Navigate to='/login' />
    }

    if (!props.profile) {
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
                {props.profile.photos.large
                    ? <img
                        className={styles.profile_picture}
                        src={props.profile.photos.large}
                        alt="profile_picture"
                    />
                    : <img
                        className={styles.profile_picture}
                        src={defaultProfilePicture}
                        alt="profile_picture"
                    />
                }
                <div className={styles.user_name}>{props.profile.fullName}</div>
                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} authUserId={props.authUserId} profile={props.profile} /> */}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} authUserId={props.authUserId} profile={props.profile} />
                <div className={styles.social_links}>
                    {props.profile.contacts.github && (
                        <a href={`https://${props.profile.contacts.github}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_GITHUB_LOGO_URL} alt="github_link" />
                        </a>
                    )}
                    {props.profile.contacts.instagram && (
                        <a href={`https://${props.profile.contacts.instagram}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_INSTAGRAM_LOGO_URL} alt="instagram_link" />
                        </a>
                    )}
                    {props.profile.contacts.youtube && (
                        <a href={`https://${props.profile.contacts.youtube}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_YOUTUBE_LOGO_URL} alt="youtube_link" />
                        </a>
                    )}
                    {props.profile.contacts.facebook && (
                        <a href={`https://${props.profile.contacts.facebook}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_FACEBOOK_LOGO_URL} alt="facebook_link" />
                        </a>
                    )}
                    {props.profile.contacts.vk && (
                        <a href={`https://${props.profile.contacts.vk}`} className={styles.social_link}>
                            <img src={process.env.REACT_APP_VK_LOGO_URL} alt="vk_link" />
                        </a>
                    )}
                </div>
                <div className={styles.job_info}>
                    <div className={`${styles.job_status} ${props.profile.lookingForAJob ? styles.looking_for_job : styles.not_looking_for_job}`}>
                        <span className={styles.job_icon}>
                            {props.profile.lookingForAJob ? "🔍" : "✔️"}
                        </span>
                        {props.profile.lookingForAJob ? "Actively looking for a job" : "Not looking for a job"}
                    </div>
                    {props.profile.lookingForAJob && (
                        <div className={styles.job_description}>
                            <strong>Desired Job Description:</strong> {props.profile.lookingForAJobDescription}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;