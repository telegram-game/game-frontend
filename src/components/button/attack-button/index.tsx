import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MatchType } from "../../../interfaces";
import { usePopup } from "../../../modules/popup/popup.provider";
import { useAppDispatch, useAppSelector } from "../../../modules/redux/hook";
import { requestFight } from "../../../modules/redux/slices/app.slice";
import FindFriendPopup from "../../popup/find-friend";
import styles from "./attack-button.module.css";

const AttackButtonComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [matchType, setMatchType] = React.useState<MatchType>("RANKED");
  const [hasMatched, setHasMatched] = React.useState<boolean>(false);
  const { openPopup, closePopup } = usePopup();
  const { matchResult } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (matchResult && hasMatched) navigate("/fight");
  }, [matchResult, hasMatched]);

  const stageMemo = React.useMemo(() => {
    const matchs: Array<{ title: string; value: MatchType }> = [
      {
        title: "Ranked match",
        value: "RANKED",
      },
      {
        title: "Friendly match",
        value: "FRIEND",
      },
    ];
    return matchs.map((match, index) => (
      <div key={index} className={styles.buttonContainer}>
        <button
          type='button'
          className={`${styles.button} ${
            matchType === match.value ? styles.buttonActive : ""
          }`}
          onClick={() => setMatchType(match.value)}
        >
          <div className={styles.buttonIcon}>
            <img
              src='./assets/icons/match.svg'
              alt='match'
              className={styles.rankIcon}
            />
          </div>
          <span> {match.title}</span>
        </button>
      </div>
    ));
  }, [matchType, setMatchType]);

  const handleFightWithFriend = (username: string) => {
    dispatch(
      requestFight({
        username,
        type: matchType,
      }),
    )
      .unwrap()
      .then(() => {
        closePopup();
        setHasMatched(true);
      });
  };

  const onFindMatch = () => {
    if (matchType === "FRIEND") {
      openPopup(
        <FindFriendPopup
          closePopup={closePopup}
          onFight={(username) => {
            if (!username) {
              console.error("Please input the friend username");
              return;
            }
            handleFightWithFriend(username);
          }}
        />,
      );
    } else {
      dispatch(
        requestFight({
          username: "",
          type: matchType,
        }),
      )
        .unwrap()
        .then(() => {
          setHasMatched(true);
        });
    }
  };

  return (
    <>
      <div className={styles.container}>
        {stageMemo}
        <div className={styles.buttonAttack}>
          <button
            type='button'
            onClick={onFindMatch}
            className={`${styles.button} ${styles.friendly}`}
          >
            <div className={styles.buttonIcon}></div>
            <img
              src='./assets/icons/fight.svg'
              alt='Fight icon'
              className={styles.rankIcon}
            />
            Fight
          </button>
        </div>
      </div>
      {/* <Popup isOpen={true}>
        <div className={styles.popup}>
          <button className={styles.closeButton} onClick={() => {}}>
            X
          </button>
          <div className={styles.content}>
            <span>Choose your stage</span>
          </div>
        </div>
      </Popup> */}
    </>
  );
};

export default AttackButtonComponent;
