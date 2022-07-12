import React from "react";
import styles from "./Separator.module.scss";

export const Separator: React.FC = () => {
  return (
    <div className={styles.separator}>
      <div className={styles.content}>:</div>
    </div>
  );
};
