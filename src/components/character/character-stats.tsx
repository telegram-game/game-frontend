import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import { usePopup } from "../../modules/popup/popup.provider";
import { useAppDispatch, useAppSelector } from "../../modules/redux/hook";
import { requestChangeSkill } from "../../modules/redux/slices/app.slice";
import ChangeSkillPopupComponent from "../popup/change-skill/change-skill-popup.component";
import styles from "./character-stats.module.css";

const CharacterStats = () => {
  const navigate = useNavigate();
  const dispacth = useAppDispatch();
  const { hero, gameProfile } = useAppSelector(({ app }) => app);
  const { openPopup, isOpen, closePopup } = usePopup();

  const onChangeSkill = (skillCode: string) => {
    dispacth(requestChangeSkill(skillCode)).unwrap().then(closePopup);
  };
  const onHandleChangeSkill = (e: React.MouseEvent<HTMLButtonElement>) => {
    openPopup(
      <ChangeSkillPopupComponent
        onClose={closePopup}
        onConfirm={onChangeSkill}
      />,
    );
  };

  const statics = useMemo(() => {
    const stats = {
      stats: [
        {
          icon: null,
          text: `House: ${gameProfile?.houseData.name}`,
          style: {
            justifyContent: "space-between",
          },
          action: (
            <button
              onClick={() => navigate("/house")}
              className={styles.actionButton}
            >
              <img src={images.rotate} alt='Rotate' />
            </button>
          ),
        },
        {
          icon: null,
          text: "Level: 23",
          hint: (
            <div className={styles.statusIcon}>
              <img src={images.info} alt='Info' />
            </div>
          ),
          style: {
            justifyContent: "flex-end",
          },
          action: null,
        },
        {
          icon: images.attack,
          text: `Attack ${hero?.attack.point}`,
          buffer: 60,
        },
        {
          icon: images.luck,
          text: `Luck: ${gameProfile?.houseData.attributes.luckLevel}`,
        },
        {
          icon: images.hp,
          text: `HP: ${hero?.hp.point}`,
          buffer: 300,
        },
        {
          icon: images.faltalBlow,
          text: gameProfile?.skillData.name,
          style: {
            justifyContent: "space-between",
          },
          action: (
            <button
              onClick={onHandleChangeSkill}
              className={styles.actionButton}
            >
              <img
                className='skillIcon'
                src={images?.fatalBlowSkill}
                alt='Fatal blow Skill'
              />
              <img
                className={styles.rotateIcon}
                src={images?.rotate}
                alt='Rotate'
              />
            </button>
          ),
        },
      ],
      ff: {},
    };
    return (
      <div className={styles.statsContainer}>
        {stats.stats.map((stat, index) => (
          <div key={index} className={styles.statItem} style={stat.style}>
            {stat.icon && <img src={stat.icon} alt={stat.text} />}
            <span className={styles.statText}>
              {stat.text}{" "}
              {stat.buffer && (
                <span className={styles.bufferText}>(+ {stat.buffer})</span>
              )}
            </span>
            {stat.hint}
            {stat.action}
          </div>
        ))}
      </div>
    );
  }, [hero, gameProfile, navigate, isOpen, onHandleChangeSkill]);

  return (
    <>
      <div className={styles.cardContainer}>{statics}</div>
    </>
  );
};

export default CharacterStats;
