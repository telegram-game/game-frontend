import styles from "./item.module.css";
const Item = (props) => {
  const { data } = props;
  return (
    <div className={styles.upgradeItem}>
      <button className={styles.upgradeButton}>
        <img src={data.img} alt="wallet" className={styles.upgradeImage} />
        <div className={styles.upgradeInfo}>
          <span className={styles.upgradeTitle}>{data.title}</span>
          <p className={styles.upgradeDescription}>{data.description}</p>
          <div className={styles.costInfo}>
            <img
              src="https://staggering.tonkombat.com/assets/TOKIcon-m0UJTJMj.webp"
              alt="tokIcon"
              className={styles.tokenIcon}
            />
            <span className={styles.cost}>{data.cost}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Item;
