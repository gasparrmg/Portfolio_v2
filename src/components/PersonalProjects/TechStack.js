import React from "react";

const techStacks = [
    {
        name: "Android Studio",
        image: "../../assets/images/tech/androidstudio.svg",
    },
    {
        name: "HTML",
        image: "../../assets/images/tech/html.svg",
    },
    {
        name: "CSS",
        image: "../../assets/images/tech/css.svg",
    },
    {
        name: "JS",
        image: "../../assets/images/tech/js.svg",
    },
    {
        name: "PHP",
        image: "../../assets/images/tech/php.svg",
    },
    {
        name: "MySQL",
        image: "../../assets/images/tech/mysql.svg",
    },
    {
        name: "Figma",
        image: "../../assets/images/tech/figma.svg",
    },
    {
        name: "NodeJS",
        image: "../../assets/images/tech/nodejs.svg",
    },
    {
        name: "GCP",
        image: "../../assets/images/tech/gcp.svg",
    },
];

const TechStack = (props) => {
    const techName = props.tech;

    const techObj = techStacks.filter((item) => {
        return item.name === techName;
    });

    const techLogoPath = techObj[0].image;

    return <img src={require(techLogoPath)} alt={techName} />;
};

export default TechStack;
