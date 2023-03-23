"use client";
import styles from "../../styles/user-auth.module.css"

export const InputField = ({text}) => {
    return(
        <>
            <div className={styles.form__group}>
                <input type="text" id={text} name={text} required/>
                <label for={text}>{text}</label>
            </div>
        </>
    )
}

export const EmailField = ({text}) => {
    return(
        <>
            <div className={styles.form__group}>
                <input type="text" id={text} name={text} required/>
                <label htmlFor={text}>{text}</label>
            </div>
        </>
    )
}

export const PasswordField = ({text}) => {
    return(
        <>
            <div className={styles.form__group}>
                <input type="password" id={text} name={text} required/>
                <label htmlFor={text}>{text}</label>
            </div>
        </>
    )
}