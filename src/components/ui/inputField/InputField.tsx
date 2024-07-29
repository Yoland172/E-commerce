import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './InputField.module.scss';
import ReactInputMask from 'react-input-mask';

interface InputFieldProps {
    type: string;
    placeholder: string;
    registerReq: any;
    error: any;
    action?: (event: ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    disabled?: boolean;
    mask?: string;
    maskDefaultValue?:string
}

const InputField = ({ type, placeholder, registerReq, error, action, maxLength, disabled, mask,maskDefaultValue }: InputFieldProps) => {
    return (
        <div className={styles.inputForm}>
            <div className={styles.inputContainer}>
                {mask ? (
                    <ReactInputMask mask={mask} {...registerReq} defaultValue={maskDefaultValue}>
                        {(inputProps: any) => (
                            <input
                                {...inputProps}
                                type={type}
                                placeholder={placeholder}
                                className={styles.input}
                                maxLength={maxLength}
                                onChange={action}
                                disabled={disabled}
                            />
                        )}
                    </ReactInputMask>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={styles.input}
                        maxLength={maxLength}
                        {...registerReq}
                        onChange={action}
                        disabled={disabled}
                    />
                )}

                <div className={classNames(styles.line, error && styles.error)}></div>
            </div>
            {error && <p className={styles.errorMessage}>{error.message}</p>}
        </div>
    );
};

export default InputField;
