import React from "react";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <div>Full name: {createField("Full name", "fullName", [], Input)}</div>
        <div>
            About me: {createField("About me", "aboutMe", [], Textarea)}
        </div>
        {/* <div className={styles.social_links}>
            {createAppLink(profile)}
        </div> */}
        <div>
            <div>
                Looking for a job? {createField("", "lookingForAJob", [], Input, {}, { type: "checkbox" })}
            </div>
            <div>
                <div>Desired Job Description:</div> {profile.lookingForAJobDescription}
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'EditProfile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;