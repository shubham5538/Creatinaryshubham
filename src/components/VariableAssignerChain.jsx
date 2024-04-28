import styles from "./VariableAssignerChain.module.css";

const VariableAssignerChain = () => {
  return (
    <section className={styles.variableAssignerChain}>
      <div className={styles.constantHolderChain}>
        <div className={styles.dataComparerChain}>
          <div className={styles.dataTransformerChain}>
            <div className={styles.logicGateChain}>
              <h2 className={styles.frequentlyAskedQuestions}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <div className={styles.quickAnswersToContainer}>
              <p className={styles.quickAnswersTo}>
                Quick answers to questions you may have. Can’t find what you're
                looking for?
              </p>
              <p className={styles.checkOutOur}>
                Check out our full documentation
              </p>
            </div>
          </div>
        </div>
        <div className={styles.joinerChain}>
          <div className={styles.sorterChain}>
            <div className={styles.coibaseWallet}>
              How much does it cost to set up a store?
            </div>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className={styles.navigation}>
            <div className={styles.coibaseWallet1}>
              What kind of digital products can I sell?
            </div>
            <img className={styles.icon1} alt="" src="/icon.svg" />
          </div>
          <div className={styles.inputMapChain}>
            <div className={styles.outputMapChain}>
              <div className={styles.doINeed}>
                Do I need technical skills to use the platform?
              </div>
              <img className={styles.icon2} alt="" src="/icon-2.svg" />
            </div>
            <div className={styles.line} />
            <div className={styles.noNotAt}>
              No, not at all! Our platform is designed with user-friendliness in
              mind. You can easily navigate and set up your store without any
              technical expertise. It's as simple as a few clicks to get
              started!
            </div>
          </div>
          <div className={styles.sorterChain1}>
            <div className={styles.coibaseWallet2}>
              Is there a limit to the number of products I can list?
            </div>
            <img className={styles.icon3} alt="" src="/icon.svg" />
          </div>
          <div className={styles.dashboard}>
            <div className={styles.coibaseWallet3}>
              How do I receive payments for my sales?
            </div>
            <img className={styles.icon4} alt="" src="/icon.svg" />
          </div>
          <div className={styles.down}>
            <div className={styles.coibaseWallet4}>
              Can I sell internationally on this marketplace?
            </div>
            <img className={styles.icon5} alt="" src="/icon.svg" />
          </div>
          <div className={styles.sorterChain2}>
            <div className={styles.coibaseWallet5}>
              What support and resources are available for sellers?
            </div>
            <img className={styles.icon6} alt="" src="/icon.svg" />
          </div>
          <div className={styles.sorterChain3}>
            <div className={styles.coibaseWallet6}>
              Is there a review process for uploaded products?
            </div>
            <img className={styles.icon7} alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VariableAssignerChain;
