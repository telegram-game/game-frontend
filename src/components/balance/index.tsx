import { useAppSelector } from "../../modules/redux/hook";
import styles from "./balance.module.css";

const BalanceComponent = () => {
  const { me } = useAppSelector(({ app }) => app);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="https://staggering.tonkombat.com/assets/TOKIcon-m0UJTJMj.webp"
          alt="Token Icon"
          className={styles.token}
        />
        <span className={styles.balanceText}>
          Balance: {me?.balances?.INGAME || 0}
        </span>
      </div>
    </div>
  );
};

export default BalanceComponent;
