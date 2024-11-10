import React from 'react';
import styles from "./Board.module.css";

const Dashboard = () => {
    return (
        <div className={styles.board}>
            <div className={styles.top}></div>
            <div className={styles.body}>
                <div className={styles.backlog}></div>
                <div className={styles.todo}></div>
                <div className={styles.inprogress}></div>
                <div className={styles.done}></div>
            </div>
        </div>
    )
}

export default Dashboard
