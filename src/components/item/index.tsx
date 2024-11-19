import { Attribute, AttributeType } from "../../interfaces";
import styles from "./item.module.css";

type ItemData = {
  img?: string;
  title?: string;
  description?: string;
  cost?: number;
};
type ItemProps = {
  data: Attribute;
  attributeType: AttributeType;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Item = ({ data, attributeType, onClick }: ItemProps) => {
  const mapper: Record<AttributeType, ItemData> = {
    POCKET: {
      img: "https://staggering.tonkombat.com/assets/upgrade_pocket-BtH4fVg7.webp",
      title: "Pocket Level 1",
      description: "Increase time between claims",
      cost: 100,
    },
    SALARY: {
      img: "https://staggering.tonkombat.com/assets/upgrade_salary-Ceuq_SYu.webp",
      title: "Salary Level 2",
      description: "Increase time between claims",
      cost: 200,
    },
    HONOR: {
      img: "https://staggering.tonkombat.com/assets/upgrade_honor-QRisifTp.webp",
      title: "Honor Level 3",
      description: "Super booster income x2",
      cost: 300,
    },
  };
  return (
    <div className={styles.upgradeItem} onClick={onClick}>
      <button className={styles.upgradeButton}>
        <img
          src={mapper[attributeType].img}
          alt="wallet"
          className={styles.upgradeImage}
        />
        <div className={styles.upgradeInfo}>
          <span className={styles.upgradeTitle}>
            {mapper[attributeType].title}
          </span>
          <p className={styles.upgradeDescription}>{data.description}</p>
          <div className={styles.costInfo}>
            <img
              src="https://staggering.tonkombat.com/assets/TOKIcon-m0UJTJMj.webp"
              alt="tokIcon"
              className={styles.tokenIcon}
            />
            <span className={styles.cost}>{data.cost}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Item;
