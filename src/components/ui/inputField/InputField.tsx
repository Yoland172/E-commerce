import React from "react";
import styles from "./inputField.module.scss";
import classNames from "classnames";
import { useForm } from "react-hook-form";

interface InputFieldProps {
    type: string;
    placeholder: string;
    registerReq: any;  // Типізація для register  // Специфіка правил валідації
    error: any;
  }

const InputField = ({
  type,
  placeholder,
  registerReq,
  error,
}: InputFieldProps) => {
  return (
    <div className={styles.inputForm}>
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
