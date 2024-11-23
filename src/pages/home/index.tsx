import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClaimButtonComponent from "../../components/button/claim-button";
import Character from "../../components/character/character";
import Stats from "../../components/stats";
import styles from "./home.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [, setIsShowWarriorPack] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <Stats />
        <div className={styles.absolute}>
          <img
            onClick={() => navigate("/shop")}
            src='https://staggering.tonkombat.com/assets/iap-shop-DOl3vZak.webp'
            alt='Shop'
            className={styles.icon}
          />
          <img
            onClick={() => setIsShowWarriorPack(true)}
            src='https://staggering.tonkombat.com/assets/warrior-pack-CiAetCKO.webp'
            alt="Warrior's Pack"
            className={styles.icon}
          />
        </div>
        <div className={styles.characterContainer}>
          <Character />
        </div>
        {/* <button className={styles.checkNewsButton}>Check News</button> */}
        <ClaimButtonComponent />
      </div>
    </>
  );
};

export default HomePage;
