import React, { useEffect } from "react";
import styles from "./claim-button.module.css";

const randomRate = (min, max) => {
  const randomNum = Math.random() * (max - min) + min;
  return randomNum.toFixed(3); // Returns a string
};

const ClaimButtonComponent = (props) => {
  const [tokenValue, setTokenValue] = React.useState(0);
  const [isClaimed, setIsClaimed] = React.useState(false);
  const [rate, setRate] = React.useState(0);
  const ref = React.useRef();

  const interval = setTimeout(() => {
    setTokenValue(tokenValue + Number(rate) / 60 / 60 / 1000);
  }, 1);

  useEffect(() => {
    setRate(props?.rate || randomRate(0.01, 1));
  }, [props?.rate]);

  // Clear interval on unmount
  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  const handleClaimClick = (e) => {
    if (isClaimed || tokenValue < 0) {
      e.preventDefault();
      return;
    }

    setIsClaimed(true);
    if (props?.onClaim) props.onClaim(tokenValue);

    setTokenValue(0);

    // Clear previous timeout
    if (ref.current) clearTimeout(ref.current);

    // Reset token value after 9 minutes
    ref.current = setTimeout(() => {
      setIsClaimed(false);
    }, 1000 * 60 * 9);
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
            <span className={styles.tokenValue}>{tokenValue.toFixed(5)}</span>
            <span className={styles.tokenRate}>{rate} TOK/hour</span>
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
