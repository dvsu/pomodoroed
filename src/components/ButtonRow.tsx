import styles from "./ButtonRow.module.scss";
import { SelectorButton } from "./SelectorButton";
import { StartButton } from "./StartButton";

interface ButtonRowProps {
  timeSelectorList: number[];
  selectedTimeSeconds: number;
  onSelected: (seconds: number) => void;
  onClickStartButton: () => void;
  isStarted: boolean;
  isDisabled: boolean;
}

export const ButtonRow: React.FC<ButtonRowProps> = ({
  timeSelectorList,
  selectedTimeSeconds,
  onSelected,
  onClickStartButton,
  isStarted,
  isDisabled,
}) => {
  return (
    <div className={styles["button-row"]}>
      <div className={styles["button-row--float"]}>
        {timeSelectorList.map((time) => (
          <div className={styles["button-1-7"]}>
            <SelectorButton
              timeSecondsLabel={time}
              selectedTimeSeconds={selectedTimeSeconds}
              isStarted={isStarted}
              onSelected={onSelected}
            />
          </div>
        ))}
        <div className={styles["button-2-7"]}>
          <StartButton
            onClickStartButton={onClickStartButton}
            isStarted={isStarted}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};
