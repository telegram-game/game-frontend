import { useContext } from "react";
import { LoaderContext } from "../../modules/loader/loader.provider";
import styles from "./loader.module.css";

export const Loader = () => {
  const { isLoading } = useContext(LoaderContext);
  return (
    <>
      {isLoading ? (
        <div className={styles.container}>
          <div className={styles.loader}></div>
        </div>
      ) : null}
    </>
  );
};
export default Loader;
