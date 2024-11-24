import { images } from "../../../constants";
import styles from "./inventory-item.module.css";

interface InventoryItemProps {
  item: {
    name?: string;
    itemType?: string;
    image: string;
  };
}
const InventoryItem = ({ item }: InventoryItemProps) => {
  return (
    <button className={styles.button}>
      <img src={item?.image} alt={item?.itemType} />
    </button>
  );
};

export default InventoryItem;
