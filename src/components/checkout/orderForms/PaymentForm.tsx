import React, { ChangeEvent, useState } from "react";
import styles from "./OrderForms.module.scss";
import classNames from "classnames";
import PayPalIcon from "@components/ui/icon/paymentMethods/PayPalIcon";
import GooglePayIcon from "@components/ui/icon/paymentMethods/GooglePayIcon";
import ApplePayIcon from "@components/ui/icon/paymentMethods/ApplePayIcon";
import Divider from "@components/ui/divider/Divider";
import InputField from "@components/ui/inputField/InputField";
import { FieldErrors } from "react-hook-form";
import Loader from "@components/ui/loader/Loader";

interface PaymentFormProps {
  register: any;
  errors: FieldErrors;
  expDataOnChangeAction: (event: ChangeEvent<HTMLInputElement>) => void;
  cardNumOnChangeAction: (event: ChangeEvent<HTMLInputElement>) => void;
  expressPaymentAction: (method: string) => void;
}

const PaymentForm = ({
  register,
  errors,
  expDataOnChangeAction,
  cardNumOnChangeAction,
  expressPaymentAction,
}: PaymentFormProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loadingPaymentMethod, setLoadingPaymentMethod] = useState<
    string | null
  >(null);

  const handlePaymentClick = (method: string) => {
    setLoadingPaymentMethod(method);
    setTimeout(() => {
      setLoadingPaymentMethod(null);
    }, 3000);
  };

  return (
    <div className={styles.paymentInfo}>
      <h2>Third Step. Pay for the order</h2>
      <div className={styles.expressPaymentContainer}>
        <button
          className={classNames(styles.paymentButton, styles.paypalTheme)}
          type="button"
          onClick={() => {
            setDisabled(true);
            handlePaymentClick("payPal");
            expressPaymentAction("PayPal")
          }}
          disabled={disabled}
        >
          {loadingPaymentMethod === "payPal" ? (
            <Loader />
          ) : (
            <PayPalIcon width={50} height={20} />
          )}
        </button>
        <button
          className={classNames(styles.paymentButton, styles.googlePayTheme)}
          type="button"
          onClick={() => {
            setDisabled(true);
            handlePaymentClick("googlePay");
            expressPaymentAction("GooglePay")
          }}
          disabled={disabled}
        >
          {loadingPaymentMethod === "googlePay" ? (
            <Loader />
          ) : (
            <GooglePayIcon width={50} height={20} />
          )}
        </button>
        <button
          className={classNames(styles.paymentButton, styles.applePayTheme)}
          type="button"
          onClick={() => {
            setDisabled(true);
            handlePaymentClick("applePay");
            expressPaymentAction("ApplePay")
          }}
          disabled={disabled}
        >
          {loadingPaymentMethod === "applePay" ? (
            <Loader />
          ) : (
            <ApplePayIcon width={50} height={20} />
          )}
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
              required: "Required field",
              minLength: 19,
              maxLength: 19,
              disabled: disabled,
            }),
          }}
          disabled={disabled}
          width="11vw"
          error={errors.cardNum}
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
                disabled: disabled,
              }),
            }}
            disabled={disabled}
            action={expDataOnChangeAction}
            error={errors.expDate}
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
                disabled: disabled,
              }),
            }}
            disabled={disabled}
            width="30px"
            error={errors.CVV}
            maxLength={3}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
