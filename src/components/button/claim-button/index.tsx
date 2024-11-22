import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../modules/redux/hook";
import { requestClaimToken } from "../../../modules/redux/slices/app.slice";
import styles from "./claim-button.module.css";
import { images } from "../../../constants";

type ClaimButtonComponentProps = {
  onClaim?: (tokenValue: number) => void;
};

const ClaimButtonComponent = ({ onClaim }: ClaimButtonComponentProps) => {
  const { me, appInformation } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  const [tokenValue, setTokenValue] = React.useState(0);
  const [gapTimePerSeconds, setGapTimePerSeconds] = React.useState<number>();
  const [speedPerSecond, setSpeedPerSecond] = React.useState(0);

  const ref = React.useRef<NodeJS.Timeout>();

  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      interval.current && clearTimeout(interval.current);
    };
  }, []);

  useEffect(() => {
    if (interval.current) clearTimeout(interval.current);
    interval.current = setTimeout(() => {
      setTokenValue(tokenValue + speedPerSecond / 60 / 1000);
    }, 1);
  }, [interval, speedPerSecond]);

  useEffect(() => {
    // TODO
    const max = 30; // hours;

    const lastClaim = new Date(me?.lastClaimedAt?.INGAME || 0);

    const now = new Date();

    const diff = now.getTime() - lastClaim.getTime();

    const seconds = Math.floor((diff / 1000) % 60);

    const speedPerSecond =
      appInformation?.system.baseTokenInvestSpeed?.INGAME?.speed || 0;
    const gapTimePerSeconds =
      appInformation?.system.baseTokenInvestSpeed?.INGAME?.gapTime || 0;
    const token = seconds * speedPerSecond;

    setGapTimePerSeconds(gapTimePerSeconds);
    setSpeedPerSecond(speedPerSecond);
    setTokenValue(token);
  }, [appInformation, me]);

  const handleClaimClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const lastClaim = new Date(me?.lastClaimedAt?.INGAME || 0);
    const now = new Date();
    const nextClaim = new Date(
      lastClaim.getTime() + gapTimePerSeconds! * 1000
    ).getTime();

    if (nextClaim > now.getTime()) {
      console.error(
        `Please claim after ${new Date(nextClaim).toLocaleString()} seconds`
      );
      e.preventDefault();
      return;
    }

    dispatch(
      requestClaimToken({
        token: "INGAME",
      })
    );

    if (onClaim) onClaim(tokenValue);
  };

  return (
    <div className={styles.claimContainer}>
      <div className={styles.claimButton}>
        <div className={styles.tokenInfo}>
          <img src={images.coin.INGAME} alt="Token Icon" className={styles.icon} />
          <div>
            <span className={styles.tokenValue}>{tokenValue?.toFixed(5)}</span>
            <span className={styles.tokenRate}>
              {(speedPerSecond || 0) * 60 * 60} TOK/hour
            </span>
          </div>
        </div>
        <button className={styles.claimButtonText} onClick={handleClaimClick}>
          Claim
        </button>
      </div>
    </div>
  );
};

export default ClaimButtonComponent;
