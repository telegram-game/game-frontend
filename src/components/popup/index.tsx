import styles from "./popup.module.css";
import React from "react";
type PopupProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  closePopup?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Popup = ({ children, isOpen = true, closePopup }: PopupProps) => {
  if (isOpen) {
    return (
      <div className={`${styles.container}`}>
        <div className={styles.popup}>
          <div className={styles.action}>
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  }
  return null;
};

export default Popup;
