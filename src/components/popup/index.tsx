import styles from "./popup.module.css";

type PopupProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  closePopup?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Popup = ({ children, isOpen = true, closePopup }: PopupProps) => {
  return (
    <div className={`${styles.container} ${isOpen ? styles.visible : ""}`}>
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
};

export default Popup;
