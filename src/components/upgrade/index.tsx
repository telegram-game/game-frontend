import { useEffect, useState } from "react";
import { Attribute, AttributeType } from "../../interfaces";
import { useLoader } from "../../modules/loader/loader.provider";
import { usePopup } from "../../modules/popup/popup.provider";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { requestUpgradeAttribute } from "../../modules/redux/slices/app.slice";
import Item from "../item";
import UpgradePoupComponent from "../popup/upgrade/upgrade-popup.component";
import styles from "./upgrade.module.css";

type UpgradeComponentProps = {};
const UpgradeComponent = (props: UpgradeComponentProps) => {
  const { gameProfile } = useAppSelector(({ app }) => app);
  const { start, stop } = useLoader();
  const dispatch = useAppDispatch();
  const { openPopup, isOpen, closePopup } = usePopup();

  const [itemUpgrade, setItemUpgrade] = useState<{
    attributeType: AttributeType;
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
            dispatch(requestUpgradeAttribute(itemUpgrade.attributeType))
              .unwrap()
              .catch()
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
                  attributeType: key as AttributeType,
                })
              }
            />
          ))}
      </div>
    </div>
  );
};

export default UpgradeComponent;
