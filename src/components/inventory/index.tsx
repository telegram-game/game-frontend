import React, { Fragment } from "react";
import { images } from "../../constants";
import { ItemSupports } from "../../enums";
import { useAppSelector } from "../../modules/redux/hook";
import Character from "../character/character";
import Tab from "../tab";
import InventoryItem from "./inventory-item";
import styles from "./inventory.module.css";

type InventoryProps = {
  items?: {
    name: string;
    itemCode: string;
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
  const { hero } = useAppSelector(({ app }) => app);

  const getImageByItemCode = (itemCode: string, type: string) => {
    return (images.items as any)[itemCode] || (images.itemTypes as any)[type];
  };

  const itemMemo = React.useMemo(() => {
    const el: Array<React.ReactNode> = [];
    if (!items?.length) return <div></div>;

    ItemSupports.map((item, index) => {
      return (
        <Fragment key={index}>
          <InventoryItem
            item={{
              name: item.toString(),
              image: item.toString(),
              itemType: item.toString(),
            }}
          />
        </Fragment>
      );
    });

    for (let i = 0; i < ItemSupports.length; i += 2) {
      let default1 = ItemSupports[i];
      let default2 = ItemSupports[i + 1];
      const heroItem1 = hero?.items?.find(
        (x) => x.itemType === default1.itemType,
      );
      const heroItem2 = hero?.items?.find(
        (x) => x.itemType === default2.itemType,
      );
      el.push(
        <Fragment key={i}>
          <InventoryItem
            item={{
              image: getImageByItemCode(heroItem1?.itemCode, default1.itemType),
            }}
          />
          <div></div>
          <InventoryItem
            item={{
              image: getImageByItemCode(heroItem2?.itemCode, default2.itemType),
            }}
          />
        </Fragment>,
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
          <InventoryItem
            item={{
              name: item.name,
              image: getImageByItemCode(item.itemCode, item.name),
            }}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Inventory;
