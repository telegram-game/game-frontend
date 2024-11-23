import React, { useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../modules/redux/hook";
import { requestClaimToken } from "../../../modules/redux/slices/app.slice";
import styles from "./claim-button.module.css";
import { images } from "../../../constants";
import { toast } from "react-toastify";

type ClaimButtonComponentProps = {
  onClaim?: (tokenValue: number) => void;
};

const ClaimButtonComponent = ({ onClaim }: ClaimButtonComponentProps) => {
  const { me, appInformation } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  const [tokenValue, setTokenValue] = React.useState(0);
  const [gapTimePerSeconds, setGapTimePerSeconds] = React.useState<number>();
  const [speedPerSecond, setSpeedPerSecond] = React.useState(0);

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
  }, [interval, tokenValue, speedPerSecond]);

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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const lastClaim = new Date(me?.lastClaimedAt?.INGAME || 0);
    const now = new Date();
    const nextClaim = new Date(
      Math.min(lastClaim.getTime(), now.getTime()) + gapTimePerSeconds! * 1000,
    ).getTime();

    if (nextClaim > now.getTime()) {
      toast(`Please claim after ${new Date(nextClaim).toLocaleString()}`);
      e.preventDefault();
      return;
    }

    dispatch(
      requestClaimToken({
        token: "INGAME",
      }),
    );

    if (onClaim) onClaim(tokenValue);
  };

  const token = useMemo(() => {
    return (
      <div>
        <span className={styles.tokenValue}>{tokenValue?.toFixed(5)}</span>
        <span className={styles.tokenRate}>
          {(speedPerSecond || 0) * 60 * 60} TOK/hour
        </span>
      </div>
    );
  }, [tokenValue, speedPerSecond]);

  return (
    <div className={styles.claimContainer}>
      <div className={styles.claimButton}>
        <div className={styles.tokenInfo}>
          <img
            src={images.coin.INGAME}
            alt='Token Icon'
            className={styles.icon}
          />
          {token}
        </div>
        <button className={styles.claimButtonText} onClick={handleClaimClick}>
          Claim
        </button>
      </div>
    </div>
  );
};

export default ClaimButtonComponent;
