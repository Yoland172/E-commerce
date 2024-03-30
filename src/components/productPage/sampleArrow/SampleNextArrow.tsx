import React from "react";
import styles from "./sampleArrow.module.scss";
import ArrowIcon from "../../ui/icon/ArrowIcon";
import { SampleArrowProps } from "../../../api/types";

const SampleNextArrow = ({onClick}:SampleArrowProps) => {
    return (
        <div className={styles.nextArrowContainer} onClick={onClick}>
        <ArrowIcon width={40} height={40}/>
        </div>
    )
}

export default SampleNextArrow;