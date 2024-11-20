import { useState } from "react";
import { Attribute, AttributeType } from "../../interfaces";
import { useAppSelector } from "../../modules/redux/hook";
import Item from "../item";
import Popup from "../popup";
import styles from "./upgrade.module.css";
type UpgradeComponentProps = {};
const UpgradeComponent = (props: UpgradeComponentProps) => {
  const { gameProfile } = useAppSelector(({ app }) => app);

  const [isOpen, setIsOpen] = useState(false);
  const [itemUpgrade, setItemUpgrade] = useState<{
    attriuteType: AttributeType;
    attribute: Attribute;
  }>();

  const onUpgrade = (item: {
    attriuteType: AttributeType;
    attribute: Attribute;
  }) => {
    setIsOpen(true);
    setItemUpgrade(item);
  };
  return (
    <div>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {itemUpgrade ? (
          <>
            <h1>On upgrade {itemUpgrade?.attriuteType}</h1>
            <p>
              Upgrade to increase passive TOK per hour Income = Salary * Honor
            </p>
            <div className={styles.popupContainer}>
              <Item
                attributeType={itemUpgrade?.attriuteType}
                data={{
                  ...itemUpgrade?.attribute,
                  level: itemUpgrade?.attribute.level + 1,
                }}
              />
              <Item
                attributeType={itemUpgrade?.attriuteType}
                data={itemUpgrade?.attribute}
              />
            </div>
          </>
        ) : null}
      </Popup>
      <div className={styles.upgradeContainer}>
        {Object.entries(gameProfile?.attributes || {}).map(([key, value]) => (
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
