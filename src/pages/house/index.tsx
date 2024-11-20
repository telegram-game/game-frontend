import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GameHouse,
  HouseData,
} from "../../interfaces/configuration-data.interface";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { requestChangeHouse } from "../../modules/redux/slices/app.slice";
import styles from "./house.module.css";
const HousePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isChanged, setIsChanged] = useState(false);
  const { appInformation, gameProfile } = useAppSelector(({ app }) => app);
  const onChangeHouse = (gameHouse: GameHouse, house: HouseData) => {
    if (gameProfile?.houseData.name === gameHouse) return;
    dispatch(
      requestChangeHouse({
        house: gameHouse,
      })
    );
    setIsChanged(true);
  };

  useEffect(() => {
    if (!isChanged) return;
    navigate("/kombat");
  }, [gameProfile?.houseData, isChanged, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {Object.entries(appInformation?.houses ?? {}).map(([key, value]) => (
          <div
            key={key}
            onClick={() => onChangeHouse(key as GameHouse, value)}
            className={`${styles.item} ${
              gameProfile?.houseData.name === value.name ? styles.active : ""
            }`}
          >
            <div className={styles.title}>{value.name}</div>
            <div className={styles.description}>{value.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousePage;
