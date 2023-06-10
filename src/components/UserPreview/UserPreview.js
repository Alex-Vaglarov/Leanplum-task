import React from 'react'

import styles from './UserPreview.module.scss';

export default function UserPreview({
    id,
    devices,
    sessions,
    location,
    selectUserById,
    isSelected
}) {
    return (
        <div
            className={`${styles.wrapper} ${isSelected ? styles.selected : ''}`}
            onClick={() => selectUserById(id)}
        >
            <div className={styles.name}>{id}</div>
            <div className={styles.infoWrapper}>
                <div className={styles.devices}>{devices} Devices - </div>
                <div className={styles.devices}>{(sessions && sessions.length) ? sessions.length : 0} Sessions - </div>
                <div className={styles.location}>{location}</div>
            </div>
        </div>
    );
};
