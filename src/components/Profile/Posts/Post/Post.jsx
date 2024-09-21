import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://i0.wp.com/tanhananews.com/wp-content/uploads/2021/07/Ratu-Felisha-Hak-Cipta-Instagramallaboutfelishagtr.jpg?fit=800%2C677&ssl=1" />
            {props.message}
            <div>
                <span>like</span>
                <div className={styles.likes}>
                    (Всего лайков:
                    {props.likesCount}
                    )
                </div>
            </div>
        </div>
    );
}

export { Post }