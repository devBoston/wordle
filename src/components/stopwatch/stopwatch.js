import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, solved, finalSuccess }) {
  const {
    seconds,

    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const inputRef = React.useRef(null);

  // if (solved) {
  //   inputRef.current.click();
  //   return;
  // }

  console.log(solved, "solved from stopwatch log");
  console.log(finalSuccess, "finalSuccess from stopwatch log");

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{seconds}</span>
      </div>

      <button onClick={start}>Start</button>
      <button ref={inputRef} onClick={pause}>
        Pause
      </button>
      <button onClick={resume}>Resume</button>
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 10.5);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
}

export default function AppStopwatch({ solved, finalSuccess }) {
  const time = new Date();

  time.setSeconds(time.getSeconds() + 30); // 10 minutes timer
  // if (solved) {
  //   console.log("time is", time);
  //   return time;
  // }
  return (
    <div>
      <MyTimer
        expiryTimestamp={time}
        solved={solved}
        finalSuccess={finalSuccess}
      />
    </div>
  );
}
