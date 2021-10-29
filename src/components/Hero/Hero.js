import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.scss";
import { init } from "ityped";

import portrait from "../../assets/images/portrait.jpg";

const Hero = (props) => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Mobile", "Web"],
            typeSpeed: 200,
            backDelay: 2000,
        });
    }, []);
    return (
        <section className={styles.hero_flex}>
            <img src={portrait} className={styles.portrait} />
            <div className={styles.hero_content_flex}>
                <h3>Hi there, I'm</h3>
                <h1>Rafael</h1>
                <h3>
                    and I'm a <span ref={textRef}></span>Developer
                </h3>
                <p>
                    from Lisbon with a Master’s degree in Informatics that has a
                    special fond for Mobile and Web Development.
                </p>
            </div>
        </section>
    );
};

export default Hero;
