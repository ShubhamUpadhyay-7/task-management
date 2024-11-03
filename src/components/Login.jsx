import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.first}>
            <h2 className={styles.heading}>Login</h2>
            <div>
                <FontAwesomeIcon icon="fa-regular fa-envelope" />
                <input className={styles.email} type="email" placeholder="Email" />
            </div>
            <div>
                <FontAwesomeIcon icon="fa-light fa-lock-keyhole" />
                <input className={styles.password} type="password" placeholder='Password' />
            </div>
            <button className={styles.btn1}>Log in</button>
            <p>Have no account yet?</p>
            <button className={styles.btn2}>Register</button>
        </div>
    )
}

export default Login
