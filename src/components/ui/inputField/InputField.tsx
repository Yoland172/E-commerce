import React, { ChangeEvent } from "react";
import classNames from "classnames";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  placeholder: string;
  registerReq: any;
  error: any;
  width?: string;
  action?: (event:ChangeEvent<HTMLInputElement>) => void,
  maxLength?:number
}

const InputField = ({
  type,
  placeholder,
  registerReq,
  error,
  width,
  action,
  maxLength
}: InputFieldProps) => {
  return (
    <div className={styles.inputForm} style={{width:width}}>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          {...registerReq}
          maxlength={maxLength}
          onChange={action}
        />
        <div className={classNames(styles.line, error && styles.error)}></div>
      </div>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
};

export default InputField;
