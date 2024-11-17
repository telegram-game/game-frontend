import React from "react";
import styles from "./balance.module.css"; // Import CSS module

const BalanceComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="https://staggering.tonkombat.com/assets/TOKIcon-m0UJTJMj.webp"
          alt="Token Icon"
          className={styles.token}
        />
        <span className={styles.balanceText}>
          Balance: {props?.balance || 0}
        </span>
      </div>
    </div>
  );
};

export default BalanceComponent;
