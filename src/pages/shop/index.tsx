import Tab from "../../components/tab";
import styles from "./shop.module.css";

const ShopPage = () => {
  return (
    <>
      <Tab
        defaultValue="EQUIPMENT"
        data={[
          { name: "Equipment", value: "EQUIPMENT" },
          { name: "Material", value: "MATERIAL" },
        ]}
      />
      <div className={styles.container}>
        {[{}, {}, {}, {}].map((item, index) => {
          return (
            <div key={index} className={styles.content}>
              <div className={styles.item}>
                <img
                  className={styles.itemImage}
                  src="https://staggering.tonkombat.com/assets/iap-crimson-shield-BdwDEqy2.webp"
                  alt="Token Icon"
                />
                <p className={styles.itemName}>Token</p>
                <button className={styles.buyButton}>
                  Buy&nbsp;<span>50</span>&nbsp;
                  <img
                    src="data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAKwAALwAAQUxQSOoBAAABkHLb1hrJg3q6VNaKHYgahrLlvtVtUZWt2FbkBmtUbPRVjcPMPFHDzDxR04qjot4Vge+rRMQEiFPPBNLcq6RpjCGZNGaOpHoNCVjsNyQuWfeakZaw34iQ5Wkj3lfQNKCtVUkD5ljTDCxg3bmBnaq14Q3IbNTi+8BV0A77c++p9biRxP0J49XwJqbiq+k6SSrVhlRVciO52p8ygUiqVJLUErpVKkmatipJVVKVSmtVkqqkkpzzUipJ5UCVpJI92feMDc1nRSI8a0Z+Ebu2AzidNSA7DfRaEYC5TwNbnQPQET8EgCSrk62uWv0AEHdERIZRTH6srKSfnt4/M4f5nzavAcTbpNSPUD/JaZkAiHypbHXr3FyhZX4DwImW1O1EZWdSWicAQrHthLOzR97kancJGBGX7ZR0cA8dcdleJ5X2L3eJyyCl20Sczqm6oedkQ+lWjYsJpevYxRydJy426vz/lNaiZ2dYnT8FcDqrY+zmqv6dRumzvCq2S8uyG6g+/aMisTIs/TQHALPdSRSTrISeTVzIbgBAPCQifgQAp3+UGJs+mb9GcdKX0uEYAG5mJMdt5NHP0wAQ7ZJqP0TxzepXsd2F0m5LancilLZsuoVol9j6YckumxEgHhGXuyIAh21kqOeL45Hjk1IJVlA4IDACAABQCwCdASosADAAPpE8lkglk5CY5gBYCQS2AF2cxus/BL7txW+VvogwG3g8wHnJeh7yZusv9ADy1P2j+CvyZjABMqraNLpO2DO8CX0EnXUHFqyzLMSayjwU8LwxyKM5t42Lt3gA/u9f2///nFJ9Q/+Ev5J/Nthy1W/+ovzAfr/xAbOVpKiW9f/CC/Qcg73Hr/+uyeSxbQ4GwhMNv1ysjCA7wSKm79/re/RTYz0EC0azBVf4VI//7BGJFxk08vK73MuSGRHWKYU1ZCLUggyXJ9DJ3gMO6BqmTzCXacON6+M2ztZabhKhF2YCzOtewJk6eVqlYJXYtVOpaZPDXgu39EarZ61hT5Fst8GE9Gz4agdTpXizvcx1ufvPTe7nvf1z/P48KU/tDOlkWp92S7AeDkkSPUTsHESZoFMLs2ua38/zirIbPIXK1C1+4opU0tn9vA04/HKc5N/gOfuGXuZUNqfBREM2VggN1Y4DUL+9DG7v0k1R+c+16LYv2vQfZC/AcVPEwE+SdlBEcKPPa5ScOWa73boUwkCzzPwo27fWzF/Rf8P53jhr8N6c1Ix+boJ7lFihfKIb5E86C6jpgmqPql6bCothLAF9F1W8GXwyukovSJhtFhIMRoII+x47GgTl0WT9X1eIDlEZ6BrcSi3UGlpGPMPzuCAeJE5di9xcFzffjVtvXmZuudwdZLuTQOx7De4H3wqtC22dP4ncoDEjLrPRFyVEok0byEf5OOBkNAAAAA=="
                    alt="iap star"
                  />
                </button>
              </div>
              <img
                alt="Background"
                className={styles.backgroundImage}
                src="https://staggering.tonkombat.com/assets/crimson-shield-bg-DuBnqaYX.webp"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopPage;
