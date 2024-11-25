import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import styles from "./fight.module.css";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../modules/redux/hook";
import { toast } from "react-toastify";
import Character from "../../components/character/character";
import Tab from "../../components/tab";
import Progress from "../../components/progress";
import { removeMatchResult } from "../../modules/redux/slices/app.slice";

const FightPage = () => {
  const navigate = useNavigate();
  const [match, setMatch] = useState<any>(null);
  const { matchResult } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();
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
  useEffect(() => {
    if (!matchResult) {
      toast("You are not in a match");
      navigate("/kombat");
    }
    setMatch(matchResult);

    return () => {
      dispatch(removeMatchResult());
    };
  }, []);
  const { heroTop, characterMain } = useMemo(() => {
    if (!match) return {};
    const {
      initData: {
        leftHeroes,
        rightHeroes,
        leftFullGameProfile,
        rightFullGameProfile,
        maximumSteps,
      },
    } = match!;

    const heroes = [
      { ...leftHeroes[0], ...leftFullGameProfile },
      {
        ...rightHeroes[0],
        ...rightFullGameProfile,
      },
    ];

    return {
      heroTop: (
        <>
          {heroes.map((hero, index) => {
            return (
              <div key={index} className={`${styles.hero}`}>
                <div className={styles.heroImage}>
                  <img
                    className={styles.heroImage}
                    src={images.system.user}
                    alt='Champion Icon'
                  />
                </div>
                <div className={styles.heroInfo}>
                  {/* TODO Hero name */}
                  <p>{hero.skill}</p>
                  <div className={styles.heroRank}>
                    <img
                      src='	https://staggering.tonkombat.com/assets/champion-D65sUMQF.webp'
                      alt='Champion Icon'
                      className={styles.imgSmall}
                    />
                    <p>{hero.totalLevel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ),
      characterMain: (
        <>
          <div className={styles.mainCharacters}>
            {heroes.map((hero, index) => {
              return (
                <div key={index} className={styles.character}>
                  <Character />
                </div>
              );
            })}
          </div>
        </>
      ),
    };
  }, [match]);
  return (
    <div className={styles.container}>
      <div className={styles.heroTop}>{heroTop}</div>
      <div className={styles.main}>
        <div className={styles.mainAction}>
          {[
            { icon: images.info },
            {
              icon: images.system.arrow.right,
            },
          ].map((item) => (
            <div className={`${styles.actionContent}`}>
              <button type='button' className={styles.button}>
                <img src={item.icon} alt='arrow' />
              </button>
            </div>
          ))}
        </div>
        {characterMain}
      </div>
      <div className={styles.tabs}>
        <Tab data={tabs} defaultValue={tabs[0].value} />
      </div>
      <div className={styles.stats}>
        <div className={styles.statsLeft}>
          {Array(3).fill(
            <div className={styles.statsItem}>
              <p>
                <span>123</span>&nbsp;Attack
              </p>
              <Progress total={10} value={10} />
            </div>,
          )}
        </div>
        <div className={styles.statsRight}>
          {Array(3).fill(
            <div className={styles.statsItem}>
              <p>
                <span>123</span>&nbsp;Attack
              </p>
              <Progress total={10} value={10} />
            </div>,
          )}
        </div>
      </div>
    </div>
  );
};

export default FightPage;
