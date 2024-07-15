import InputField from "@components/ui/inputField/InputField";
import React from "react";
import styles from "./OrderForms.module.scss";

interface ShippiningFormProps {
  register: any;
  errors: any;
}

const ShippiningForm = ({ register, errors }: ShippiningFormProps) => {
  return (
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
  );
};

export default ShippiningForm;
