import React, { ChangeEvent, useEffect } from "react";
import styles from "./Checkout.module.scss";
import { useForm } from "react-hook-form";
import { CartItem } from "@lib/types/Types";
import ProductInfo from "./productInfo/ProductInfo";
import UserInfoForm from "./orderForms/UserInfoForm";
import ShippiningForm from "./orderForms/ShippiningForm";
import PaymentForm from "./orderForms/PaymentForm";
import JSONFile from "../../assets/CountryCodesWithFlagsSVG.json";

interface CheckoutProps {
  products: CartItem[];
  discountedTotal: number;
}

interface CheckoutInputs {
  firstName?: string;
  lastName?: string;
  countryCode?: string;
  phoneNumber?: string;
  email?: string;
  country: string;
  city: string;
  street: string;
  houseNum: string;
  zipCode: string;
  cardNum: string;
  expDate: string;
  CVV?: string;
  paymentMethod:string;
}

const Checkout = ({ products, discountedTotal }: CheckoutProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<CheckoutInputs>({
    defaultValues:{
      paymentMethod:"creditCard"
    }
  });

  const handleCardInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value
      .replace(/\s+/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setValue("cardNum", value, { shouldValidate: true });
  };

  const handleExpDataInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newValue = value.replace(/[^0-9]/g, "");
    if (newValue.length === 2 && value.length === 2) {
      setValue("expDate", `${newValue}/`, { shouldValidate: true });
    } else if (newValue.length <= 2) {
      setValue("expDate", newValue, { shouldValidate: true });
    } else {
      setValue("expDate", value, { shouldValidate: true });
    }
  };

  const setPaymentMethod = (method:string) => {
    setValue("paymentMethod", method)
  }

  const onSubmit = (data: any) => {
    console.log(data); //noot working
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.infoContainer}>
        <UserInfoForm register={register} errors={errors} control={control} />
        <ShippiningForm register={register} errors={errors} />
        <PaymentForm
          register={register}
          errors={errors}
          expDataOnChangeAction={handleExpDataInputChange}
          cardNumOnChangeAction={handleCardInputChange}
          expressPaymentAction={(method:string) => {setPaymentMethod(method)}}
        />
      </div>
      <ProductInfo products={products} discountedTotal={discountedTotal} />
    </form>
  );
};

export default Checkout;
