import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login, logout } from "../../redux/auth-reducer";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.label}>Email</label>
            <div className={styles.field_input}>
                {createField("Enter your email", "email", [required], Input, styles.input)}
            </div>
            <label className={styles.label}>Password</label>
            <div className={styles.field_input}>
                {createField("Enter your password", "password", [required], Input, styles.input, { type: "password" })}
            </div>
            <div className={styles.remember_me_container}>
                {createField(null, "rememberMe", [], Input, styles.checkbox, { id: "rememberMe", type: "checkbox" })}
                <label htmlFor="rememberMe" className={styles.remember_me_label}>
                    Remember me?
                </label>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, styles.captcha_input)}
            {error && <div className={style.form_summary_error}>
                {error}
            </div>
            }
            <button type="submit" className={styles.submit_button}>Log in</button>
            <div className={styles.signup_link}>
                Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.form_container}>
                <h2 className={styles.title}>Login</h2>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);