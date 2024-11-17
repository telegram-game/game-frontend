import AttackButtonComponent from "../components/button/attack-button";
import Character from "../components/character/character";
import CharacterStats from "../components/character/character-stats";
import Footer from "../components/footer";
import styles from "./kombat.module.css";

const KombatPage = () => {
  return (
    <>
      <CharacterStats />
      <Character />
      <div className={styles.attackButton}>
        <AttackButtonComponent />
      </div>
      <Footer />
    </>
  );
};
export default KombatPage;
