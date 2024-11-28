import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={`${styles.form_control} ${styles.error}`}>
            <textarea {...props} {...input} />
            <div>
                <span>
                    Some error
                </span>
            </div>
        </div>
    )
}