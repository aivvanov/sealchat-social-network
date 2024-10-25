import React from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";
import profileBackground from '../../../assets/images/pexels_profile_background.jpg'
import defaultProfilePicture from '../../../assets/images/userPhoto.jpeg';

const ProfileInfo = (props) => {

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
                <div className={styles.user_description}>{props.profile.aboutMe}</div>
                <div className={styles.social_links}>
                    {props.profile.contacts.github && (
                        <a href={`https://${props.profile.contacts.github}`} className={styles.social_link}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s" alt="github_link" />
                        </a>
                    )}
                    {props.profile.contacts.instagram && (
                        <a href={`https://${props.profile.contacts.instagram}`} className={styles.social_link}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram_link" />
                        </a>
                    )}
                    {props.profile.contacts.youtube && (
                        <a href={`https://${props.profile.contacts.youtube}`} className={styles.social_link}>
                            <img src="https://static-00.iconduck.com/assets.00/youtube-icon-2048x2048-oa03jx3h.png" alt="youtube_link" />
                        </a>
                    )}
                    {props.profile.contacts.facebook && (
                        <a href={`https://${props.profile.contacts.facebook}`} className={styles.social_link}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-PpRq5o99qLdwaOFS6H4qZO3oVGWQMcyDg&s" alt="facebook_link" />
                        </a>
                    )}
                    {props.profile.contacts.vk && (
                        <a href={`https://${props.profile.contacts.vk}`} className={styles.social_link}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png" alt="vk_link" />
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