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
      ) : // <div className="h-full w-full fixed top-0 left-0 bg-black/20 z-[99999]">
      //   <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
      //     <span className="loading loading-spinner loading-lg text-primary" />
      //     <span className="text">{loaderText}</span>
      //   </div>
      // </div>
      null}
    </>
  );
};
export default Loader;
