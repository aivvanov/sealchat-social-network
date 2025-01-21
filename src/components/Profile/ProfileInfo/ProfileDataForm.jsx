import React from "react";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {

    const getAppLinksArray = (profile) => {
        if (!profile.contacts) {
            return null;
        }

        const links = [];
        for (var key in profile.contacts) {
            if (profile.contacts.hasOwnProperty(key)) {
                links.push(key);
            }
        }
        return links.length ? links : null;
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.form_summary_error}>
            {error}
        </div>
        }
        <div><b>Full name:</b> {createField("Full name", "fullName", [required, maxLengthCreator(20)], Input)}</div>
        <div>
            <b>About me:</b> {createField("About me", "aboutMe", [maxLengthCreator(20)], Textarea)}
        </div>
        <div>
            <b>App links:</b>
            {(getAppLinksArray(profile) || []).map(field => createField(`${field}`, `contacts.${field}`, [], Input))}
        </div>
        <div>
            <div>
                <b>Looking for a job?</b> {createField("", "lookingForAJob", [], Input, {}, { type: "checkbox" })}
            </div>
            <div>
                <b>Desired Job Description:</b>
                {createField("My professional skills", "lookingForAJobDescription", [maxLengthCreator(50)], Textarea)}
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile',
    destroyOnUnmount: false
})(ProfileDataForm);

export default ProfileDataFormReduxForm;