import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './Info.module.scss';
import { useForm } from 'react-hook-form';
import InputField from '@components/ui/inputField/InputField';
import { UserDataType } from '@lib/types/Types';

interface UserInfo {
    id: number | null;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    phone: string;
}
interface InfoProps {
    userInfo: UserInfo;
    changeUserInfo: (data: string, dataType: UserDataType) => void;
}

interface UserInputs {
    email?: string;
    username?: string;
    phone?: string;
}

const Info = ({ userInfo, changeUserInfo }: InfoProps) => {
    const [activeInput, setActiveInput] = useState<UserDataType | null>(null);

    useEffect(() => {
        if (userInfo.email !== null) {
            setValue(UserDataType.Email, userInfo.email);
            setValue(UserDataType.Phone, userInfo.phone);
            setValue(UserDataType.Username, userInfo.username);
        }
    }, [userInfo, activeInput]);

    useEffect(() => {
        if (userInfo) console.log(userInfo['phone']);
    }, [userInfo]);

    // <hook form

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<UserInputs>();

    const onSubmit = (data: UserInputs) => {
        if (activeInput !== null) {
            const checkedData = data[activeInput];
            if (checkedData) {
                changeUserInfo(checkedData, activeInput);
                setActiveInput(null);
            }
        }
    };

    // hook form>

    const fields = [
        {
            name: UserDataType.Email,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
            minLength: 3,
        },
        {
            name: UserDataType.Username,
            minLength: 3,
            maxLength: 35,
        },
        {
            name: UserDataType.Phone,
            pattern: /^\+\d{1,3}\s\d{3}-\d{3}-\d{3,4}$/,
            message: 'Invalid phone number',
            minLength: 9,
            maskProp: {
                mask: '+999 999-999-9999',
                maskDefaultValue: userInfo.phone,
            },
        },
    ];

    return (
        <div className={styles.main}>
            <h2>{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
            <form className={styles.userInfo} onSubmit={handleSubmit(onSubmit)}>
                {fields.map((el) => {
                    return (
                        <div className={styles.infoContainer} key={el.name}>
                            <div className={styles.info}>
                                <h2>{el.name}</h2>
                                {activeInput === el.name ? (
                                    <InputField
                                        type='text'
                                        placeholder=''
                                        registerReq={register(el.name, {
                                            required: 'Required field',
                                            minLength: el.minLength,
                                            pattern: el.pattern && {
                                                value: el.pattern,
                                                message: el.message,
                                            },
                                        })}
                                        error={errors[el.name]}
                                        mask={el.maskProp?.mask}
                                        maskDefaultValue={el.maskProp?.maskDefaultValue}
                                    />
                                ) : (
                                    <p>{userInfo[el.name]}</p>
                                )}
                            </div>

                            {activeInput === el.name && activeInput !== null ? (
                                <div className={styles.actionButton}>
                                    <button onClick={() => setActiveInput(null)}>Cancel</button>
                                    <button>Apply</button>
                                </div>
                            ) : (
                                <button onClick={() => setActiveInput(el.name)} disabled={activeInput !== null}>
                                    Change
                                </button>
                            )}
                        </div>
                    );
                })}
            </form>

            <div className={styles.accountFunc}>
                <button>Sign out</button>
                <button>Delete your account</button>
            </div>
        </div>
    );
};

export default Info;
