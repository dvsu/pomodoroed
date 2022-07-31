import React from "react";
import { useState } from "react";
import { TimerCase } from "./components/TimerCase";
import "./App.scss";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(0);
    setSeconds(0);
    setSelectedTimeSeconds(0);
    setIsStarted((prevState) => !prevState);
    setIsDisabled(true);
  };

  const startTimer = () => {
    setIsStarted((prevState) => !prevState);
    const interval: number = window.setInterval(() => {
      setSeconds((prevSec) => prevSec - 1);
    }, 1000);
    setTimerInterval(interval);
  };

  if (seconds === 0 && isStarted) {
    resetTimer();
  }

  const buttonHandler = () => {
    if (timerInterval) {
      resetTimer();
      return;
    }
    startTimer();
  };

  const timeSelectionHandler = (time: number) => {
    setSeconds(time);
    setSelectedTimeSeconds(time);
    setIsDisabled(false);
  };

  return (
    <div className="App">
      <TimerCase
        seconds={seconds}
        timerSelectorList={[900, 1500, 2700, 3600]}
        selectedTimeSeconds={selectedTimeSeconds}
        onSelected={timeSelectionHandler}
        onClickStartButton={buttonHandler}
        isStarted={isStarted}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default App;
