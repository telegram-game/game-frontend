import React from "react";
import styles from "./unsupport.module.css";
const UnsupportPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Something Went Wrong!</h3>
        </div>
        <div className={styles.description}>
          The device you're using is not supported or there was an error
          processing your request.
        </div>
      </div>
    </div>
  );
};

export default UnsupportPage;
