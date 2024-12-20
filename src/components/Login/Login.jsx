import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login, logout } from "../../redux/auth-reducer";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label className={styles.label}>Email</label>
            <div className={styles.field_input}>
                <Field
                    className={styles.input}
                    placeholder="Enter your email"
                    component={Input}
                    name="email"
                    validate={[required]}
                />
            </div>
            <label className={styles.label}>Password</label>
            <div className={styles.field_input}>
                <Field
                    className={styles.input}
                    placeholder="Enter your password"
                    component={Input}
                    name="password"
                    type="password"
                    validate={[required]}
                />
            </div>
            <div className={styles.remember_me_container}>
                <Field
                    type="checkbox"
                    name="rememberMe"
                    component={Input}
                    className={styles.checkbox}
                    id="rememberMe"
                />
                <label htmlFor="rememberMe" className={styles.remember_me_label}>
                    Remember me?
                </label>
            </div>
            {props.error && <div className={style.form_summary_error}>
                {props.error}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.form_container}>
                <h2 className={styles.title}>Login</h2>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);