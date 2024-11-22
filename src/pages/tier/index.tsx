import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import { images } from "../../constants";
import { Attributes } from "../../enums";
import { Attribute } from "../../interfaces";
import { getTier, TierMapper } from "../../mapper/tier.mapper";
import { useLoader } from "../../modules/loader/loader.provider";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { requestUpgradeAttribute } from "../../modules/redux/slices/app.slice";
import styles from "./tier.module.css";

const TierPage = () => {
  const dispatch = useAppDispatch();
  const { gameProfile } = useAppSelector(({ app }) => app);
  const { start, stop } = useLoader();
  const [tier, setTier] = useState<(Attribute & TierMapper) | undefined>();
  useEffect(() => {
    setTier(getTier(gameProfile?.attributes?.GAME_PROFILE_LEVEL));
  }, [gameProfile?.attributes]);

  const onUpgradeLevel = () => {
    start();
    dispatch(requestUpgradeAttribute(Attributes.GAME_PROFILE_LEVEL))
      .unwrap()
      .catch(() => {})
      .finally(stop);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tier}>
          <div className={styles.content}>
            <div className={styles.tierImage}>
              <img src={images.tiers.KNIGHT} />
            </div>
            <div className={styles.tierName}>
              <p>{tier?.name}</p>&nbsp;<span>{tier?.tier}</span>
            </div>
            <div className={styles.tierDescription}>
              <p>{tier?.description}</p>
            </div>
            <div className={styles.levelChart}>
              <button>Level charts</button>
            </div>
            <div className={styles.nextTier}>
              <div className={styles.gameStar}>
                <img
                  className={styles.gameStarIcon}
                  src={images.coin.INGAME_2}
                  alt="star coin"
                />
                73
              </div>
              <p>
                Obtain&nbsp;<strong>{tier?.cost || 0}</strong>&nbsp;more stars
                to hit
              </p>
            </div>
            <div className={styles.nextTierNeeded}>
              <p>
                Used <strong>{tier?.totalCost || 0}</strong>
              </p>
              <img
                className={styles.gameStarIcon}
                src={images.coin.INGAME_2}
                alt="Star"
              />
            </div>
          </div>
          <div className={styles.action}>
            <button onClick={onUpgradeLevel}>Level Up</button>
            <button>
              Get More&nbsp;
              <img
                className={styles.gameStarIcon}
                src={images.coin.INGAME_2}
                alt="star coin"
              />
            </button>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TierPage;
