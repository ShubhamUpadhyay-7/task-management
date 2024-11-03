import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.first}>
            <h2 className={styles.heading}>Login</h2>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon1} />
                <input className={styles.email} type="email" placeholder="Email" />
            </div>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                <input className={styles.password} type="password" placeholder='Password' />
            </div>
            <button className={styles.btn1}>Log in</button>
            <p>Have no account yet?</p>
            <button className={styles.btn2}>Register</button>
        </div>
    )
}

export default Login
