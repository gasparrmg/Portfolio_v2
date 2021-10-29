import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
    // const type = props.type; // primary, secondary

    return <button className={styles.button}>{props.children}</button>;
};

export default Button;
