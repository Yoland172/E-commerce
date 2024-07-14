import React from "react";
import styles from "./Checkout.module.scss";
import { useForm } from "react-hook-form";
import InputField from "@components/ui/inputField/InputField";
import PayPalIcon from "@components/ui/icon/paymentMethods/PayPalIcon";
import GooglePayIcon from "@components/ui/icon/paymentMethods/GooglePayIcon";
import ApplePayIcon from "@components/ui/icon/paymentMethods/ApplePayIcon";
import classNames from "classnames";
import Divider from "@components/ui/divider/Divider";
import { CartItem } from "@lib/types/Types";
import ProductItem from "./ProductItem/ProductItem";

interface CheckoutProps {
  products: CartItem[];
  discountedTotal: number;
}

interface CheckoutInputs {
  firstName?: string;
  lastName?: string;
  countyPhoneCode?: string;
  phoneNumber?: string;
  email?: string;
  country: string;
  city: string;
  street: string;
  houseNum: string;
  zipCode: string;
}

const Checkout = ({ products, discountedTotal }: CheckoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputs>({
    defaultValues: {
      countyPhoneCode: "+",
    },
  });

  return (
    <div className={styles.container}>
      <form className={styles.infoContainer}>
        <h2 className={styles.title}>Your order is almost ready</h2>
        <div className={styles.userInfoContainer}>
          <h2>First Step. Enter infromation about yourself</h2>
          <div>
            <h2>First Name</h2>
            <InputField
              type="text"
              placeholder=""
              registerReq={{
                ...register("firstName", {
                  required: "First name is required",
                  minLength: 3,
                }),
              }}
              error={errors.firstName}
            />
          </div>
          <div>
            <h2>Last Name</h2>
            <InputField
              type="text"
              placeholder=""
              registerReq={{
                ...register("lastName", {
                  required: "Last name is required",
                  minLength: 3,
                }),
              }}
              error={errors.lastName}
            />
          </div>
          <div>
            <h2>Email</h2>
            <InputField
              type="text"
              placeholder=""
              registerReq={{
                ...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                  minLength: 3,
                }),
              }}
              error={errors.email}
            />
          </div>
          <div>
            <h2>Phone Number</h2>
            <div className={styles.combineContainer}>
              <InputField
                type="text"
                placeholder=""
                registerReq={{
                  ...register("countyPhoneCode", {
                    required: "Code is required",
                    minLength: 3,
                    maxLength: 4,
                  }),
                }}
                error={errors.countyPhoneCode}
                width="1vw"
              />
              <InputField
                type="text"
                placeholder=""
                registerReq={{
                  ...register("phoneNumber", {
                    required: "Number is required",
                    minLength: 9,
                  }),
                }}
                width="12vw"
                error={errors.phoneNumber}
              />
            </div>
          </div>
        </div>
        <div className={styles.adressInfo}>
          <h2>Second Step. Enter shipping information</h2>
          <div>
            <h2>Country</h2>
            <InputField
              type="text"
              placeholder=""
              registerReq={{
                ...register("country", {
                  required: "Country name is required",
                  minLength: 3,
                }),
              }}
              width="10vw"
              error={errors.country}
            />
          </div>
          <div className={styles.combineContainer}>
            <div>
              <h2>City</h2>
              <InputField
                type="text"
                placeholder=""
                registerReq={{
                  ...register("city", {
                    required: "City is required",
                    minLength: 3,
                  }),
                }}
                error={errors.city}
                width="11vw"
              />
            </div>
            <div>
              <h2>ZIP code</h2>
              <InputField
                type="text"
                placeholder=""
                registerReq={{
                  ...register("zipCode", {
                    required: "Zip code is required",
                    minLength: 3,
                  }),
                }}
                width="70px"
                error={errors.zipCode}
              />
            </div>
          </div>
          <div className={styles.combineContainer}>
            <div>
              <h2>Street</h2>
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
                width="11vw"
              />
            </div>
            <div>
              <h2>House</h2>
              <InputField
                type="text"
                placeholder=""
                registerReq={{
                  ...register("houseNum", {
                    required: "house is required",
                    minLength: 3,
                  }),
                }}
                width="20px"
                error={errors.zipCode}
              />
            </div>
          </div>
        </div>
        <div className={styles.paymentInfo}>
          <h2>Third Step. Pay for the order</h2>
          <div className={styles.expressPaymentContainer}>
            <button
              className={classNames(styles.paymentButton, styles.paypalTheme)}
            >
              <PayPalIcon width={50} height={20} />
            </button>
            <button
              className={classNames(
                styles.paymentButton,
                styles.googlePayTheme
              )}
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
      </form>
      <div className={styles.cartInfoContainer}>
        <div className={styles.productContianer}>
          {products.length > 0 &&
            products.map((el, index) => {
              return (
                <>
                  <ProductItem
                    img={el.thumbnail}
                    title={el.title}
                    quantity={el.quantity}
                  />
                  {index !== products.length - 1 && <Divider />}
                </>
              );
            })}
        </div>
        <Divider />
        <div className={styles.priceInfoContainer}>
          <div className={styles.priceInfo}>
            <h2>Price for products</h2>
            <h3>{discountedTotal}</h3>
          </div>
          <div className={styles.priceInfo}>
            <h2>Shipining</h2>
            <h3>--</h3>
          </div>
        </div>
        <Divider />
        <div className={styles.submitContainer}>
          <div className={styles.priceInfo}>
            <h2>Total</h2>
            <h3>{discountedTotal}</h3>
          </div>

          <button className={styles.submitButton}>Order</button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
