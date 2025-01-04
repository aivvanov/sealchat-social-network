import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched, error}, children }) => {

    const hasError = touched && error;

    return (
        <div className={`${styles.form_control} ${hasError ? styles.error : ""}`}>
            {children}
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...restProps} {...input} /></FormControl>
}

export const createField = (placeholder, name, validators, component, className, props = {}) => {
    return <Field
        className={className}
        placeholder={placeholder}
        component={component}
        name={name}
        validate={validators}
        {...props}
    />
}