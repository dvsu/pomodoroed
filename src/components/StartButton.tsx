import styles from "./StartButton.module.scss";

interface StartButtonProps {
  onClickStartButton: () => void;
  isStarted: boolean;
  isDisabled: boolean;
}

export const StartButton: React.FC<StartButtonProps> = ({
  onClickStartButton,
  isStarted,
  isDisabled,
}) => {
  return (
    <div
      className={`${styles["start-button"]} ${isDisabled ? "disabled" : ""}`}
      onClick={onClickStartButton}
    >
      <div className={styles["start-button__content"]}>
        <div className={styles["start-button__text"]}>
          {isStarted ? "stop" : "start"}
        </div>
      </div>
    </div>
  );
};
