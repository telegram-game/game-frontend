import React from "react";
import styles from "./bonus.module.css";
const BonusComponent = () => {
  return (
    <div>
      <div className={styles.bonusContainer}>
        <div className={styles.dailyItem}>
          <button className={styles.dailyButton}>
            <img
              src="data:image/webp;base64,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"
              alt="DailyCheckin"
              className={styles.dailyCheckinImage}
            />
            <div className={styles.dailyInfo}>
              <span className={styles.dailyTitle}>Daily Bonus</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BonusComponent;