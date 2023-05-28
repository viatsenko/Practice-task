import React from 'react';
import styles from "./NetworksBikes.module.css";

type NetworksBikesItemProps = {
    city: string;
    company: string;
    name: string;
};

const NetworksBikesItem: React.FC<NetworksBikesItemProps> = (props) => {

    return (
        <>
            <div><span className={styles.spanCity}>City:</span><span> {props.city}</span></div>
            <div><span className={styles.spanCompany}>Company: </span><span>{props.company}</span></div>
            <div><span className={styles.spanName}>Network name: </span><span>{props.name}</span></div>
        </>
    )
};

export default NetworksBikesItem;
