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
import ProductInfo from "./productInfo/ProductInfo";
import UserInfoForm from "./orderForms/UserInfoForm";
import ShippiningForm from "./orderForms/shippiningForm";
import PaymentForm from "./orderForms/paymentForm";

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
        <UserInfoForm register={register} errors={errors} />
        <ShippiningForm register={register} errors={errors} />
        <PaymentForm register={register} errors={errors} />
      </form>
      <ProductInfo products={products} discountedTotal={discountedTotal} />
    </div>
  );
};

export default Checkout;
