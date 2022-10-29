import React from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles["nav__logo"]}>
        LOGO
        {/* <img /> */}
      </div>
      <div className={styles["nav__search"]}>
        <FiSearch className={styles["nav__search--icon"]} />
        <input
          type="text"
          placeholder="Input title, genres, people"
          className={styles["nav__search--input"]}
        />
      </div>
    </div>
  );
};

export default NavBar;
