import { useEffect } from "react";
import { images } from "../../constants";
import { useLoader } from "../../modules/loader/loader.provider";
import { usePopup } from "../../modules/popup/popup.provider";
import { useAppDispatch } from "../../modules/redux/hook";
import {
  requestCheckIn,
  requestGetCheckIn,
} from "../../modules/redux/slices/app.slice";
import BonusPopupComponent from "../popup/bonus-popup/bonus-popup.component";
import styles from "./bonus.module.css";
const BonusComponent = () => {
  const { openPopup, closePopup } = usePopup();
  const { start, stop } = useLoader();
  const dispatch = useAppDispatch();

  const openDailyBonus = () => {
    openPopup(
      <BonusPopupComponent
        onClose={closePopup}
        onCheckIn={(e) => {
          start();
          dispatch(requestCheckIn()).unwrap().then(closePopup).finally(stop);
        }}
      />,
    );
  };

  // private calculateClaimedAmount(
  //   checkinCampaign: CheckinCampaign,
  //   stack: number,
  // ): number {
  //   return (
  //     checkinCampaign.reward + checkinCampaign.stackCoefficient * (stack - 1)
  //   );
  return (
    <div>
      <div className={styles.bonusContainer}>
        <div className={styles.dailyItem}>
          <button className={styles.dailyButton} onClick={openDailyBonus}>
            <img
              src={images.system.dailyCheckin}
              alt='DailyCheckin'
              className={styles.dailyCheckinImage}
            />
            <div className={styles.dailyInfo}>
              <span className={styles.dailyTitle}>Daily Bonus</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BonusComponent;
