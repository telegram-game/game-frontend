import styles from "./character.module.css";
const Character = () => {
  return (
    <div className={styles.character_container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <g className="levitator">
          <image
            href="/assets/bird-stand-Ck1DKZ00.webp"
            height="22%"
            width="100%"
            x="-26%"
            y="28%"
          ></image>
          <image
            href="https://inazuma.tonkombat.com/d70c9d98-2e68-4e85-908c-8871f38b9cee.webp"
            height="30%"
            width="100%"
            x="-26%"
            y="9%"
          ></image>
        </g>
        <image
          href="https://inazuma.tonkombat.com/bfbbd19e-1dc9-4be3-b611-7856f1a5ee85.webp"
          height="75%"
          width="100%"
          x="0%"
          y="20%"
        ></image>
        <image
          href="https://staggering.tonkombat.com/assets/char-shadow-BimwYGEY.webp"
          height="12%"
          width="100%"
          x="0%"
          y="86%"
        ></image>
        <image
          href="data:image/webp;base64,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"
          height="10%"
          width="100%"
          x="1%"
          y="82%"
        ></image>
        <image
          href="https://staggering.tonkombat.com/assets/torso-o9Tmc3pq.webp"
          height="30%"
          width="100%"
          x="2%"
          y="54.5%"
        ></image>
        <image
          href="https://staggering.tonkombat.com/assets/default-helm-C07JIHJh.webp"
          height="38%"
          width="100%"
          x="0%"
          y="19%"
        ></image>
        <image
          href="https://inazuma.tonkombat.com/6eeb436d-7ff8-48c1-9d11-344bc10d4bac.webp"
          height="14%"
          width="100%"
          x="-54%"
          y="84%"
          className="-rotate-[60deg]"
          style={{
            filter: "none",
            transform:
              "translate(0,0) rotate(-60deg) skew(0) skewY(0) scaleX(1) scaleY(1)",
          }}
        ></image>
        <image
          href="data:image/webp;base64,UklGRp4BAABXRUJQVlA4WAoAAAAQAAAAHwAAGgAAQUxQSMsAAAABgLJt2/lX9f1Ps213K7mv2t6+gL01s3rJzMu23Wz7+fP9P29ETAB0et4u9DhC5ggRnXpLyCDNpyy+My1ENVyppHs1XsGyLEBEe/Oa7SEi/sTba6erj4mObLVVE/uYlhqSGKdxImMYgOJBRgKAdJJ4C8DzTMYm4HhCMm8MYPkgpR5Ak4w1BQD3R74jV2g2st36QavlGdOpE3RGvvPUQbCY5dFOBJUM/5UQz7/Q57cE+nrOiX2lgjGkaudHx1UoeE0iqqcPr27OJz0gCgBWUDggrAAAANAFAJ0BKiAAGwA+nUKYSDIlpicwGAwAsBOJZwC7AYwABS3axhDUvRjAQ5msIBH9RZxrHjOgYAAA7aRpDalbooy/KnSFIHv2lvnmyH9ZsL/57gYQuctlJZcFNd5bb3EKiLhjntK9bLS7mtFudkojcK/fXxNKJWK9LreRIse9kHT6JQSw+3Cfp9uGAQnpaT1HFKWgaHEw1mEd3mMt9W9LFyQApV/+Zf/iOuWAAAA="
          height="8%"
          width="100%"
          x="17%"
          y="65%"
        ></image>
        <image
          href="https://inazuma.tonkombat.com/ec574d48-a1bb-4074-a4e5-4be1cc8d95b9.webp"
          height="39%"
          width="100%"
          x="-15%"
          y="54.5%"
          style={{ filter: "none" }}
        ></image>
        <image
          href="https://staggering.tonkombat.com/assets/pet_moonbix-CQQnvteN.webp"
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
