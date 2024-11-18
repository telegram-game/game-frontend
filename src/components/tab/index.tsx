import React from "react";
import styles from "./tab.module.css";

type TabProps = {
  data: { name: string; value: string }[];
  defaultValue: string;
  onChanged?: (value: string) => void;
};

const Tab = (props: TabProps) => {
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
