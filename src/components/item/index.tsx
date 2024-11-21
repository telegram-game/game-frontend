import { useMemo } from "react";
import { images, ItemAttributes } from "../../constants";
import { Attribute, AttributeType } from "../../interfaces";
import styles from "./item.module.css";

type ItemProps = {
  data: Attribute;
  attributeType: AttributeType;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Item = ({ data, attributeType, onClick }: ItemProps) => {
  const item = useMemo(() => {
    if (!ItemAttributes[attributeType]) return;

    return (
      <div className={styles.upgradeItem} onClick={onClick}>
        <button className={styles.upgradeButton}>
          <img
            src={ItemAttributes[attributeType].img}
            alt="Wallet"
            className={styles.upgradeImage}
          />
          <div className={styles.upgradeInfo}>
            <span className={styles.upgradeTitle}>
              {ItemAttributes[attributeType].title}
            </span>
            <p className={styles.upgradeDescription}>{data.description}</p>
            <div className={styles.costInfo}>
              <img
                src={images.token}
                alt="Token Icon"
                className={styles.tokenIcon}
              />
              <span className={styles.cost}>{data.cost}</span>
            </div>
          </div>
        </button>
      </div>
    );
  }, [attributeType]);

  return <>{item}</>;
};

export default Item;
