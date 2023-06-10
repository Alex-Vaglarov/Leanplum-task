import React from 'react'

import styles from './InfoHeader.module.scss';

export default function InfoHeader({ title, subtitle }) {

    return (
        <>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subtitle}</div>
        </>
    );
};
