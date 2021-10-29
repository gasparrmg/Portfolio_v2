import React from "react";
import styles from "./Sections.module.scss";

const Sections = (props) => {
    return <main className={styles.sections}>{props.children}</main>;
};

export default Sections;
