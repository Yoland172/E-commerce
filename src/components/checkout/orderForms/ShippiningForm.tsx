import InputField from '@components/ui/inputField/InputField';
import React from 'react';
import styles from './OrderForms.module.scss';
import { FieldErrors } from 'react-hook-form';
import {InputFieldItem} from './Types';

interface ShippiningFormProps {
    register: any;
    errors: FieldErrors;
}

const ShippiningForm = ({ register, errors }: ShippiningFormProps) => {
    const inputFields: InputFieldItem[] = [
        {
            containerClassName: styles.countryForm,
            title: 'Country',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('country', {
                        required: 'Required field',
                        minLength: 3,
                    }),
                },
                error: errors.country,
            },
        },
        {
            containerClassName: styles.cityForm,
            title: 'City',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('city', {
                        required: 'Required field',
                        minLength: 3,
                    }),
                },
                error: errors.city,
            },
        },
        {
            containerClassName: styles.zipCodeForm,
            title: 'Zip code',
            inputProps: {
                type: 'number',
                placeholder: '',
                registerReq: {
                    ...register('zipCode', {
                        required: 'Required',
                        minLength: 3,
                    }),
                },
                maxLength: 9,
                error: errors.zipCode,
            },
        },
        {
            containerClassName: styles.streetForm,
            title: 'Street',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('street', {
                        required: 'Required field',
                        minLength: 3,
                    }),
                },
                error: errors.street,
            },
        },
        {
            containerClassName: styles.houseNumForm,
            title: 'Street',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('street', {
                        required: 'Required field',
                        minLength: 3,
                    }),
                },
                error: errors.street,
            },
        },
    ];

    return (
        <div className={styles.adressInfo}>
            <h2>Second Step. Enter shipping information</h2>
            <div className={styles.adressFormContainer}>
                {inputFields.map((el) => {
                    return (
                        <div className={el.containerClassName}>
                            <h2>{el.title}</h2>
                            <InputField
                                type={el.inputProps.type}
                                placeholder={el.inputProps.placeholder}
                                registerReq={el.inputProps.registerReq}
                                error={el.inputProps.error}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ShippiningForm;
