import InputField from "@components/ui/inputField/InputField";
import React from "react";
import styles from "./OrderForms.module.scss";
import { FieldErrors } from "react-hook-form";

interface ShippiningFormProps {
  register: any;
  errors: FieldErrors;
}

const ShippiningForm = ({ register, errors }: ShippiningFormProps) => {
  return (
    <div className={styles.adressInfo}>
      <h2>Second Step. Enter shipping information</h2>
      <div className={styles.adressFormContainer}>
        <div className={styles.countryForm}>
          <h2>Country</h2>
          <InputField
            type="text"
            placeholder=""
            registerReq={{
              ...register("country", {
                required: "Required field",
                minLength: 3,
              }),
            }}
            error={errors.country}
          />
        </div>
        <div className={styles.cityForm}>
          <h2>City</h2>
          <InputField
            type="text"
            placeholder=""
            registerReq={{
              ...register("city", {
                required: "Required field",
                minLength: 3,
              }),
            }}
            error={errors.city}
          />
        </div>
        <div className={styles.zipCodeForm}>
          <h2>ZIP code</h2>
          <InputField
            type="number"
            placeholder=""
            registerReq={{
              ...register("zipCode", {
                required: "Required",
                minLength: 3,
              }),
            }}
            maxLength={9}
            error={errors.zipCode}
          />
        </div>
        <div className={styles.streetForm}>
          <h2>Street</h2>
          <InputField
            type="text"
            placeholder=""
            registerReq={{
              ...register("street", {
                required: "Required field",
                minLength: 3,
              }),
            }}
            error={errors.street}
          />
        </div>
        <div className={styles.houseNumForm}>
          <h2>House</h2>
          <InputField
            type="text"
            placeholder=""
            registerReq={{
              ...register("houseNum", {
                required: "Required",
                minLength: 3,
              }),
            }}
            error={errors.zipCode}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippiningForm;
