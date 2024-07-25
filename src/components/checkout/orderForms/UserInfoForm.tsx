import React from 'react';
import styles from './OrderForms.module.scss';
import InputField from '@components/ui/inputField/InputField';
import CountryNumberSelector from './CountryNumberSelector/CountryNumberSelector';
import { FieldErrors } from 'react-hook-form';
interface UserInfoFormProps {
    register: any;
    errors: FieldErrors;
    control: any;
}

interface InputFiledItem {
    containerClassName: any;
    title: string;
    inputProps: {
        type: string;
        placeholder: string;
        registerReq: any;
        error: any;
        maxLength?: number;
    };
}

const UserInfoForm = ({ register, errors, control }: UserInfoFormProps) => {
    const inputFields: InputFiledItem[] = [
        {
            containerClassName: styles.fNameForm,
            title: 'First Name',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('firstName', {
                        required: 'First name is required',
                        minLength: 3,
                    }),
                },
                error: errors.firstName,
            },
        },
        {
            containerClassName: styles.lNameForm,
            title: 'Last Name',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('lastName', {
                        required: 'Last name is required',
                        minLength: 3,
                    }),
                },
                error: errors.lastName,
            },
        },
        {
            containerClassName: styles.emailForm,
            title: 'Email',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid email address',
                        },
                        minLength: 3,
                    }),
                },
                error: errors.email,
            },
        },
        {
            containerClassName: styles.phoneNumberForm,
            title: 'Phone',
            inputProps: {
                type: 'text',
                placeholder: '',
                registerReq: {
                    ...register('phoneNumber', {
                        required: 'Number is required',
                        minLength: 9,
                    }),
                },
                error: errors.phoneNumber,
            },
        },
    ];

    return (
        <div className={styles.userInfoContainer}>
            <h2>First Step. Enter infromation about yourself</h2>
            <div className={styles.userInfoForm}>
                {inputFields.map((el) => {
                    if (el.title === 'Phone') {
                        return (
                            <>
                                <div className={styles.phoneCodeForm}>
                                    <h2>Phone</h2>
                                    <CountryNumberSelector error={errors.countryCode} control={control} />
                                </div>
                                <div className={el.containerClassName}>
                                    <InputField
                                        type={el.inputProps.type}
                                        placeholder={el.inputProps.placeholder}
                                        registerReq={el.inputProps.registerReq}
                                        error={el.inputProps.error}
                                    />
                                </div>
                            </>
                        );
                    } else {
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
                    }
                })}
            </div>
        </div>
    );
};

export default UserInfoForm;
