import React, { ChangeEvent, useState } from 'react';
import styles from './OrderForms.module.scss';
import classNames from 'classnames';
import PayPalIcon from '@components/ui/icon/paymentMethods/PayPalIcon';
import GooglePayIcon from '@components/ui/icon/paymentMethods/GooglePayIcon';
import ApplePayIcon from '@components/ui/icon/paymentMethods/ApplePayIcon';
import Divider from '@components/ui/divider/Divider';
import InputField from '@components/ui/inputField/InputField';
import { FieldErrors } from 'react-hook-form';
import Loader from '@components/ui/loader/Loader';
import { PaymentsMethod } from '@lib/types/Types';

interface PaymentFormProps {
    register: any;
    errors: FieldErrors;
    expDataOnChangeAction: (event: ChangeEvent<HTMLInputElement>) => void;
    cardNumOnChangeAction: (event: ChangeEvent<HTMLInputElement>) => void;
    paymentsMethod: PaymentsMethod;
}

const PaymentForm = ({
    register,
    errors,
    expDataOnChangeAction,
    cardNumOnChangeAction,
    paymentsMethod,
}: PaymentFormProps) => {
    return (
        <div className={styles.paymentInfo}>
            <h2>Third Step. Pay for the order</h2>

            <div className={styles.paymentFormContainer}>
                <div className={styles.cardNumberForm}>
                    <h2>Card Number</h2>
                    <InputField
                        type='text'
                        placeholder='xxxx xxxx xxxx xxxx'
                        registerReq={{
                            ...register('cardNum', {
                                required: 'Required field',
                                minLength: 19,
                                maxLength: 19,
                                disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                            }),
                        }}
                        disabled={paymentsMethod !== PaymentsMethod.CreditCard}
                        error={errors.cardNum}
                        maxLength={19}
                        action={cardNumOnChangeAction}
                    />
                </div>
                <div className={styles.expDateForm}>
                    <h2>Expiry date</h2>
                    <InputField
                        type='text'
                        placeholder='MM/YY'
                        registerReq={{
                            ...register('expDate', {
                                validate: {
                                    isPast: (fieldValue: string) => {
                                        const currentDate = new Date();
                                        const currentYear = currentDate.getFullYear();
                                        const currentMonth = currentDate.getMonth() + 1;
                                        const [month, year] = fieldValue.split('/').map(Number);
                                        const forematedYear = 2000 + year;
                                        console.log(year);
                                        if (year > 9) {
                                            if (
                                                month <= 12 &&
                                                (forematedYear > currentYear ||
                                                (forematedYear === currentYear && month >= currentMonth))
                                            ) {
                                                return true;
                                            } else {
                                                return 'invalid';
                                            }
                                        }
                                    },
                                },
                                required: 'Required',
                                minLength: 3,
                                disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                            }),
                        }}
                        disabled={paymentsMethod !== PaymentsMethod.CreditCard}
                        action={expDataOnChangeAction}
                        error={errors.expDate}
                        maxLength={5}
                    />
                </div>
                <div className={styles.cvvForm}>
                    <h2>CVV</h2>
                    <InputField
                        type='password'
                        placeholder='···'
                        registerReq={{
                            ...register('CVV', {
                                required: 'Required',
                                minLength: 3,
                                maxLength: 3,
                                disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                            }),
                        }}
                        disabled={paymentsMethod !== PaymentsMethod.CreditCard}
                        error={errors.CVV}
                        maxLength={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
