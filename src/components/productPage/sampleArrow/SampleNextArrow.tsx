import React from "react";
import ArrowIcon from "@components/ui/icon/ArrowIcon";
import styles from "./sampleArrow.module.scss";

export interface SampleArrowProps {
  onClick?: () => void;
}

const SampleNextArrow = ({ onClick }: SampleArrowProps) => {
  return (
    <div className={styles.nextArrowContainer} onClick={onClick}>
      <ArrowIcon width={40} height={40} />
    </div>
  );
};

export default SampleNextArrow;
