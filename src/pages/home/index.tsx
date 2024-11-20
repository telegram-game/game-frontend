import { useNavigate } from "react-router-dom";
import ClaimButtonComponent from "../../components/button/claim-button";
import Character from "../../components/character/character";
import Footer from "../../components/footer";
import Stats from "../../components/stats";
import styles from "./home.module.css";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [isShowWarriorPack, setIsShowWarriorPack] = useState(false);
  return (
    <>
      <Stats />
      <div className={styles.absolute}>
        <img
          onClick={() => navigate("/shop")}
          src="https://staggering.tonkombat.com/assets/iap-shop-DOl3vZak.webp"
          alt="Shop"
          className={styles.icon}
        />
        <img
          onClick={() => setIsShowWarriorPack(true)}
          src="https://staggering.tonkombat.com/assets/warrior-pack-CiAetCKO.webp"
          alt="Warrior's Pack"
          className={styles.icon}
        />
      </div>
      <div className={styles.characterContainer}>
        <Character />
      </div>
      {/* <button className={styles.checkNewsButton}>Check News</button> */}
      <ClaimButtonComponent />
      <Footer />
      {/* <Popup
        isOpen={isShowWarriorPack}
        onClose={() => setIsShowWarriorPack(false)}
      >
        <h1>Warrior Pack</h1>
      </Popup> */}
    </>
  );
};

export default HomePage;
