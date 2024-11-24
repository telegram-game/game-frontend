import { images } from "../../../constants";
import styles from "./inventory-item.module.css";

interface InventoryItemProps {
  item: {
    name: string;
    itemCode: string;
    image: string;
  };
}
const InventoryItem = ({ item }: InventoryItemProps) => {
  return (
    <button className={styles.button}>
      <img src={(images.items as any)[item.itemCode as any]} alt={item.itemCode} />
    </button>
  );
};

export default InventoryItem;
