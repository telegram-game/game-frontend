import React from "react";
import styles from "./upgrade.module.css";
import Item from "../item";
const UpgradeComponent = (props) => {
  const upgrades = [
    {
      title: "Pocket Level 1",
      img: "https://staggering.tonkombat.com/assets/upgrade_pocket-BtH4fVg7.webp",
      description: "Increase time between claims",
      cost: 100,
    },
    {
      title: "Salary Level 2",
      img: "https://staggering.tonkombat.com/assets/upgrade_salary-Ceuq_SYu.webp",
      description: "Increase time between claims",
      cost: 200,
    },
    {
      title: "Hornor Level 3",
      img: "https://staggering.tonkombat.com/assets/upgrade_honor-QRisifTp.webp",
      description: "Super booster income x2",
      cost: 300,
    },
  ];

  return (
    <div>
      <div className={styles.upgradeContainer}>
        {upgrades.map((upgrade, index) => (
          <Item data={upgrade} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UpgradeComponent;
