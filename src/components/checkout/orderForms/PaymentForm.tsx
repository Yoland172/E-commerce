import React, { ChangeEvent, useState } from 'react';
import styles from './OrderForms.module.scss';
import InputField from '@components/ui/inputField/InputField';
import { FieldErrors } from 'react-hook-form';
import { PaymentsMethod } from '@lib/types/Types';
import { InputFieldItem } from './Types';

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
    const inputFields: InputFieldItem[] = [
        {
            containerClassName: styles.cardNumberForm,
            title: 'Card Number',
            inputProps: {
                type: 'text',
                placeholder: 'xxxx xxxx xxxx xxxx',
                registerReq: {
                    ...register('cardNum', {
                        required: 'Required field',
                        minLength: 19,
                        maxLength: 19,
                        disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                    }),
                },
                disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                error: errors.cardNum,
                maxLength: 19,
                action: cardNumOnChangeAction,
            },
        },
        {
            containerClassName: styles.expDateForm,
            title: 'Expiry Date',
            inputProps: {
                type: 'text',
                placeholder: 'MM/YY',
                registerReq: {
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
                        minLength: 5,
                        disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                    }),
                },
                disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                error: errors.expDate,
                maxLength: 5,
                action: expDataOnChangeAction,
            },
        },
        {
            containerClassName: styles.cvvForm,
            title: 'CVV',
            inputProps: {
                type: 'password',
                placeholder: '···',
                registerReq: {
                    ...register('CVV', {
                        required: 'Required',
                        minLength: 3,
                        maxLength: 3,
                        disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                    }),
                },
                disabled: paymentsMethod !== PaymentsMethod.CreditCard,
                error: errors.CVV,
                maxLength: 3,
            },
        },
    ];
    return (
        <div className={styles.paymentInfo}>
            <h2>Third Step. Pay for the order</h2>

            <div className={styles.paymentFormContainer}>
                {inputFields.map((el) => {
                    return (
                        <div className={el.containerClassName}>
                            <h2>{el.title}</h2>
                            <InputField
                                type={el.inputProps.type}
                                placeholder={el.inputProps.placeholder}
                                registerReq={el.inputProps.registerReq}
                                disabled={el.inputProps.disabled}
                                error={el.inputProps.error}
                                maxLength={el.inputProps.maxLength}
                                action={el.inputProps.action}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PaymentForm;
