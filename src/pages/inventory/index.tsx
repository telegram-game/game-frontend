import { useEffect } from "react";
import Inventory from "../../components/inventory";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { requestGetAllInventories } from "../../modules/redux/slices/app.slice";
import styles from "./inventory.module.css";

const InventoryPage = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector(({ app }) => app);

  useEffect(() => {
    dispatch(requestGetAllInventories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Inventory items={app.inventories} />
    </div>
  );
};

export default InventoryPage;
