import styles from "./inventory-item.module.css";

interface InventoryItemProps {
  item: {
    name: string;
    image: string;
  };
}
const InventoryItem = ({ item }: InventoryItemProps) => {
  return (
    <button className={styles.button}>
      <img src={item.image} alt={item.name} />
    </button>
  );
};

export default InventoryItem;
