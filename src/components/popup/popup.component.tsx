import React from "react";
import { usePopup } from "../../modules/popup/popup.provider";
import styles from "./popup.module.css";

const PopupComponent: React.FC = () => {
  const { isOpen, popupContent, closePopup } = usePopup();

  return (
    <>{isOpen && <div className={styles.container}>{popupContent}</div>}</>
  );
};

export default PopupComponent;
