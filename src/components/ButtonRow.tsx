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
      {timeSelectorList.map((time) => (
        <div className={styles["button-row__select"]}>
          <SelectorButton
            timeSecondsLabel={time}
            selectedTimeSeconds={selectedTimeSeconds}
            isStarted={isStarted}
            onSelected={onSelected}
          />
        </div>
      ))}
      <div className={styles["button-row__start"]}>
        <StartButton
          onClickStartButton={onClickStartButton}
          isStarted={isStarted}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};
