import React, { ChangeEvent } from "react";
import styles from "./OrderForms.module.scss";
import classNames from "classnames";
import PayPalIcon from "@components/ui/icon/paymentMethods/PayPalIcon";
import GooglePayIcon from "@components/ui/icon/paymentMethods/GooglePayIcon";
import ApplePayIcon from "@components/ui/icon/paymentMethods/ApplePayIcon";
import Divider from "@components/ui/divider/Divider";
import InputField from "@components/ui/inputField/InputField";
import { FieldErrors } from "react-hook-form";

interface PaymentFormProps {
  register: any;
  errors: FieldErrors;
  expDataOnChangeAction: (event: ChangeEvent<HTMLInputElement>) => void;
  cardNumOnChangeAction: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PaymentForm = ({
  register,
  errors,
  expDataOnChangeAction,
  cardNumOnChangeAction,
}: PaymentFormProps) => {
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
          placeholder="xxxx xxxx xxxx xxxx"
          registerReq={{
            ...register("cardNum", {
              required: "house is required",
              minLength: 19,
              maxLength: 19,
            }),
          }}
          width="11vw"
          error={errors.zipCode}
          maxLength={19}
          action={cardNumOnChangeAction}
        />
      </div>
      <div className={styles.combineContainer}>
        <div>
          <h2>Expiry date</h2>
          <InputField
            type="text"
            placeholder="MM/YY"
            registerReq={{
              ...register("expDate", {
                required: "street is required",
                minLength: 3,
              }),
            }}
            action={expDataOnChangeAction}
            error={errors.street}
            maxLength={5}
          />
        </div>
        <div>
          <h2>CVV</h2>
          <InputField
            type="password"
            placeholder="···"
            registerReq={{
              ...register("CVV", {
                required: "house is required",
                minLength: 3,
                maxLength: 3,
              }),
            }}
            width="30px"
            error={errors.zipCode}
            maxLength={3}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
