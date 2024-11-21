import { useEffect, useState } from "react";
import { Attribute, AttributeType } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import Item from "../item";
import styles from "./upgrade.module.css";
import { usePopup } from "../../modules/popup/popup.provider";
import UpgradePoupComponent from "../popup/upgrade/upgrade-popup.component";
import { requestUpgradeAttribute } from "../../modules/redux/slices/app.slice";
import { useLoader } from "../../modules/loader/loader.provider";

type UpgradeComponentProps = {};
const UpgradeComponent = (props: UpgradeComponentProps) => {
  const { gameProfile } = useAppSelector(({ app }) => app);
  const { start, stop } = useLoader();
  const dispatch = useAppDispatch();
  const { openPopup, isOpen, closePopup } = usePopup();

  const [itemUpgrade, setItemUpgrade] = useState<{
    attriuteType: AttributeType;
    attribute: Attribute;
  }>();

  useEffect(() => {
    if (itemUpgrade) {
      openPopup(
        <UpgradePoupComponent
          itemUpgrade={itemUpgrade}
          closePopup={closePopup}
          onUpgrade={() => {
            start();
            dispatch(requestUpgradeAttribute(itemUpgrade.attriuteType))
              .unwrap()
              .then(() => closePopup())
              .finally(() => stop());
          }}
        />,
      );
    } else if (isOpen) closePopup();
  }, [itemUpgrade]);

  return (
    <div>
      <div className={styles.upgradeContainer}>
        {gameProfile?.attributes &&
          Object.entries(gameProfile.attributes || {}).map(([key, value]) => (
            <Item
              style={{
                justifyContent: "start",
              }}
              attributeType={key as AttributeType}
              data={value}
              key={key}
              onClick={() =>
                setItemUpgrade({
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
