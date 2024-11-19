import React, { Fragment } from "react";
import Character from "../character/character";
import Popup from "../popup";
import Tab from "../tab";
import InventoryItem from "./inventory-item";
import styles from "./inventory.module.css";

type InventoryProps = {
  items?: {
    name: string;
    image: string;
  }[];
};
const Inventory = ({ items }: InventoryProps) => {
  const tabs = [
    {
      name: "Equipment",
      value: "EQUIPMENT",
    },
    {
      name: "Material",
      value: "MATERIAL",
    },
    {
      name: "Other",
      value: "OTHER",
    },
  ];

  const itemMemo = React.useMemo(() => {
    const el: Array<React.ReactNode> = [];
    if (!items?.length) return <div></div>;

    for (let i = 0; i < items.length; i += 2) {
      let item1 = items[i];
      let item2 = items[i + 1] !== undefined ? items[i + 1] : null; // Check if the second item exists
      el.push(
        <Fragment key={i}>
          {item1 ? <InventoryItem item={item1} /> : <div></div>}
          <div></div>
          {item2 ? <InventoryItem item={item2} /> : <div></div>}
        </Fragment>
      );
    }
    return el;
  }, [items]);

  return (
    <>
      <div className={styles.item}>{itemMemo}</div>
      <div className={styles.container}>
        <div className={styles.character}>
          <Character />
        </div>
      </div>

      <Tab data={tabs} defaultValue={"EQUIPMENT"} onChanged={() => {}} />
      <div className={styles.inventoryItem}>
        {items?.map((item, index) => (
          <InventoryItem item={item} key={index} />
        ))}
      </div>
      <Popup isOpen={false}>
        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <p>Inventory</p>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Inventory;
