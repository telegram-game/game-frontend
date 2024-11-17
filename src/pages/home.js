import React, { useEffect } from "react";
import ClaimButtonComponent from "../components/button/claim-button";
import Character from "../components/character/character";
import Footer from "../components/footer";
import Stats from "../components/stats";
import { useAppDispatch, useAppSelector } from "../modules/redux/hook";
import { requestSignIn } from "../modules/redux/slices/auth.slice";
import styles from "./home.module.css";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    !auth.accessToken &&
      dispatch(
        requestSignIn({
          provider: "TELEGRAM",
          code: "cm3jncaux0001akyagxhavaex",
        })
      );
  }, []);

  return (
    <>
      <Stats />
      <div className={styles.absolute}>
        <img
          src="https://staggering.tonkombat.com/assets/iap-shop-DOl3vZak.webp"
          alt="Shop"
          className={styles.icon}
        />
        <img
          src="https://staggering.tonkombat.com/assets/warrior-pack-CiAetCKO.webp"
          alt="Warrior's Pack"
          className={styles.icon}
        />
      </div>
      <Character />
      {/* <button className={styles.checkNewsButton}>Check News</button> */}
      <ClaimButtonComponent />
      <Footer />
    </>
  );
};

export default HomePage;
