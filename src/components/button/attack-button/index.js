import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./attack-button.module.css";

const AttackButtonComponent = () => {
  const navigate = useNavigate();
  const [currentMatch, setCurrentMatch] = React.useState(0);

  const stageMemo = React.useMemo(() => {
    const matchs = [
      {
        title: "Ranked match",
      },
      {
        title: "Friendly match",
      },
    ];
    return matchs.map((match, index) => (
      <div key={index} className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.button} ${
            currentMatch === index ? styles.buttonActive : ""
          }`}
          onClick={() => setCurrentMatch(index)}
        >
          <div className={styles.buttonIcon}>
            <img
              src="./assets/icons/match.svg"
              alt="match"
              className={styles.rankIcon}
            />
          </div>
          <span> {match.title}</span>
        </button>
      </div>
    ));
  }, [currentMatch, setCurrentMatch]);
  return (
    <>
      <div className={styles.container}>
        {stageMemo}
        <div className={styles.buttonAttack}>
          <button
            type="button"
            onClick={() => navigate("/fight")}
            className={`${styles.button} ${styles.friendly}`}
          >
            <div className={styles.buttonIcon}></div>
            <img
              src="./assets/icons/fight.svg"
              alt="Fight icon"
              className={styles.rankIcon}
            />
            Fight
          </button>
        </div>
      </div>
    </>
  );
};

export default AttackButtonComponent;
