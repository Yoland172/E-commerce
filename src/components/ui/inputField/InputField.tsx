import React from "react";
import classNames from "classnames";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  placeholder: string;
  registerReq: any;
  error: any;
  width?: string
}

const InputField = ({
  type,
  placeholder,
  registerReq,
  error,
  width
}: InputFieldProps) => {
  return (
    <div className={styles.inputForm} style={{width:width}}>
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          {...registerReq}
        />
        <div className={classNames(styles.line, error && styles.error)}></div>
      </div>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
};

export default InputField;
