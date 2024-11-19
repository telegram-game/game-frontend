import ClaimButtonComponent from "../../components/button/claim-button";
import Character from "../../components/character/character";
import Footer from "../../components/footer";
import Stats from "../../components/stats";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <>
      <Stats />
      <div className={styles.absolute}>
        <img
          src="https://staggering.tonkombat.com/assets/iap-shop-DOl3vZak.webp"
          alt="Shop"
          className={styles.icon}
        />
        <img
          src="https://staggering.tonkombat.com/assets/warrior-pack-CiAetCKO.webp"
          alt="Warrior's Pack"
          className={styles.icon}
        />
      </div>
      <Character />
      {/* <button className={styles.checkNewsButton}>Check News</button> */}
      <ClaimButtonComponent />
      <Footer />
    </>
  );
};

export default HomePage;
