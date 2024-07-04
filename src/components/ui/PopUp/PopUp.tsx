import React, { ReactNode } from 'react'
import styles from "./popUp.module.scss";
import classNames from 'classnames';

interface PopUpProps {
    active: boolean;
    setActive: (status:boolean) => void;
    children: ReactNode
}

const PopUp = ({active,setActive, children}:PopUpProps) => {
  return (
    <div className={classNames(styles.container, active && styles.active)} onClick={() => {setActive(false) }}>
      <div className={styles.main} onClick={(e: React.MouseEvent) => {e.stopPropagation();}}>
        {children}
      </div>
    </div>
  )
}

export default PopUp
