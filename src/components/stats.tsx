import { useMemo } from "react";
import { useAppSelector } from "../modules/redux/hook";
import styles from "./stats.module.css";
import { images } from "../constants";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const { me } = useAppSelector(({ app }) => app);
  const navigate = useNavigate();

  const Legion = useMemo(() => {
    return (
      <div className={styles.statsLegion}>
        <div className={styles.legionBackground}>
          <button
            className={styles.legionButton}
            onClick={() => navigate("/tier")}
          >
            <img
              src={images.tiers["KNIGHT"]}
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
        <img src={images.coin.INGAME} alt="tokIcon" className={styles.tokenIcon} />
        &nbsp;
        <strong>{Number(me?.balances?.INGAME || 0).toFixed(2)}</strong>
      </div>
      {Legion}
    </div>
  );
};

export default Stats;
