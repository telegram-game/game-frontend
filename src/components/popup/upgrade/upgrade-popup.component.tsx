import { AttributeType, Attribute } from "../../../interfaces";
import Item from "../../item";
import styles from "./upgrade-popup.module.css";

interface UpgradePoupComponentProps {
  itemUpgrade: {
    attriuteType: AttributeType;
    attribute: Attribute;
  };
  closePopup: () => void;
  onUpgrade?: () => void;
}
const UpgradePoupComponent = ({
  itemUpgrade,
  closePopup,
  onUpgrade,
}: UpgradePoupComponentProps) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupClose}>
        <button onClick={closePopup}>X</button>
      </div>
      <div className={styles.popupHeader}>
        <h1>{itemUpgrade!.attriuteType}</h1>
        <p>Upgrade to increase passive TOK per hour Income = Salary * Honor</p>
      </div>
      <div className={styles.popupContainer}>
        <Item
          style={{
            justifyContent: "start",
          }}
          attributeType={itemUpgrade!.attriuteType}
          data={{
            ...itemUpgrade!.attribute,
            level: itemUpgrade!.attribute.level + 1,
          }}
        />
        <Item
          style={{
            justifyContent: "start",
          }}
          attributeType={itemUpgrade!.attriuteType}
          data={itemUpgrade!.attribute}
        />
        <div className={styles.upgradeButton}>
          <button onClick={onUpgrade}>Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePoupComponent;
