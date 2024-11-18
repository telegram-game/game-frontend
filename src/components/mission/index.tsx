import React from "react";
import Item from "../item";
import styles from "./missions.module.css";

const Missions = () => {
  const [currentTab, setCurrentTab] = React.useState("ACTIVE");

  const [missions, setMissions] =
    React.useState<Array<{ title: string; description?: string }>>();

  React.useEffect(() => {
    if (currentTab === "ACTIVE") {
      setMissions([]);
    } else {
      setMissions([
        {
          title: "Complete 5 missions",
          description: "Complete 5 missions to level up",
        },
        {
          title: "Complete 5 missions",
        },
      ]);
    }
  }, [currentTab]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Tavern's missions</span>
      <div className={styles.tabButton}>
        <button
          onClick={() => setCurrentTab("ACTIVE")}
          className={`${styles.button} ${
            currentTab === "ACTIVE" ? styles.active : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setCurrentTab("COMPLETED")}
          className={`${styles.button} ${
            currentTab === "COMPLETED" ? styles.active : ""
          }`}
        >
          Completed
        </button>
      </div>

      {missions?.length ? (
        <div className={styles.mission}>
          {missions?.map((mission, index) => (
            <Item data={mission} key={index} />
          ))}
        </div>
      ) : (
        <div className={styles.mission}>
          <p className={styles.title}>All missions completed!</p>
          <p className={styles.description}>
            New challenges will be ready for you soon.
            <br />
            Please come back later!
          </p>
        </div>
      )}
    </div>
  );
};

export default Missions;
