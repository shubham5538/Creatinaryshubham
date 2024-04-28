import ConstantHolder from "./ConstantHolder";
import styles from "./InputSelector.module.css";

const InputSelector = () => {
  return (
    <section className={styles.inputSelector}>
      <div className={styles.outputAggregator}>
        <div className={styles.conditionSplitter}>
          <h2 className={styles.estimateEarningPotential}>
            ESTIMATE EARNING POTENTIAL
          </h2>
        </div>
        <div className={styles.estimatedCalculator}>
          <div className={styles.main}>
            <div className={styles.sliders}>
              <div className={styles.filter}>
                <div className={styles.whatKindOf}>
                  What kind of influencer are you?
                </div>
                <select className={styles.dropdown} />
              </div>
              <ConstantHolder howManyFollowersDoYouHave="How many followers do you have?" />
              <div className={styles.constantHolder}>
                <button className={styles.amount}>
                  <div className={styles.k}>500K</div>
                </button>
              </div>
              <ConstantHolder
                howManyFollowersDoYouHave="How many products do you list monthly?"
                propWidth="unset"
              />
              <div className={styles.constantHolder1}>
                <div className={styles.amount1}>
                  <div className={styles.div}>25</div>
                </div>
              </div>
            </div>
            <div className={styles.variableBank}>
              <div className={styles.values}>
                <div className={styles.errorReport}>
                  <div className={styles.conditionChain}>
                    <h3 className={styles.monthlyEarning}>Monthly Earning</h3>
                    <div className={styles.conditionalBranch}>
                      <b className={styles.b}>₹12,000</b>
                    </div>
                  </div>
                </div>
                <div className={styles.sequentialProcessor}>
                  <div className={styles.dataSplitter}>
                    <h3 className={styles.yearlyEarning}>Yearly Earning</h3>
                  </div>
                  <b className={styles.b1}>₹1,44,000</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputSelectorChain}>
            <button className={styles.button}>
              <div className={styles.getStarted}>Calculate</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputSelector;
