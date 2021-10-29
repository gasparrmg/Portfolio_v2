import React from "react";
import TechStack from "../PersonalProjects/TechStack";
import styles from "./Card.module.scss";

const Card = (props) => {
    const techArray = props.tags;

    return (
        <div className={styles.card} onClick={props.onClick}>
            <img
                className={styles.card_image}
                src={props.image}
                alt="Project"
            />
            <div className={styles.card_content}>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <div className={styles.techContainer}>
                    {/* {techArray.map((item) => {
                        return <TechStack key={item} tech={item} />;
                    })} */}
                </div>
            </div>
        </div>
    );
};

export default Card;
