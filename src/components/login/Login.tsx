import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "@components/ui/loader/Loader";
import InputField from "@components/ui/inputField/InputField";
import styles from "./login.module.scss";

interface AuthPprops {
  setLogin: (username: string, password: string) => void;
  isFetching: boolean;
  error: string;
}

interface AuthInputs {
  username: string;
  password: string;
}

const Login = ({ setLogin, error, isFetching }: AuthPprops) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>();

  const onSubmit: SubmitHandler<AuthInputs> = ({
    username,
    password,
  }: AuthInputs) => {
    console.log(username, password);
    setLogin(username, password);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <img
          src="https://i.pinimg.com/736x/5a/83/b5/5a83b5ceeb1b06247933a38ee180e9a8.jpg"
          alt=""
        />
        <div className={styles.registerContainer}>
          <h1>LOG IN</h1>
          <p className={error && styles.active}>{error}</p>
          <form
            className={styles.registerForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              type="text"
              placeholder="Username"
              registerReq={{
                ...register("username", {
                  required: "Username is required",
                  minLength: 3,
                }),
              }}
              error={errors.username}
            />
            <InputField
              type="password"
              placeholder="Password"
              registerReq={{
                ...register("password", {
                  required: "Password is required",
                }),
              }}
              error={errors.password}
            />
            <button className={styles.submitButton} disabled={isFetching}>
              {isFetching ? <Loader /> : <span>Log in</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
