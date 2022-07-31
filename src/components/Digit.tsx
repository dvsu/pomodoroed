import React from "react";
import styles from "./Digit.module.scss";

interface DigitProps {
  value: number;
}

export const Digit: React.FC<DigitProps> = ({ value }) => {
  return (
    <div className={styles.digit}>
      <div className={styles.content}>{value}</div>
      {/* <div className={styles.background}></div> */}
    </div>
  );
};
