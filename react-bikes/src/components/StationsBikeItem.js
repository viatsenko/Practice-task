import React from 'react';
import styles from './StationsBike.module.css';

const StationsBikeItem = (props) => {
    return (
        <>
            <div className={styles.divLeft}><span className={styles.spanName}>Station name:</span><span className={styles.nameFont}> {props.name}</span></div>
            <div className={styles.divRight}><span className={styles.spanFreeBikes}>Free bikes:</span><span className={styles.fontFreeBikes}> {props.free_bikes}</span></div>
            <div className={props.favourite ? styles.like : styles.dislike}>❤</div>
        </>
    );
};

export default StationsBikeItem;
