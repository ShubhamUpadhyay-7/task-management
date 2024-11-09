import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div>
            <div className={styles.left}>
                <div className={styles.container}>
                    <img className={styles.logo} src="/assets/codesandbox.png" alt="logo" />
                    <p className={styles.p1}>Pro Manage</p>
                </div>
                <div className={styles.container}>
                    <img className={styles.board} src="/assets/layout.png" alt="layout icon" />
                    <p>Board</p>
                </div>
                <div className={styles.container}>
                    <img className={styles.analytics} src="/assets/database.png" alt="database icon" />
                    <p>Analytics</p>
                </div>
                <div className={styles.container}>
                    <img className={styles.settings} src="/assets/settings.png" alt="settings icon" />
                    <p>Settings</p>
                </div>
            </div>
            <div className={styles.right}></div>
        </div >
    )
}

export default Dashboard
