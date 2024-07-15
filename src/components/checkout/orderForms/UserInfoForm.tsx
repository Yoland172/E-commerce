import React from "react";
import styles from "./OrderForms.module.scss";
import InputField from "@components/ui/inputField/InputField";
interface UserInfoFormProps {
  register: any;
  errors: any;
}

const UserInfoForm = ({ register, errors }: UserInfoFormProps) => {
  return (
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
  );
};

export default UserInfoForm;
