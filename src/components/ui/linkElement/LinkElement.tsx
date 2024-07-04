import { Link } from "react-router-dom";
import styles from "./linkElement.module.scss";
import React from "react";

interface LinkElementProps {
  link: string;
  title: string;
  fontSize: string;
}

const LinkElement = ({ link,title, fontSize }: LinkElementProps) => {
  return (
    <Link to={link}>
      <h3 className={styles.linkElement} style={{fontSize : fontSize}}>{title}</h3>
    </Link>
  );
};

export default LinkElement;
