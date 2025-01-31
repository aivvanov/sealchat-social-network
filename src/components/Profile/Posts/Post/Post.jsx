import React from "react";
import styles from './Post.module.css';

const Post = ({message, likesCount, profile}) => {
    return (
        <div className={styles.item}>
            <img
                src={profile.photos.small}
                alt="post_icon"
            />
            {message}
            <div>
                <button>Like</button>
                <div className={styles.likes}>
                    Всего лайков:
                    {likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;