import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./PopUp.module.scss";

interface PopUpProps {
  active: boolean;
  setActive: (status: boolean) => void;
  children: ReactNode;
  closeByClickOutside?: boolean
}

const PopUp = ({ active , setActive, children,closeByClickOutside=true }: PopUpProps) => {
  return (
    <div
      className={classNames(styles.container,  active && styles.active)}
      onClick={() => {
        closeByClickOutside &&  setActive(false);
      }}
    >
      <div
        className={styles.main}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUp;
