import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../modules/redux/hook";
import { requestClaimToken } from "../../../modules/redux/slices/app.slice";
import styles from "./claim-button.module.css";

type ClaimButtonComponentProps = {
  onClaim?: (tokenValue: number) => void;
};

const ClaimButtonComponent = ({ onClaim }: ClaimButtonComponentProps) => {
  const { me, appInformation } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();

  const [tokenValue, setTokenValue] = React.useState(me?.balances?.INGAME || 0);
  const [gapTimePerSeconds] = React.useState(
    appInformation?.system.baseTokenInvestSpeed?.INGAME?.gapTime || 0
  );
  const [speedPerSecond] = React.useState(
    appInformation?.system.baseTokenInvestSpeed?.INGAME?.speed || 0
  );
  const [isClaimed, setIsClaimed] = React.useState(false);

  const ref = React.useRef<NodeJS.Timeout>();

  const interval = setTimeout(() => {
    setTokenValue(tokenValue + speedPerSecond / 60 / 1000);
  }, 1);

  // Clear interval on unmount
  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  useEffect(() => {
    const max = 30; // hours;
    const maxClaim = new Date();
    // TODO
    maxClaim.setDate(maxClaim.getDate() + max);

    const toa = new Date(me?.lastClaimAt?.INGAME || 0);
    setTokenValue(10);
  }, [me]);

  const handleClaimClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isClaimed || tokenValue < 0) {
      e.preventDefault();
      return;
    }
    dispatch(
      requestClaimToken({
        token: "INGAME",
      })
    );

    setIsClaimed(true);
    if (onClaim) onClaim(tokenValue);

    setTokenValue(0);

    // Clear previous timeout
    if (ref.current) clearTimeout(ref.current);

    // Reset token value after 9 minutes
    ref.current = setTimeout(() => {
      setIsClaimed(false);
    }, gapTimePerSeconds! * 1000);
  };

  return (
    <div className={styles.claimContainer}>
      <div className={styles.claimButton}>
        <div className={styles.tokenInfo}>
          <img
            src="https://staggering.tonkombat.com/assets/TOKIcon-m0UJTJMj.webp"
            alt="Token Icon"
            className={styles.icon}
          />
          <div>
            <span className={styles.tokenValue}>{tokenValue?.toFixed(5)}</span>
            <span className={styles.tokenRate}>
              {(speedPerSecond || 0) * 60 * 60} TOK/hour
            </span>
          </div>
        </div>
        <button
          disabled={isClaimed}
          className={styles.claimButtonText}
          onClick={handleClaimClick}
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default ClaimButtonComponent;
