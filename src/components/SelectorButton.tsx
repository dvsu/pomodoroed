import styles from "./SelectorButton.module.scss";

interface SelectorButtonProps {
  timeSecondsLabel: number;
  selectedTimeSeconds: number;
  isStarted: boolean;
  onSelected: (selectedTimeSeconds: number) => void;
}

export const SelectorButton: React.FC<SelectorButtonProps> = ({
  timeSecondsLabel,
  selectedTimeSeconds,
  isStarted,
  onSelected,
}) => {
  const minutes = Math.floor(timeSecondsLabel / 60);
  const selectedTextStyle =
    selectedTimeSeconds === timeSecondsLabel
      ? "selector-button__text--selected"
      : "";

  const selectedBackgroundStyle =
    selectedTimeSeconds === timeSecondsLabel
      ? "selector-button__background--selected"
      : "";

  const selectedEdgeStyle =
    selectedTimeSeconds === timeSecondsLabel ? "selector-button--selected" : "";

  return (
    <div
      className={`${styles["selector-button"]} ${styles[selectedEdgeStyle]}`}
      onClick={isStarted ? undefined : onSelected.bind(null, timeSecondsLabel)}
    >
      <div
        className={`${styles["selector-button__background"]} ${styles[selectedBackgroundStyle]}`}
      >
        <div
          className={`${styles["selector-button__text"]} ${styles[selectedTextStyle]}`}
        >
          {minutes}
        </div>
        <div>minutes</div>
      </div>
    </div>
  );
};
