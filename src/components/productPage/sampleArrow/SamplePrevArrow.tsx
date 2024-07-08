import React from "react";
import ArrowIcon from "@components/ui/icon/ArrowIcon";
import styles from "./SampleArrow.module.scss";

export interface SampleArrowProps {
  onClick?: () => void;
}

const SamplePrevArrow = ({ onClick }: SampleArrowProps) => {
  return (
    <div className={styles.prevArrowContainer} onClick={onClick}>
      <ArrowIcon width={40} height={40} />
    </div>
  );
};

export default SamplePrevArrow;
