import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} placeholder="Enter your email" />

          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} placeholder="Enter your password" />

          <button type="submit" className={styles.submitButton}>Log in</button>
        </form>
        <div className={styles.signupLink}>
          Don't have an account? <NavLink to="/signup">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;