import React, { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { images } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { requestGetMission } from "../../modules/redux/slices/app.slice";
import styles from "./missions.module.css";

const Missions = () => {
  const dispatch = useAppDispatch();
  const { missions: missionsData } = useAppSelector(({ app }) => app);
  const [currentTab, setCurrentTab] = React.useState("ACTIVE");

  const [missions, setMissions] = React.useState<
    Array<any>
    // { title: string; name: string; description?: string }
  >();

  useEffect(() => {
    setMissions(missionsData);
  }, [missionsData]);

  React.useEffect(() => {
    if (currentTab === "ACTIVE") {
      dispatch(requestGetMission());
      setMissions([]);
    } else {
      toast("In development...");
    }
  }, [currentTab]);

  const missionMemo = useMemo(() => {
    if (!missions?.length) {
      return (
        <div className={styles.mission}>
          <p className={styles.title}>All missions completed!</p>
          <p className={styles.description}>
            New challenges will be ready for you soon.
            <br />
            Please come back later!
          </p>
        </div>
      );
    }
    return (
      <div className={styles.mission}>
        {missions?.map((mission, index) => (
          <div
            className={styles.item}
            key={index}
            onClick={() => {
              window.open(mission?.metaData?.socialIdOrLink, "_blank");
            }}
          >
            <div className={styles.missionIcon}>
              <img
                src={(images.socials as any)[mission?.metaData?.socialType]}
                alt='Mission Icon'
              />
            </div>
            <div className={styles.content}>
              <p className={styles.title}>{mission?.name}</p>
              <p className={styles.description}>{mission?.description}</p>
            </div>
            <div className={styles.progress}>
              <img src={images.system.arrow.right} alt='Arrow' />
            </div>
          </div>
        ))}
      </div>
    );
  }, [missions]);

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

      {missionMemo}
    </div>
  );
};

export default Missions;
