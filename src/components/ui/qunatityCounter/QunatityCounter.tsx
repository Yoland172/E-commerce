import React from 'react';
import styles from "./qunatityCounter.module.scss";
import MinimalisticArrowLeftIcon from '../icon/MinimalisticArrowLeftIcon';
import MinimalisticArrowRightIcon from '../icon/MinimalisticArrowRightIcon';

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
      <MinimalisticArrowLeftIcon width={25} height={25} />
    </button>
    <h3 className={styles.productStock}>{quantity}</h3>{" "}
    <button
      onClick={increment}
      disabled={isFetching}
    >
      <MinimalisticArrowRightIcon width={25} height={25} />
    </button>
  </div>
  )
}

export default QunatityCounter
