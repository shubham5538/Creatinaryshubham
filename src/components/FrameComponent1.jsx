import { useCallback } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Page2" to the project
  }, []);

  return (
    <section className={styles.frameParent}>
      <div className={styles.navlinksWrapper}>
        <img className={styles.navlinksIcon} alt="" src="/navlinks.svg" />
      </div>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.frameGroup}>
            <div className={styles.welcomeToIndiasFirstCreatParent}>
              <h1 className={styles.welcomeToIndiasContainer}>
                <span>{`Welcome To India’s First `}</span>
                <span className={styles.creatorsMarketplace}>
                  Creator’s Marketplace
                </span>
              </h1>
              <h3 className={styles.createYourFirst}>
                Create your first E-Store @ Zero Cost
              </h3>
            </div>
            <div className={styles.empowerYourCreativity}>
              Empower your creativity with Createnary. Showcase, sell, and
              connect with a global audience effortlessly, turn your products
              into profits.
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.getStarted}>Get Started</div>
          </button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.wrapper32767469ResponsiveDe}>
          <img
            className={styles.responsiveDevice33Copy2}
            loading="lazy"
            alt=""
            src="/32767469-responsive-device-33-copy-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
