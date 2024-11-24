import { useMemo } from "react";
import Character from "../../components/character/character";
import Progress from "../../components/progress";
import Tab from "../../components/tab";
import { images } from "../../constants";
import { Hero } from "../../interfaces";
import { useAppSelector } from "../../modules/redux/hook";
import styles from "./fight.module.css";
const FightPage = () => {
  const { matchResult } = useAppSelector(({ app }) => app);
  const tabs = [
    {
      name: "Default",
      value: "DEFAULT",
    },
    {
      name: "Detailed",
      value: "DETAILED",
    },
  ];

  const heroes = useMemo(() => {
    const item = (hero: Hero) => (
      <>
        <div className={styles.gridItem}>
          <div className={styles.button}>
            <img
              src={images.system.user}
              className={styles.imgSize}
              alt="button icon"
            />
          </div>
        </div>
        <div className={`${styles.gridTextContainer} ${styles.mlSmall}`}>
          <div className={styles.flexContainer}>
            <div className={styles.text}>Hero name</div>
          </div>
          <div className={styles.flexSelfEnd}>
            <div className={styles.flexContainer}>
              <img
                src="	https://staggering.tonkombat.com/assets/champion-D65sUMQF.webp"
                alt="Champion Icon"
                className={styles.imgSmall}
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </>
    );

    const {
      initData: { leftHeroes, rightHeroes },
    } = matchResult!;
    return (
      <div className={`${styles.flexContainer} ${styles.flexSpaceBetween}`}>
        <div className={`${styles.gridContainer} ${styles.ltr}`}>
          {item(leftHeroes[0])}
        </div>
        <div className={`${styles.gridContainer} ${styles.rtl}`}>
          {item(rightHeroes[0])}
        </div>
      </div>
    );
  }, [matchResult]);

  return (
    <>
      {heroes}
      <div className={`${styles.gridContainer} ${styles.match}`}>
        <div className={`${styles.contentLeft}`}>
          <button type="button" className={styles.button}>
            <img src={images.info} alt="arrow" />
          </button>
        </div>
        <div className={`${styles.contentRight}`}>
          <button type="button" className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="13 19 22 12 13 5 13 19"></polygon>
              <polygon points="2 19 11 12 2 5 2 19"></polygon>
            </svg>
          </button>
        </div>
        <Character />
        <div>VS</div>
        <Character />
      </div>
      <Tab
        data={tabs}
        defaultValue="DEFAULT"
        onChanged={(e) => {
          console.log("Tab changed", e);
        }}
      />
      <div className={styles.defaultInfo}>
        <div className={styles.skillLine}>
          <div className={`${styles.skill} ${styles.yourSkill}`}>
            <div className={styles.skillInfo}>
              <div>1252.63</div>
              <div>Attack</div>
            </div>
            <div className="progress">
              <Progress total={10} value={10} />
            </div>
          </div>
          <img className={styles.skillImage} src={images.hp} alt="skill" />
          <div className={`${styles.skill} ${styles.enemySkill}`}>
            <div className={styles.skillInfo}>
              <div>1252.63</div>
              <div>Attack</div>
            </div>
            <div className="progress">
              <Progress total={9000} value={1252} />
            </div>
          </div>
        </div>
        <div className={styles.skillLine}>
          <div className={`${styles.skill} ${styles.yourSkill}`}>
            <div className={styles.skillInfo}>
              <div>1252.63</div>
              <div>Attack</div>
            </div>
            <div className="progress">
              <Progress total={1000} value={1000} />
            </div>
          </div>
          <img className={styles.skillImage} src={images.hp} alt="skill" />
          <div className={`${styles.skill} ${styles.enemySkill}`}>
            <div className={styles.skillInfo}>
              <div>1252.63</div>
              <div>Attack</div>
            </div>
            <div className="progress">
              <Progress total={9000} value={1252} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FightPage;
