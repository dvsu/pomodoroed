export const secondsToHoursMinutesSeconds = (seconds: number) => {
  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: (seconds % 3600) % 60,
  };
};
