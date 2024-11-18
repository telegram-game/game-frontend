import React from "react";
import Character from "../character/character";
import Popup from "../popup";
import Tab from "../tab";
import InventoryItem from "./inventory-item";
import styles from "./inventory.module.css";

const Inventory = () => {
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

  const items = [
    {
      name: "Item 1",
      image:
        "https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp",
    },
    {
      name: "Item 2",
      image:
        "https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp",
    },
    {
      name: "Item 3",
      image:
        "https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp",
    },
    {
      name: "Item 4",
      image:
        "https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp",
    },
    {
      name: "Item 5",
      image:
        "https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp",
    },
    {
      name: "Item 6",
      image:
        "https://staggering.tonkombat.com/assets/inventory-armor-C4tU1hsm.webp",
    },
  ];

  const itemMemo = React.useMemo(() => {
    const el: Array<React.ReactNode> = [];
    for (let i = 0; i < items.length; i += 2) {
      let item1 = items[i];
      let item2 = items[i + 1] !== undefined ? items[i + 1] : null; // Check if the second item exists
      el.push(
        <>
          {item1 ? <InventoryItem item={item1} /> : <div></div>}
          <div></div>
          {item2 ? <InventoryItem item={item2} /> : <div></div>}
        </>
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
        {items.map((item, index) => (
          <InventoryItem item={item} />
        ))}
      </div>
      <Popup>
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
