import React, { useState, useEffect } from "react";

const CustomStopWatch = ({ solved, finalSuccess }) => {
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(true);

  //   function toggle() {
  //     setIsActive(!isActive);
  //   }

  useEffect(() => {
    let interval = null;
    if (finalSuccess.length > 0) {
      setIsActive(true);
    }
    if (solved) {
      setIsActive(false);
      return;
    }
    if (seconds <= 0) {
      setIsActive(false);
      setSeconds("Time is up!");
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, finalSuccess, solved]);

  return <div className="time">{seconds}</div>;
};

export default CustomStopWatch;

// import React, { useState, useEffect } from "react";

// const CustomStopWatch = ({ solved, finalSuccess }) => {
//   const [seconds, setSeconds] = useState(30);
//   const [isActive, setIsActive] = useState(true);

//   //   function toggle() {
//   //     setIsActive(!isActive);
//   //   }
//   console.log(finalSuccess.length, "finalSuccess.length");
//   useEffect(() => {
//     let interval = null;
//     if (finalSuccess.length > 0) {
//       setIsActive(true);
//     }
//     if (solved) setIsActive(!isActive);
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds((seconds) => seconds - 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds, finalSuccess, solved]);

//   return <div className="time">{seconds}</div>;
// };

// export default CustomStopWatch;
