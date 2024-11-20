import { useState } from "react";
import styles from "./find-friend.module.css";

type FindFriendPopupProps = {
  onFight: (username: string) => void;
};

const FindFriendPopup = ({ onFight }: FindFriendPopupProps) => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.popupContent}>
        <div className={styles.popupHeader}>
          <img src="https://staggering.tonkombat.com/assets/friend-match-fist-DY5sEd93.webp" />
        </div>
        <div className={styles.popupBody}>
          <p className="popup__text">
            Enter your friend's Telegram ID or referral link
          </p>
          <div className={styles.popupInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-link2 text-primary-500"
            >
              <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
              <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
              <line x1="8" x2="16" y1="12" y2="12"></line>
            </svg>
            <input
              type="text"
              className="popup__input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className={styles.popupButton}>
            <button
              onClick={() => {
                onFight(value);
              }}
              className={styles.button}
            >
              Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFriendPopup;
