import React from 'react';
import styles from './Homepage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Homepage = () => {
    const [isRegister, setIsRegister] = useState(true);
    const toggleForm = () => setIsRegister(prevState => !prevState);
    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.img1}>
                    <img src="/assets/Group.png" alt="homepage_logo" />
                </div>
                <div className={styles.para}>
                    <h1>Welcome aboard my friend</h1>
                    <span>just a couple of clicks and we start</span>
                </div>
            </div>
            <div className={styles.right}>
                {isRegister ? (<div className={styles.first}>
                    <h2 className={styles.heading}>Login</h2>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon1l
                        } />
                        <input className={styles.emaillogin} type="email" placeholder="Email" />
                    </div>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon2} />
                        <input className={styles.password} type="password" placeholder='Password' />
                    </div>
                    <button className={styles.btn1}>Log in</button>
                    <p>Have no account yet?</p>
                    <button className={styles.btn2} onClick={toggleForm}>Register</button>
                </div>) : (<div className={styles.first}>
                    <h2 className={styles.heading}>Register</h2>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faUser} className={styles.icon0} />
                        <input className={styles.name} type="text" placeholder="Name" />
                    </div>
                    <div className={styles.container}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon1r} />
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
                    <button className={styles.btn2} onClick={toggleForm}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Homepage;
