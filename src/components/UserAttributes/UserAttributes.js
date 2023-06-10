import React from 'react'

import styles from './UserAttributes.module.scss';

export default function UserAttributes({ attributes }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.tableHeader}>
                <div className={styles.attribute}>Attribute</div>
                <div className={styles.value}>Value</div>
            </div>
            <div className={styles.tableBody}>
                {Object.entries(attributes).map(([key, value]) => (
                    <React.Fragment key={value}>
                        <div className={styles.attribute}>{key}</div>
                        <div className={styles.value}>{value}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
