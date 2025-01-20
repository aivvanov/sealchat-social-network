import React from "react";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit }) => {

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
        <div><b>Full name:</b> {createField("Full name", "fullName", [], Input)}</div>
        <div>
            <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>App links:</b>
            {(getAppLinksArray(profile) || []).map(field => createField(`${field}`, `${field}`, [], Input))}
        </div>
        <div>
            <div>
                <b>Looking for a job?</b> {createField("", "lookingForAJob", [], Input, {}, { type: "checkbox" })}
            </div>
            <div>
                <b>Desired Job Description:</b>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'EditProfile',
    destroyOnUnmount: false
})(ProfileDataForm);

export default ProfileDataFormReduxForm;