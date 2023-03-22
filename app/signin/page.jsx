import styles from "../../styles/user-auth.module.css"
import google from "../../public/google_logo.svg"
import logo from "../../public/skill_hunter.svg"
import Image from 'next/image';

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

                        <div className={styles.form__group}>
                            <input type="text" id="name" name="name" required/>
                            <label for="name">Name</label>
                        </div>

                        <div className={styles.form__group}>
                            <input type="text" id="email" name="email" required/>
                            <label for="email">Email</label>
                        </div>

                        <div className={styles.form__group}>
                            <input type="password" id="password" name="password" required/>
                            <label for="password">Password</label>
                        </div>

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

                        <p className={styles.login__link}>Already have an account? <a href="#">Log in</a></p> 
                    
                    </form>
                
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