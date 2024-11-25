import { useEffect, useState } from "react";
import Tab from "../../components/tab";
import { images } from "../../constants";
import { useLoader } from "../../modules/loader/loader.provider";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { buyChest } from "../../modules/redux/slices/app.slice";
import styles from "./shop.module.css";

const ShopPage = () => {
  const { appInformation } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();
  const { start, stop } = useLoader();

  const [items, setItems] = useState<
    Array<{
      image: string;
      code: string;
      name: string;
      description: string;
      cost: number;
      tokenName: string;
    }>
  >([]);
  useEffect(() => {
    const rs = Object.entries(appInformation!.items!.chests).map(
      ([key, value]) => {
        return {
          image:
            (images.items as any)[value.code] || (images.itemTypes as any)[key],
          code: value.code,
          name: value.name,
          description: value.description,
          cost: value.cost.value,
          tokenName: value.cost.token,
        };
      }
    );
    setItems(rs);
  }, []);

  const onBuy = (itemCode: string) => {
    start();
    dispatch(buyChest(itemCode))
      .unwrap()
      .then((rs: any) => {
        window.open(rs.url, "_blank");
      })
      .finally(stop);
  };
  return (
    <>
      <Tab
        defaultValue="EQUIPMENT"
        data={[
          { name: "Equipment", value: "EQUIPMENT" },
          { name: "Material", value: "MATERIAL" },
        ]}
      />
      <div className={styles.container}>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles.content}>
              <div className={styles.item}>
                <img
                  className={styles.itemImage}
                  src={item.image}
                  alt="Token Icon"
                />
                <p className={styles.itemName}>{item.name}</p>
                <button
                  onClick={() => onBuy(item.code)}
                  className={styles.buyButton}
                >
                  Buy&nbsp;<span>{item.cost}</span>&nbsp;
                  <img
                    src={(images.coin as any)[item.tokenName]}
                    alt={item.tokenName}
                  />
                </button>
              </div>
              <img
                alt="Background"
                className={styles.backgroundImage}
                src={(images.backgroundItems as any)[item.code]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopPage;
