import { useMemo } from "react";
import { images, ItemAttributes } from "../../constants";
import { Attribute, AttributeType } from "../../interfaces";
import styles from "./item.module.css";

type ItemProps = {
  data: Attribute;
  attributeType: AttributeType;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: Record<string, string>;
};

const Item = ({ data, attributeType, onClick, style }: ItemProps) => {
  const item = useMemo(() => {
    if (!ItemAttributes[attributeType]) return;
    const { img, title, cost,description } = ItemAttributes[attributeType]!;

    return (
      <div className={`${styles.upgradeItem}`} onClick={onClick}>
        <button className={styles.upgradeButton} style={style}>
          <img src={img} alt='Wallet' className={styles.upgradeImage} />
          <div className={styles.upgradeInfo}>
            <span className={styles.upgradeTitle}>{title}</span>
            <p className={styles.upgradeDescription}>{description}</p>
            <div className={styles.costInfo}>
              <img
                src={images.coin.INGAME}
                alt='Token Icon'
                className={styles.tokenIcon}
              />
              <span className={styles.cost}>{cost}</span>
            </div>
          </div>
        </button>
      </div>
    );
  }, [attributeType]);

  return <>{item}</>;
};

export default Item;
