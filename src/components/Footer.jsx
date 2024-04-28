import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.roundedEdgeMakerParent}>
        <div className={styles.roundedEdgeMaker}>
          <div className={styles.triangleFactoryParent}>
            <div className={styles.triangleFactory}>
              <h3 className={styles.createnary}>Createnary</h3>
            </div>
            <div className={styles.starConstructor}>
              <div className={styles.navigation}>Navigation</div>
              <div className={styles.aboutCreatenary}>About Createnary</div>
              <div className={styles.contactUs}>Contact Us</div>
              <div className={styles.refund}>Refund</div>
              <div className={styles.newsletter}>Newsletter</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.privacyPolicy}>{`Privacy & Policy`}</div>
            </div>
            <div className={styles.gridMaker}>
              <div className={styles.contacts}>Contacts</div>
              <div className={styles.spacer}>
                <img className={styles.jIcon} alt="" src="/frame-5.svg" />
                <div className={styles.delhiIndiaWrapper}>
                  <div className={styles.delhiIndia}>Delhi, India</div>
                </div>
              </div>
              <div className={styles.labelDesigner}>
                <div className={styles.popoverWrapper}>
                  <div className={styles.popover}>+91 98765 43210</div>
                </div>
                <div className={styles.allNewParent}>
                  <img
                    className={styles.allNewIcon}
                    alt=""
                    src="/frame-6.svg"
                  />
                  <div className={styles.borderStyler}>
                    <div className={styles.cornerRadiusEditor}>
                      +91 99999 99999
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shadowApplier} />
      </div>
      <div className={styles.dropShadowMaker}>
        <div className={styles.createnary2024}>© Createnary 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
