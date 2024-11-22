import { useEffect, useMemo, useState } from "react";
import { images } from "../../../constants";
import { useAppSelector } from "../../../modules/redux/hook";
import styles from "./change-skill-popup.module.css";

interface ChangeSkillPopupComponentProps {
  onClose: () => void;
  onConfirm: (skill: string) => void;
}
const ChangeSkillPopupComponent = ({
  onClose,
  onConfirm,
}: ChangeSkillPopupComponentProps) => {
  const { appInformation, hero } = useAppSelector(({ app }) => app);
  const [selectedSkill, setSelectedSkill] = useState<string>();
  useEffect(() => {
    setSelectedSkill(hero?.skill);
  }, [hero]);
  const skills = useMemo(() => {
    return (
      <div className={styles.backdrop}>
        <div className={styles.skillContainer}>
          {Object.entries(appInformation?.skills ?? {}).map(([key, value]) => (
            <div
              className={styles.item}
              key={key}
              onClick={() => setSelectedSkill(value.code)}
            >
              <div
                className={`${styles.itemImage} & ${
                  selectedSkill === value.code && styles.selected
                }`}
              >
                <img src={images.changeSkill} alt="Change Skill" />
              </div>
              <div className={styles.itemContent}>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }, [appInformation?.skills, selectedSkill]);
  return (
    <div className={styles.container}>
      <div className={styles.controlButtonArea}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.popupContent}>
        <div className={styles.header}>Choose your pet's skill</div>
        <img src={images.changeSkill} alt="Change Skill" />
        <div className={styles.content}>
          {skills}
          <div className={styles.bottom}>
            <div className={styles.actionButton}>
              <button onClick={() => onConfirm(selectedSkill!)}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeSkillPopupComponent;
