import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileNavBar from './ProfileNavBar';
import InfoContainer from './info/InfoContainer';
import SettingsContainer from './settings/SettingsContainer';
import styles from './Profile.module.scss';
import { setRedirectAfterLoginURL } from '@lib/helpers/RedirectHelpers';
import { useAppSelector } from '@store/index';

const ProfilePageRouting = () => {
    const tab = useParams().tab;
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.authState.token);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            setRedirectAfterLoginURL(`/profile/${tab}`);
        }
    }, [token]);

    const renderUserUI = () => {
        switch (tab) {
            case 'info':
                return <InfoContainer />;
            case 'settings':
                return <SettingsContainer />;

            case 'wishlist':
                return <></>;

            default:
                null;
                break;
        }
    };
    return (
        <>
            <ProfileNavBar tab={tab} />
            <div className={styles.tabContainer}>{renderUserUI()}</div>
        </>
    );
};

export default ProfilePageRouting;
