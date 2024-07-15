import React from "react";
import styles from "./OrderForms.module.scss";
import classNames from "classnames";
import PayPalIcon from "@components/ui/icon/paymentMethods/PayPalIcon";
import GooglePayIcon from "@components/ui/icon/paymentMethods/GooglePayIcon";
import ApplePayIcon from "@components/ui/icon/paymentMethods/ApplePayIcon";
import Divider from "@components/ui/divider/Divider";
import InputField from "@components/ui/inputField/InputField";

interface PaymentFormProps {
  register: any;
  errors: any;
}

const PaymentForm = ({ register, errors }: PaymentFormProps) => {
  return (
    <div className={styles.paymentInfo}>
      <h2>Third Step. Pay for the order</h2>
      <div className={styles.expressPaymentContainer}>
        <button
          className={classNames(styles.paymentButton, styles.paypalTheme)}
        >
          <PayPalIcon width={50} height={20} />
        </button>
        <button
          className={classNames(styles.paymentButton, styles.googlePayTheme)}
        >
          <GooglePayIcon width={50} height={20} />
        </button>
        <button
          className={classNames(styles.paymentButton, styles.applePayTheme)}
        >
          <ApplePayIcon width={50} height={20} />
        </button>
      </div>
      <Divider />
      <div className={styles.textContainer}>
        <h2>or</h2>
      </div>

      <div>
        <h2>Card Number</h2>
        <InputField
          type="text"
          placeholder=""
          registerReq={{
            ...register("houseNum", {
              required: "house is required",
              minLength: 15,
              maxLength: 17,
            }),
          }}
          width="11vw"
          error={errors.zipCode}
        />
      </div>
      <div className={styles.combineContainer}>
        <div>
          <h2>Expiry date</h2>
          <InputField
            type="text"
            placeholder=""
            registerReq={{
              ...register("street", {
                required: "street is required",
                minLength: 3,
              }),
            }}
            error={errors.street}
            width=""
          />
        </div>
        <div>
          <h2>CVV</h2>
          <InputField
            type="text"
            placeholder=""
            registerReq={{
              ...register("houseNum", {
                required: "house is required",
                minLength: 3,
                maxLength: 3,
              }),
            }}
            width="30px"
            error={errors.zipCode}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
