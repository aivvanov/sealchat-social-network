import React from "react";
import styles from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className={styles.main_div} >
            <div>
                <img className={styles.background_image}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAe0I2cx5QFKTEMFDAm9Y4g2twU40K2OM5RMYFpnOzV0BV54qM7a8zvvBsxxHzSfetnk&usqp=CAU'
                    alt="background_image">
                </img>
                <div className={styles.user_name}>
                    <img className={styles.profile_picture}
                        src={props.profile.photos.large}
                        alt="profile_picture">
                    </img>
                    {props.profile.fullName}
                </div>
                <div className={styles.description}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;