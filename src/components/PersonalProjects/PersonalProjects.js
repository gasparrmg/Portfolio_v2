import React from "react";
import Card from "../UI/Card";
import styles from "./PersonalProjects.module.scss";

import projectData from "../../assets/data/projects";

const PersonalProjects = (props) => {
    return (
        <section className={styles.personal_projects}>
            <h2>Personal Projects</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
            </p>
            <div className={styles.container}>
                {projectData.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            text={item.description}
                            tags={item.tags}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default PersonalProjects;
