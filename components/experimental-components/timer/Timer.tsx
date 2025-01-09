/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

interface Props {
  initialDate: Date;
}

export const Timer = ({ initialDate }: Props) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // Calculate elapsed time in seconds
  //       const now = new Date();
  //       const elapsed = Math.floor((now - initialDate) / 1000); // Convert to seconds
  //       setElapsedTime(elapsed);
  //     }, 1000);

  //     // Clear interval on component unmount
  //     return () => clearInterval(interval);
  //   }, [initialDate]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
    const minutes = Math.floor((seconds % 3600) / 60); // Remaining minutes
    const remainingSeconds = seconds % 60; // Remaining seconds

    // Format the time based on hours, minutes, and seconds
    if (hours > 0) {
      return `${String(hours).padStart(2, "0")} h ${String(minutes).padStart(
        2,
        "0"
      )} m ${String(remainingSeconds).padStart(2, "0")} s`;
    } else if (minutes > 0) {
      return `${String(minutes).padStart(2, "0")} m ${String(
        remainingSeconds
      ).padStart(2, "0")} s`;
    } else {
      return `${String(remainingSeconds).padStart(2, "0")} s`;
    }
  };

  return <div>{/* <p>{formatTime(elapsedTime)}</p> */}</div>;
};
