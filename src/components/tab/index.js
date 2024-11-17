import React from "react";
import styles from "./tab.module.css";

const Tab = (props) => {
  const { data, defaultValue, onChanged } = props;
  const [currentTab, setCurrentTab] = React.useState(defaultValue);

  React.useEffect(() => {
    onChanged && onChanged(currentTab);
  }, [currentTab, onChanged]);

  return (
    <div className={styles.tabButton}>
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => setCurrentTab(item.value)}
          className={`${styles.tab} ${
            currentTab === item.value ? styles.tabActive : ""
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
export default Tab;
