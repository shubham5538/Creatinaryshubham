import InputContainer from "../components/InputContainer";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import InputSelector from "../components/InputSelector";
import VariableAssignerChain from "../components/VariableAssignerChain";
import Footer from "../components/Footer";
import styles from "./Page.module.css";

const Page = () => {
  return (
    <div className={styles.page1}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <InputContainer />
      <FrameComponent1 />
      <FrameComponent />
      <InputSelector />
      <VariableAssignerChain />
      <Footer />
    </div>
  );
};

export default Page;
