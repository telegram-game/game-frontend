import { images } from "../../constants";
import styles from "./balance.module.css";

const BalanceComponent = ({
  token,
  text = "Balance: ",
}: {
  token?: number;
  text?: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={images.coin.INGAME}
          alt='Token Icon'
          className={styles.token}
        />
        <span className={styles.balanceText}>
          {text} {token ? (token || 0).toFixed(2) : ""}
        </span>
      </div>
    </div>
  );
};

export default BalanceComponent;
