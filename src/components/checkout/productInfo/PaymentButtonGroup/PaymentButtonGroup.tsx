import React from 'react';
import classNames from 'classnames';
import styles from './PaymentButtonGroup.module.scss';
import Loader from '@components/ui/loader/Loader';
import PayPalIcon from '@components/ui/icon/paymentMethods/PayPalIcon';
import GooglePayIcon from '@components/ui/icon/paymentMethods/GooglePayIcon';
import ApplePayIcon from '@components/ui/icon/paymentMethods/ApplePayIcon';
import { PaymentsMethod } from '@lib/types/Types';

interface PaymentButtonGroupProps {
    expressPaymentAction: (paymentType: PaymentsMethod) => void;
    paymentsMethod: PaymentsMethod;
    setPaymentsMethod: (paymentMethod: PaymentsMethod) => void;
}

const PaymentButtonGroup = ({ expressPaymentAction, paymentsMethod, setPaymentsMethod }: PaymentButtonGroupProps) => {
    const paymentMethods = [
        { method: PaymentsMethod.PayPal, theme: styles.paypalTheme, icon: <PayPalIcon width={50} height={20} /> },
        {
            method: PaymentsMethod.GooglePay,
            theme: styles.googlePayTheme,
            icon: <GooglePayIcon width={50} height={20} />,
        },
        { method: PaymentsMethod.ApplePay, theme: styles.applePayTheme, icon: <ApplePayIcon width={50} height={20} /> },
    ];

    return (
        <div className={styles.expressPaymentContainer}>
            {paymentMethods.map(({ method, theme, icon }) => (
                <button
                    key={method}
                    className={classNames(styles.paymentButton, theme)}
                    onClick={(e) => {
                        expressPaymentAction(method);
                        setPaymentsMethod(method);
                    }}
                    disabled={paymentsMethod === method}
                >
                    {paymentsMethod === method ? <Loader /> : icon}
                </button>
            ))}
        </div>
    );
};

export default PaymentButtonGroup;
