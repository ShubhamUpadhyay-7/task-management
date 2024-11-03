import React from 'react';
import styles from './Register.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    return (
        <div className={styles.first}>
            <h2 className={styles.heading}>Register</h2>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faUser} className={styles.icon0} />
                <input className={styles.name} type="text" placeholder="Name" />
            </div>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon1} />
                <input className={styles.email} type="email" placeholder="Email" />
            </div>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                <input className={styles.password} type="password" placeholder="Confirm Password" />
            </div>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                <input className={styles.password} type="password" placeholder='Password' />
            </div>
            <button className={styles.btn1}>Register</button>
            <p>Have an account?</p>
            <button className={styles.btn2}>Login</button>
        </div>
    )
}

export default Register
