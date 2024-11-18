import { useMemo } from "react";
import styles from "./character-stats.module.css";

const CharacterStats = () => {
  const statics = useMemo(() => {
    const stats = {
      stats: [
        {
          icon: null,
          text: "House: Moonbix",
          style: {
            justifyContent: "space-between",
          },
          action: (
            <button className={styles.actionButton}>
              <img src="./assets/icons/rotate.svg" alt="Rotate" />
            </button>
          ),
        },
        {
          icon: null,
          text: "Level: 23",
          hint: (
            <div className={styles.statusIcon}>
              <img src="./assets/icons/info.svg" alt="Info" />
            </div>
          ),
          style: {
            justifyContent: "flex-end",
          },
          action: null,
        },
        {
          icon: "./assets/icons/attack.svg",
          text: "Attack: 1110",
          buffer: 60,
        },
        {
          icon: "./assets/icons/luck.svg",
          text: "Luck: 9.56 - 11.11",
        },
        {
          icon: "./assets/icons/hp.svg",
          text: "HP: 8232",
          buffer: 300,
        },
        {
          icon: "./assets/icons/fatal-blow.svg",
          text: "Fatal blow",
          style: {
            justifyContent: "space-between",
          },
          action: (
            <button className={styles.actionButton}>
              <img
                className="skillIcon"
                src="./assets/icons/fatal-blow-skill.svg"
                alt="Fatal blow Skill"
              />
              <img
                className={styles.rotateIcon}
                src="./assets/icons/rotate.svg"
                alt="Rotate"
              />
            </button>
          ),
        },
      ],
      ff: {},
    };
    return (
      <div className={styles.statsContainer}>
        {stats.stats.map((stat, index) => (
          <div key={index} className={styles.statItem} style={stat.style}>
            {stat.icon && <img src={stat.icon} alt={stat.text} />}
            <span className={styles.statText}>
              {stat.text}{" "}
              {stat.buffer && (
                <span className={styles.bufferText}>(+ {stat.buffer})</span>
              )}
            </span>
            {stat.hint}
            {stat.action}
          </div>
        ))}
      </div>
    );
  }, []);

  return <div className={styles.cardContainer}>{statics}</div>;
};

export default CharacterStats;
