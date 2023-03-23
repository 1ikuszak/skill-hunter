import google from "../../public/google_logo.svg"
import logo from "../../public/skill_hunter.svg"
import claws from "../../public/claws.svg"
import Image from 'next/image';
import styles from "../../styles/user-auth.module.css"
import {InputField, EmailField, PasswordField} from '../../components/account/input_fields.jsx'

export default async function SignIn() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.section__left}>
                    
                    <div className={styles.text_box}>
                        <div>
                            <p className={styles.header}>Create and account</p>
                            <p className={styles.sub_header}>Welcome, please enter your details.</p>
                        </div>
                    </div>

                    <form className="form">

                        <InputField text="Name"/>
                        <EmailField text="Email"/>
                        <PasswordField text="Password"/>

                        <div className={styles.form__buttons}>
                            <button className={styles.button__signin}>Sign in</button>
                            <button className={styles.button__google}>
                                <Image
                                src={google}
                                alt="google icon"
                                />
                                Sign in with google
                            </button>
                        </div>

                        <p className={styles.login__link}>Already have an account? <a href="/login">Log in</a></p> 
                    
                    </form>

                    <Image
                        className="absolute left-0 bottom-0" 
                        src={claws}
                    />
                
                </div>



                <div className={styles.section__right}>
                    <Image
                        src={logo}
                        alt="skillHunter logo"
                    />
                </div>
            </div>
        </div>


    )
}