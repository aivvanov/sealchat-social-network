import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label className={styles.label}>Login</label>
            <Field 
                className={styles.input} 
                placeholder="Enter your login"
                component={Input}
                name="login"
                validate={[required]}
            />
            <label className={styles.label}>Password</label>
            <Field 
                className={styles.input} 
                placeholder="Enter your password"
                component={Input}
                name="password"
                validate={[required]}
            />
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
        console.log(formData);
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

export default Login;