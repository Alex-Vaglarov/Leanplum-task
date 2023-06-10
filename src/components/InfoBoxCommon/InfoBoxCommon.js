import React from 'react';

import styles from './InfoBoxCommon.module.scss';

export default function InfoBoxCommon({ type, quantity }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.type}>{type}</div>
            <div className={styles.quantity}>{quantity}</div>
        </div>
    );
};
