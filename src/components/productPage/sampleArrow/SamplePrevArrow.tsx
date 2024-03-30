import React from "react";
import styles from "./sampleArrow.module.scss";
import ArrowIcon from "../../ui/icon/ArrowIcon";
import { SampleArrowProps } from "../../../api/types";

const SamplePrevArrow = ({onClick}:SampleArrowProps) => {
    return (
        <div className={styles.prevArrowContainer} onClick={onClick}>
        <ArrowIcon width={40} height={40}/>
        </div>
    )
}

export default SamplePrevArrow;