import BalanceComponent from "../../components/balance";
import BonusComponent from "../../components/bonus";
import Footer from "../../components/footer";
import Missions from "../../components/mission";

const EarnPage = () => {
  return (
    <>
      <BalanceComponent balance={10} />
      <BonusComponent />
      <Missions />
      <Footer />
    </>
  );
};
export default EarnPage;
