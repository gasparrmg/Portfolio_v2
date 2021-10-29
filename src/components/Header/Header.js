import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Button from "../UI/Button";

import logo from "../../assets/images/logo_rg.svg";

const Header = (props) => {
    const [show, setShow] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    const onScrollHandler = () => {
        console.log(show);
        console.log(prevScrollPos);

        const currScrollPos = window.scrollY;

        console.log(currScrollPos);
        //setShow(prevScrollPos > currScrollPos);
        // setShow(false);
        setPrevScrollPos(currScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScrollHandler);
        return () => {
            window.removeEventListener("scroll", onScrollHandler);
        };
    }, []);

    return (
        <header className={`${styles.header} ${show ? "header--hidden" : ""}`}>
            <img className={styles.logo} src={logo} alt="logo" />
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <a href="#work">Work Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
            <Button type="primary">Curriculum Vitae</Button>
        </header>
    );
};

export default Header;
