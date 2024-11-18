import BalanceComponent from "../../components/balance";
import Footer from "../../components/footer";
import UpgradeComponent from "../../components/upgrade";

const UpgradePage = () => {
  return (
    <>
      <BalanceComponent balance={10} />
      <UpgradeComponent />
      <Footer />
    </>
  );
};
export default UpgradePage;
