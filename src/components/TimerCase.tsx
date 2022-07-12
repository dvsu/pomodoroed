import { TimerRow } from "./TimerRow";
import { ButtonRow } from "./ButtonRow";

import styles from "./TimerCase.module.scss";

interface TimerCaseProps {
  seconds: number;
  timerSelectorList: number[];
  selectedTimeSeconds: number;
  onSelected: (selectedTimeSeconds: number) => void;
  onClickStartButton: () => void;
  isStarted: boolean;
  isDisabled: boolean;
}

export const TimerCase: React.FC<TimerCaseProps> = ({
  seconds,
  timerSelectorList,
  selectedTimeSeconds,
  onSelected,
  onClickStartButton,
  isStarted,
  isDisabled,
}) => {
  return (
    <div className={styles["timer-case"]}>
      <div className={styles.brand}>Pomodoroed</div>
      <TimerRow seconds={seconds} />
      <ButtonRow
        timeSelectorList={timerSelectorList}
        selectedTimeSeconds={selectedTimeSeconds}
        onSelected={onSelected}
        onClickStartButton={onClickStartButton}
        isStarted={isStarted}
        isDisabled={isDisabled}
      />
    </div>
  );
};
