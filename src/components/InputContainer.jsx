import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./InputContainer.module.css";

const InputContainer = () => {
  return (
    <header className={styles.inputContainer}>
      <div className={styles.header}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.createnaryWrapper}>
              <h3 className={styles.createnary}>Createnary</h3>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className={styles.searchCreatorsWrapper}>
              <div className={styles.searchCreators}>Search Creators</div>
            </div>
          </div>
        </div>
        <div className={styles.headerInner}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameFrame}>
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                  <div className={styles.cart}>Cart</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper1}>
                    <img
                      className={styles.frameIcon2}
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                  <div className={styles.about}>About</div>
                </div>
                <div className={styles.frameParent3}>
                  <img
                    className={styles.frameIcon3}
                    alt=""
                    src="/frame-3.svg"
                  />
                  <div className={styles.contact}>Contact</div>
                </div>
              </div>
            </div>
            <FormControl
              className={styles.parent}
              variant="standard"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "123px",
                height: "42px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "42px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "42px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "42px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "42px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InputContainer;
