import { useMemo } from "react";
import Character from "../../components/character/character";
import Progress from "../../components/progress";
import Tab from "../../components/tab";
import { useAppSelector } from "../../modules/redux/hook";
import styles from "./fight.module.css";
import { Hero } from "../../interfaces";
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
              src="data:image/webp;base64,UklGRsIDAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSAgCAAABkCQAkCFJkT2ztm375t2Tbdu2bds2TrZt27a92+7MOFRVZlXEByJiAsDTrPVnH351bmyZxMAxXZOVDyXa+w90LyaIlZr8KIb6bzeXEWREmg7n0E15qVw8jTSjX6Hboe1lfARSXERPt+XwLN8W9PhJaY8q3UXPvzYXHogWf5FgYLDPNdEzhCSjg30uiV7/kGi4h0tNQ0j2d21Xqn5Awu+yupDoIZLeLYzEZCTexqjUf2ovM5tsRPIzDYpG6H1PqSXWI8N2Wpl+cjidXKcDcoxU1ojfzwLnaxT4z+OeRjvkKXM4LWCCjR3ETS4bHTJ84/I43q5MiMvvPHadkWusit1WNrioUhyAqP6ED0bLAvTxI2NVA2A1su4AsIfXUPCd5zUTEl3ntVCkesgqUBZ8p1h9ywyJbnJL+YzVr9yQ5jGrv4UBip4gp2Jh5bAzEQAsJRb5GYwqdOwHADCPmPqHuk0sM4jFQloNLOOpRczGEAtKrRaWscT+ofYwy0RiAb2llvm0VFDvlGUzrbDSexYPABdpBVD/V26AJK9p+Q1i1QBK/CClggY4BqBRjFQkYrIvKYxCVj+KwVpaIWWi6sM+WkE0XZYIltDym3xMB5D5CqmQwc/uAgDSH44wUbPSgK0Y8p2FXJEAnBPv9kulpFTe/VNOakpS0M09/9QvVFLKmPIoFLH7dWpsArAFVlA4IJQBAAAwDACdASpAAEAAPo04l0glo6ijNfi8yKARiWkAzU/oAEmY+0/9ckWwxhfHycpz322Stscged8VO2GrDtRtN8Jq51PJtln5UYfaXXYD/r7gEZTOmoHxIuxNHW/E0q70wkEAd+mM+GBUF7cAAP7pfr9QE387G74Wx2uxg68gdGYDktXwCU/LUFLd6QbP1LJcpk5dNkF/+hQz6zc8q+VbtksBz5siHW+VEtu+6/jYgMrJ7yCXPYwOwXOa6DESiJvYtyXcp5xPBPAwtjbvsifuQGbtKIPXr7V/EIgEnZ+YvMP9h3vkVNYHPprA39Sm8c/kNVqB2Kvfp/hH5hf2gsZRPmG4qQqe5qibns5aIvLvDxm0qlK+hhHsGR5DUfc6ajD4nWJg/dQpsZbT/SFMZw/1QBE2PVN5DDvdDAi47f84ARqIK6r/cvIIsxTnn9u5KhBKKOCG7BsovYh/08OK7cbKG/1Hhg3yuQ9sjsw1IZIgactmWrxfCuq1ZvbGBXZnSH1DYFiu9dNEdkRsWJJ+2dxm8o+IrQAAAA=="
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
            <img src="./assets/icons/info.svg" alt="arrow" />
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
          <img
            className={styles.skillImage}
            src="./assets/icons/hp.svg"
            alt="skill"
          />
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
          <img
            className={styles.skillImage}
            src="./assets/icons/hp.svg"
            alt="skill"
          />
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
