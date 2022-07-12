import { secondsToHoursMinutesSeconds } from "../utils/time-conversion";
import { Digit } from "./Digit";
import { Separator } from "./Separator";
import styles from "./TimerRow.module.scss";

interface TimerRowProps {
  seconds: number;
}

export const TimerRow: React.FC<TimerRowProps> = ({ seconds }) => {
  const {
    hours: hh,
    minutes: mm,
    seconds: ss,
  } = secondsToHoursMinutesSeconds(seconds);

  return (
    <div className={styles["timer-row"]}>
      <div className={styles["digit-odd-1-6"]}>
        <Digit value={Math.floor(hh / 10)} />
      </div>
      <div className={styles["digit-even-1-6"]}>
        <Digit value={hh % 10} />
      </div>
      <div className={styles.separator}>
        <Separator />
      </div>
      <div className={styles["digit-odd-1-6"]}>
        <Digit value={Math.floor(mm / 10)} />
      </div>
      <div className={styles["digit-even-1-6"]}>
        <Digit value={mm % 10} />
      </div>
      <div className={styles.separator}>
        <Separator />
      </div>
      <div className={styles["digit-odd-1-6"]}>
        <Digit value={Math.floor(ss / 10)} />
      </div>
      <div className={styles["digit-even-1-6"]}>
        <Digit value={ss % 10} />
      </div>
    </div>
  );
};
