import BalanceComponent from "../../components/balance";
import BonusComponent from "../../components/bonus";
import Missions from "../../components/mission";
import { useAppSelector } from "../../modules/redux/hook";
import stles from "./earn.module.css";

const EarnPage = () => {
  const { me } = useAppSelector(({ app }) => app);

  return (
    <div className={stles.container}>
      <BalanceComponent token={me?.balances?.INGAME} />
      <BonusComponent />
      <Missions />
    </div>
  );
};
export default EarnPage;
