import BalanceComponent from "../../components/balance";
import UpgradeComponent from "../../components/upgrade";
import styles from "./upgrade.module.css";
const UpgradePage = () => {
  return (
    <div className={styles.container}>
      <BalanceComponent />
      <UpgradeComponent />
    </div>
  );
};
export default UpgradePage;
