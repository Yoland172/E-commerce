import React from "react";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./login.module.scss";
import Loader from "../ui/loader/Loader";

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
    setLogin(username, password);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <img
            src="https://i.pinimg.com/736x/5a/83/b5/5a83b5ceeb1b06247933a38ee180e9a8.jpg"
            alt=""
          />
        </div>
        <div className={styles.registerContainer}>
          <div className={styles.headerContainer}>
            <h1>LOG IN</h1>
            {error && <p>Username or password are incorrect</p>}
          </div>
          <form
            className={styles.registerForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.inputForm}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.input}
                  {...register("username", {
                    required: "Username is required",
                    minLength: 3,
                  })}
                />
                <div className={styles.line}></div>
              </div>
              {errors.username && (
                <p className={styles.errorMessage}>{errors.username.message}</p>
              )}
            </div>
            <div className={styles.inputForm}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Password"
                  className={styles.input}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <div
                  className={classNames(
                    styles.line,
                    errors.password && styles.error
                  )}
                ></div>
              </div>
              {errors.password && (
                <p className={styles.errorMessage}>{errors.password.message}</p>
              )}
            </div>
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
