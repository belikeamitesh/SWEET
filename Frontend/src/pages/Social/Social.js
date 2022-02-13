import React from 'react';
import styles from './Social.module.css';
function Social() {
    return (
    <div>
        <div className={styles.header}>Social</div>
        <div className={styles.flexContainer}>
        <button className={styles.button}>Send an SMS</button>
        <button className={styles.button}>Verify stress level</button>
        </div>

    </div>
        
    )
}

export default Social;
