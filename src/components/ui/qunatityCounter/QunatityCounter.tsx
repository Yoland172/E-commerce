import React from 'react';
import styles from "./qunatityCounter.module.scss";
import MinimalisticArrowLeft from '../icon/MinimalisticArrowLeft';
import MinimalisticArrowRight from '../icon/MinimalisticArrowRight';

interface QunatityCounterProps {
  increment: () => void;
  decrement: () => void;
  isFetching: boolean;
  quantity: number
}

const QunatityCounter = ({increment,decrement,isFetching,quantity}:QunatityCounterProps) => {
  return (
    <div className={styles.quantityContainer}>
    <button
      onClick={decrement}
      disabled={isFetching || quantity < 2}
    >
      <MinimalisticArrowLeft width={25} height={25} />
    </button>
    <h3 className={styles.productStock}>{quantity}</h3>{" "}
    <button
      onClick={increment}
      disabled={isFetching}
    >
      <MinimalisticArrowRight width={25} height={25} />
    </button>
  </div>
  )
}

export default QunatityCounter
