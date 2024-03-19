import React from "react";
import styles from "./info.module.scss";

interface UserInfo {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
}
interface InfoProps {
  userInfo: UserInfo
}


const Info = ({userInfo}:InfoProps) => {

  return (
    <div className={styles.main}>
      <h2>VOLODYA MUCHAILUK</h2>
      <div className={styles.userInfo}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2>Email</h2>
            <p>{userInfo.email}</p>
          </div>
          <button>Change</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2>Password</h2>
            <p>********</p>
          </div>
          <button>Change</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2>Username</h2>
            <p>{userInfo.username}</p>
          </div>
          <button>Change</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2>Phone</h2>
            <p>{userInfo.phone}</p>
          </div>
          <button>Change</button>
        </div>
      </div>
      <div className={styles.accountFunc}>
        <button>Sign out</button>
        <button>Delete your account</button>
      </div>
    </div>
  );
};

export default Info;
