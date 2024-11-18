import Inventory from "../../components/inventory";
import styles from "./inventory.module.css";

const InventoryPage = () => {
  return (
    <div className={styles.container}>
      <Inventory />
    </div>
  );
};

export default InventoryPage;
