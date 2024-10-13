import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={styles.main_div} >
            <div>
                <img className={styles.background_image}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAe0I2cx5QFKTEMFDAm9Y4g2twU40K2OM5RMYFpnOzV0BV54qM7a8zvvBsxxHzSfetnk&usqp=CAU'
                    alt="background_image">
                </img>
                <div className={styles.user_name}>
                    <img className={styles.profile_picture}
                        src='https://i0.wp.com/tanhananews.com/wp-content/uploads/2021/07/Ratu-Felisha-Hak-Cipta-Instagramallaboutfelishagtr.jpg?fit=800%2C677&ssl=1'
                        alt="profile_picture">
                    </img>
                    Ratu Felisha
                </div>
                <div className={styles.description}>
                    While you might have an idea of what traits and characteristics you want to highlight about yourself, you might not be sure how to format your answers. Sometimes, an interviewer wants you to give a detailed description of your character, and other times, they just want you to summarize who you are in as few words as possible. Either way, we’ve got you covered.
                    In the examples below, we’ve provided some sample interview questions and answers, along with some bonus tips. Feel free to take sentences from different responses to create your own, unique way of describing yourself! While we don’t recommend using these answers word-for-word, they should give you an idea of what good, effective interview answers look like.
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;