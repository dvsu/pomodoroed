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
      <div className={styles["timer-row__hour--first"]}>
        <Digit value={Math.floor(hh / 10)} />
      </div>
      <div className={styles["timer-row__hour--second"]}>
        <Digit value={hh % 10} />
      </div>
      <div className={styles["timer-row__separator--1"]}>
        <Separator />
      </div>
      <div className={styles["timer-row__minute--first"]}>
        <Digit value={Math.floor(mm / 10)} />
      </div>
      <div className={styles["timer-row__minute--second"]}>
        <Digit value={mm % 10} />
      </div>
      <div className={styles["timer-row__separator--2"]}>
        <Separator />
      </div>
      <div className={styles["timer-row__second--first"]}>
        <Digit value={Math.floor(ss / 10)} />
      </div>
      <div className={styles["timer-row__second--second"]}>
        <Digit value={ss % 10} />
      </div>
    </div>
  );
};
