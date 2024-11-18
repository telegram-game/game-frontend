import { useMemo } from "react";
import styles from "./stats.module.css";

const Stats = () => {
  const Legion = useMemo(() => {
    return (
      <div className={styles.statsLegion}>
        <div className={styles.legionBackground}>
          <button className={styles.legionButton}>
            <img
              src="https://staggering.tonkombat.com/assets/knight-CayjY10F.webp"
              alt="rank icon"
              className={styles.rankIcon}
            />
            <p>
              Knight
              <span className="font-medium">
                &nbsp;<strong>I</strong>
              </span>
            </p>
          </button>
        </div>
      </div>
    );
  }, []);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsToken}>
        <img
          src="https://staggering.tonkombat.com/assets/TOKIcon-m0UJTJMj.webp"
          alt="tokIcon"
          className={styles.tokenIcon}
        />
        <strong>73.107</strong>
      </div>
      {Legion}
    </div>
  );
};

export default Stats;
