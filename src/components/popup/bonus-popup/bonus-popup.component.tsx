import { useEffect, useMemo, useState } from "react";
import { images } from "../../../constants";
import { useAppSelector } from "../../../modules/redux/hook";
import styles from "./change-skill-popup.module.css";
import { SystemConfigData } from "../../../interfaces/configuration-data.interface";

interface ChangeSkillPopupComponentProps {
  onClose: () => void;
  onCheckIn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const BonusPopupComponent = ({
  onClose,
  onCheckIn,
}: ChangeSkillPopupComponentProps) => {
  const { appInformation } = useAppSelector(({ app }) => app);
  const [checkinCampaign, setCheckinCampaign] =
    useState<SystemConfigData["checkinCampaign"]>();

  useEffect(() => {
    console.log({
      checkinCampaign
    })
    setCheckinCampaign(appInformation?.system.checkinCampaign);
  }, [appInformation?.system?.checkinCampaign]);

  return (
    <div className={styles.container}>
      <div className={styles.controlButtonArea}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.popupContent}>
        <div className={styles.header}>
          <h4>Daily bonus</h4>
          <p>Check in every day to claim your reward</p>
        </div>
        <div className={styles.content}>
          <div className={styles.daily}>
            <div className={styles.bonus}>
              {Array(6)
                .fill(1)
                .map((_, index) => (
                  <div className={`${styles.item}`} key={index}>
                    <div
                      className={`${styles.itemContent}  ${
                        (checkinCampaign?.maxStack || 0) >= index + 1 &&
                        styles.checked
                      }`}
                    >
                      <h3>Day {index + 1} </h3>
                      <div className={styles.itemImage}>
                        <img src={images.coin.INGAME} alt='Change Skill' />
                      </div>
                      <p>+{checkinCampaign?.stackCoefficient}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className={styles.weekend}>
              <div
                className={`${styles.item}  ${styles.itemWeekend} ${
                  (checkinCampaign?.maxStack || 0) >= 7 && styles.checked
                }`}
              >
                <h3>Day 7</h3>
                <div className={styles.itemImage}>
                  <img src={images.coin.INGAME} alt='Change Skill' />
                </div>
                <p>+{checkinCampaign?.stackCoefficient}</p>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.actionButton}>
              <button onClick={onCheckIn}>Check In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusPopupComponent;
