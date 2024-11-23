import BalanceComponent from "../../components/balance";
import UpgradeComponent from "../../components/upgrade";
import { useAppSelector } from "../../modules/redux/hook";
import styles from "./upgrade.module.css";
const UpgradePage = () => {
  const { me } = useAppSelector(({ app }) => app);

  return (
    <div className={styles.container}>
      <BalanceComponent token={me?.balances?.INGAME} />
      <UpgradeComponent />
    </div>
  );
};
export default UpgradePage;
