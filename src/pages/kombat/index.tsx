import { useNavigate } from "react-router-dom";
import AttackButtonComponent from "../../components/button/attack-button";
import Character from "../../components/character/character";
import CharacterStats from "../../components/character/character-stats";
import Footer from "../../components/footer";
import styles from "./kombat.module.css";

const KombatPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className={styles.absolute}>
        <div></div>
        <button
          onClick={() => {
            navigate("/kombat/inventory");
          }}
          className={styles.inventoryButton}
          type="button"
        >
          <img
            src="https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp"
            alt="armor img"
          />
          <span>Inventory</span>
        </button>
      </div>
      {/* <div className={styles.container}> */}
        <CharacterStats />
        <Character />
        <div className={styles.attackButton}>
          <AttackButtonComponent />
        </div>
        <Footer />
      {/* </div> */}
    </>
  );
};
export default KombatPage;
