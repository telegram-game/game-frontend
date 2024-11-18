import styles from "./progress.module.css";
type ProgressProps = {
  value?: number;
  total?: number;
};
const Progress = (props: ProgressProps) => {
  const { value = 20, total = 100 } = props;
  return (
    <div className={styles.progress}>
      {Array(Math.max(value, total))
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className={`${styles.step} ${
                index + 1 < value ? styles.complete : ""
              }`}
            ></div>
          );
        })}
    </div>
  );
};

export default Progress;
