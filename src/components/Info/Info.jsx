import React from "react";
import styles from "./Info.module.css";

const Info = (props) => {

    const infoText = React.createRef();

    const sendText = () => {
        const text = infoText.current.value;

        alert(text);
    }

    return (
        <div className={styles.info_block}>
            Info
            <div>
                <textarea ref={infoText} placeholder="text something..."></textarea>
                <button onClick={ sendText }>Click me</button>
            </div>
        </div>
    )
}

export { Info }