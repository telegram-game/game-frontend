import { useMemo, useState } from "react";
import BalanceComponent from "../../components/balance";
import Tab from "../../components/tab";
import styles from "./airdrop.module.css";
import { images } from "../../constants";
const AirdropPage = () => {
  const [currentTab, setCurrentTab] = useState("AIRDROP");
  const sections = useMemo(() => {
    return {
      AIRDROP: (
        <>
          <BalanceComponent text='' />
          <div className={styles.airdrop}>
            {Array(4).fill(
              <div className={styles.section}>
                <div className={styles.sectionImage}>
                  <img src={images.coin.INGAME} alt='Token Icon' />
                </div>
                <div className={styles.sectionInfo}>
                  <div className={styles.sectionContent}>
                    <p className={styles.sectionTitle}>TOK Income</p>
                    <p className={styles.sectionDescription}>
                      Claim salary and Kombat
                    </p>
                  </div>
                  <div className={styles.sectionButton}>
                    <img src={images.system.arrow.right} alt='Liink' />
                  </div>
                </div>
              </div>,
            )}
          </div>
        </>
      ),
      BALANCE: (
        <>
          <BalanceComponent text='GUNNY GAME' />
          <div className={styles.balance}>
            <p>Your balance</p>
          </div>
          <div className={styles.airdrop}>
            {Array(2).fill(
              <div className={styles.section}>
                <div className={styles.sectionImage}>
                  <img src={images.coin.INGAME} alt='Token Icon' />
                </div>
                <div className={styles.sectionInfo}>
                  <div className={styles.sectionContent}>
                    <p className={styles.sectionTitle}>TON 0.005 </p>
                  </div>
                  <div className={styles.sectionClaim}>
                    <button className={styles.claimButton}>Claim</button>
                  </div>
                </div>
              </div>,
            )}
          </div>
        </>
      ),
    }[currentTab];
  }, [currentTab]);

  return (
    <div className={styles.container}>
      <Tab
        onChanged={setCurrentTab}
        data={[
          {
            name: "Airdrop",
            value: "AIRDROP",
          },
          {
            name: "Balance",
            value: "BALANCE",
          },
        ]}
        defaultValue={currentTab}
      />
      {sections}
    </div>
  );
};
export default AirdropPage;
