import React, { useState, useEffect, useCallback } from 'react';

import styles from './Audience.module.scss';
import InfoHeader from '../../components/InfoHeader/InfoHeader';
import UserPreview from '../../components/UserPreview/UserPreview';
import InfoBoxCommon from '../../components/InfoBoxCommon/InfoBoxCommon';
import UserAttributes from '../../components/UserAttributes/UserAttributes';
import { generateSampleData, getDateFromTimestamp, getUsHoursFromTimestamp } from '../../shared/helper';

export default function Audience() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const selectUserById = useCallback((id) => {
        // do something before selecting the user if needed
        const selectedUser = users.find(user => user.id === id);
        setSelectedUser(selectedUser);
      }, [users]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status

        const fetchData = async () => {
            setIsLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 2000));
            const exampleData = generateSampleData();

            // Check if the component is still mounted before updating the state
            if (isMounted) {
                setUsers(exampleData);
            }

            setIsLoading(false);
        };

        fetchData();

        // Cleanup function
        return () => {
            isMounted = false; // Update the flag to indicate component unmount
        };
    }, []);

    return (
        isLoading ?
            <div className={styles.loading}><span>Loading ...</span></div>
        :
            <div className={styles.pageWrapper}>
                <div className={styles.listSideWrapper}>
                    <div className={styles.listSideHeader}>
                    {users && users.length ?
                        <InfoHeader
                            title={'Users in Audience'}
                            subtitle={`Total users - Showing ${users.length} matching users`}
                        />
                    :
                        <div>No users to show</div>
                    }
                    </div>
                    <div className={styles.usersList}>
                        {users &&
                            users.length &&
                            users.map((user, index) => (
                                <UserPreview
                                    key={index}
                                    id={user.id}
                                    devices={user.devices}
                                    sessions={user.sessions}
                                    location={user.location}
                                    selectUserById={selectUserById}
                                    isSelected={selectedUser && (user.id === selectedUser.id)}
                                />
                            ))
                        }
                    </div>
                </div>
                {!selectedUser ?
                    <div className={styles.noSelectedUser}>There is no selected user</div>
                :
                    <div className={styles.infoSideWrapper}>
                        <div className={styles.infoSideHeader}>
                            <InfoHeader
                                title={selectedUser.id}
                                subtitle={`${getDateFromTimestamp(selectedUser.created)}, ${getUsHoursFromTimestamp(selectedUser.created)} - ${selectedUser.location}`}
                            />
                        </div>
                        <div className={styles.infoBoxesWrapper}>
                            <InfoBoxCommon type={'Devices'} quantity={selectedUser.devices} />
                            <InfoBoxCommon type={'Sessions'} quantity={(selectedUser.sessions && selectedUser.sessions.length) ? selectedUser.sessions.length : 0} />
                            <InfoBoxCommon type={'Events'} quantity={selectedUser.events} />
                        </div>
                        <div className={styles.attributesWrapper}>
                            <UserAttributes attributes={selectedUser.attributes} />
                        </div>
                    </div>
                }
            </div>
    );
};
