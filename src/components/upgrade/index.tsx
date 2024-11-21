import { useEffect, useState } from "react";
import { Attribute, AttributeType } from "../../interfaces";
import { useAppSelector } from "../../modules/redux/hook";
import Item from "../item";
import styles from "./upgrade.module.css";
import { usePopup } from "../../modules/popup/popup.provider";
type UpgradeComponentProps = {};
const UpgradeComponent = (props: UpgradeComponentProps) => {
  const { gameProfile } = useAppSelector(({ app }) => app);
  const { openPopup, isOpen, closePopup } = usePopup();

  const [itemUpgrade, setItemUpgrade] = useState<{
    attriuteType: AttributeType;
    attribute: Attribute;
  }>();

  useEffect(() => {
    if (itemUpgrade) {
      openPopup(
        <div className={styles.popup}>
          <div className={styles.popupClose}>
            <button onClick={closePopup}>X</button>
          </div>
          <h1>On upgrade {itemUpgrade!.attriuteType}</h1>
          <p>
            Upgrade to increase passive TOK per hour Income = Salary * Honor
          </p>
          <div className={styles.popupContainer}>
            <Item
              attributeType={itemUpgrade!.attriuteType}
              data={{
                ...itemUpgrade!.attribute,
                level: itemUpgrade!.attribute.level + 1,
              }}
            />
            <Item
              attributeType={itemUpgrade!.attriuteType}
              data={itemUpgrade!.attribute}
            />
          </div>
        </div>
      );
    } else if (isOpen) closePopup();
  }, [itemUpgrade]);

  const onUpgrade = (item: {
    attriuteType: AttributeType;
    attribute: Attribute;
  }) => {
    setItemUpgrade(item);
  };
  return (
    <div>
      <div className={styles.upgradeContainer}>
        {gameProfile?.attributes &&
          Object.entries(gameProfile.attributes || {}).map(([key, value]) => (
            <Item
              attributeType={key as AttributeType}
              data={value}
              key={key}
              onClick={() =>
                onUpgrade({
                  attribute: value,
                  attriuteType: key as AttributeType,
                })
              }
            />
          ))}
      </div>
    </div>
  );
};

export default UpgradeComponent;
