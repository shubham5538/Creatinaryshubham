import { useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const onButton1Click = useCallback(() => {
    // Please sync "Page2" to the project
  }, []);

  return (
    <section className={styles.aboutHighlightedFeaturesWrapper}>
      <div className={styles.aboutHighlightedFeatures}>
        <img
          className={styles.previousIcon}
          loading="lazy"
          alt=""
          src="/previous.svg"
        />
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.dashboard}>
              <h1 className={styles.yourAudienceWants}>
                Your audience wants links
              </h1>
              <div className={styles.makeItEasy}>
                Make it easy for them by linking products to every post and
                video
              </div>
            </div>
            <div className={styles.wrapperGroup300}>
              <img
                className={styles.wrapperGroup300Child}
                loading="lazy"
                alt=""
                src="/group-300@2x.png"
              />
            </div>
          </div>
          <button className={styles.button} onClick={onButton1Click}>
            <div className={styles.getStarted}>Try for free</div>
          </button>
        </div>
        <img
          className={styles.nextIcon}
          loading="lazy"
          alt=""
          src="/next.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
