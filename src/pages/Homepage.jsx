import React from 'react';
import styles from './Homepage.module.css';
import Login from '../components/Login';
import Register from '../components/Register';

const Homepage = () => {
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
                {/* <Login /> */}
                <Register />
            </div>
        </div>
    )
}

export default Homepage
