import { useMemo } from "react";
import styles from "./ConstantHolder.module.css";

const ConstantHolder = ({ howManyFollowersDoYouHave, propWidth }) => {
  const howManyFollowersStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.constantHolder}>
      <div className={styles.howManyFollowers} style={howManyFollowersStyle}>
        {howManyFollowersDoYouHave}
      </div>
      <div className={styles.slider1}>
        <div className={styles.dataMerger}>
          <div className={styles.unactive} />
          <div className={styles.activeParent}>
            <div className={styles.active} />
            <div className={styles.sorter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstantHolder;
