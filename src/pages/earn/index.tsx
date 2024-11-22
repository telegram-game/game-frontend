import BalanceComponent from "../../components/balance";
import BonusComponent from "../../components/bonus";
import Missions from "../../components/mission";
import stles from "./earn.module.css";

const EarnPage = () => {
  return (
    <div className={stles.container}>
      <BalanceComponent />
      <BonusComponent />
      <Missions />
    </div>
  );
};
export default EarnPage;
