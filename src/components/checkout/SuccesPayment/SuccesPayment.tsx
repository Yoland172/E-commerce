import React from 'react';
import styles from './SuccesPayment.module.scss';
import { useNavigate } from 'react-router-dom';
import SuccesIcon from '@components/ui/icon/SuccesIcon';

interface SuccesPayment {
    closeWindow: () => void;
}

const SuccesPayment = ({ closeWindow }: SuccesPayment) => {
    const navigate = useNavigate();
    const handleAction = () => {
        closeWindow();
        navigate('/mainPage');
    };
    return (
        <div className={styles.main}>
            <SuccesIcon width={40} height={40} />
            <h1>Thank you for ordering</h1>
            <h3>A manager will contact you shortly</h3>
            <button onClick={handleAction}>Go to main</button>
        </div>
    );
};

export default SuccesPayment;
