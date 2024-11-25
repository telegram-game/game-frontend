import { images } from "../../constants";
import styles from "./character.module.css";
const Character = () => {
  return (
    <div className={styles.characterContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <image
            href={images.hero.bird}
            style={{
              height: "22%",
              width: "100%",
            }}
            x="-26%"
            y="28%"
          ></image>
          <image
            href={images.hero.pet}
            style={{
              height: "30%",
              width: "100%",
            }}
            x="-26%"
            y="9%"
          ></image>
        </g>
        <image
          href={images.hero.wind}
          style={{
            height: "75%",
            width: "100%",
          }}
          x="0%"
          y="20%"
        ></image>
        <image
          href={images.hero.shadow}
          height="12%"
          width="100%"
          x="0%"
          y="86%"
        ></image>
        <image
          href={images.hero.shoe}
          height="10%"
          width="100%"
          x="1%"
          y="82%"
        ></image>
        <image
          href={images.hero.body}
          height="30%"
          width="100%"
          x="2%"
          y="54.5%"
        ></image>
        <image
          href={images.hero.helmet}
          height="38%"
          width="100%"
          x="0%"
          y="19%"
        ></image>
        <image
          href={images.hero.sword}
          height="14%"
          width="100%"
          x="-54%"
          y="84%"
          style={{
            filter: "none",
            transform:
              "translate(0,0) rotate(-60deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
          }}
        ></image>
        <image
          href={images.hero.hand}
          height="8%"
          width="100%"
          x="17%"
          y="65%"
        ></image>
        <image
          href={images.hero.shield}
          height="39%"
          width="100%"
          x="-15%"
          y="54.5%"
          style={{ filter: "none" }}
        ></image>
        <image
          href={images.hero.moonBix}
          height="45%"
          width="100%"
          x="30%"
          y="55%"
        ></image>
        <defs>
          <filter
            id="animated-red-glow"
            x="-50%"
            y="-50%"
            width="500%"
            height="500%"
          >
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="red">
              <animate
                attributeName="stdDeviation"
                values="8;20;8"
                dur="1.5s"
                repeatCount="indefinite"
              ></animate>
            </feDropShadow>
          </filter>
        </defs>
        <defs>
          <filter
            id="animated-blue-glow"
            x="-50%"
            y="-50%"
            width="500%"
            height="500%"
          >
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#08a4a7">
              <animate
                attributeName="stdDeviation"
                values="8;20;8"
                dur="1.5s"
                repeatCount="indefinite"
              ></animate>
            </feDropShadow>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Character;
