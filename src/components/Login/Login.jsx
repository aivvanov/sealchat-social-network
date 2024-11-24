import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label className={styles.label}>Login</label>
            <Field className={styles.input} placeholder="Enter your login" component={"input"} name={"login"} />
            <label className={styles.label}>Password</label>
            <Field className={styles.input} placeholder="Enter your password" component={"input"} name={"password"} />
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me?
            </div>
            <button type={"submit"} className={styles.submitButton}>Log in</button>
            <div className={styles.signupLink}>
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
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Login</h2>
                <LoginReduxForm onSubmit={onSubmit}x/>
            </div>
        </div>
    );
}

export default Login;