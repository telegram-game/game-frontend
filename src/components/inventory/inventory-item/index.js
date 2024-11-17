import styles from "./inventory-item.module.css";
const InventoryItem = ({ item }) => {
  return (
    <button className={styles.button}>
      <img src={item.image} alt={item.name} />
    </button>
  );
};

export default InventoryItem;
