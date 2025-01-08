import React from "react";
import styles from "./underdevelopment.module.css";

const UnderDevelopment = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Under Development</h1>
      <p className={styles.description}>
        This page is currently under development. Please check back later.
      </p>
    </div>
  );
};

export default UnderDevelopment;
