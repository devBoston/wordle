import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./GridBox.css";
import Grid from "@mui/material/Grid";
import { wordList } from "../../wordList";
import Countdown from "react-countdown";
import BasicModal from "../modal/Modal";
// import MyTimer from "../stopwatch/stopwatch";
import CustomStopWatch from "../customStopwatch/customStopWatch";

const triesWorking = [];
const finalSuccess = [];
let solved = false;
let errorMessage = false;
let gameOver = false;

const GridBox = ({ userInput, randomAnswer }) => {
  let successArray = [];

  for (let i = 0; i < randomAnswer.length; i++) {
    if (userInput[i] == randomAnswer[i]) {
      successArray.push("#538E4E");
    } else if (randomAnswer.includes(userInput[i])) {
      successArray.push("#B49F3B");
    } else {
      successArray.push("#3A3A3C");
    }
  }

  function getRndInteger() {
    return Math.floor(Math.random() * 5758) + 1;
  }
  const getRandomWord = () => {
    randomAnswer = wordList[getRndInteger()]?.split("");
  };
  getRandomWord();

  console.log("userInput from gridbox", userInput);
  if (userInput.length == 5 && wordList.includes(userInput)) {
    triesWorking.push(userInput);
    errorMessage = false;
  } else if (userInput.length == 5 && !wordList.includes(userInput)) {
    errorMessage = true;
  }

  if (userInput.length == 5 && wordList.includes(userInput))
    finalSuccess.push(successArray);

  const solvedPuzzle = (currentValue) => currentValue == "#538E4E";
  if (finalSuccess[finalSuccess.length - 1]?.every(solvedPuzzle)) {
    solved = true;
  }

  if (finalSuccess.length == 10) {
    gameOver = true;
    console.log("game is over!!!!!!!!!!");
  }

  console.log("successArray", successArray);

  const filteredTriesWorking = triesWorking.filter((item) => item.length > 4);
  console.log("filteredTriesWorking", filteredTriesWorking);
  console.log("finalSuccess length is ", finalSuccess.length);

  // const Completionist = () => <span>Game Over!</span>;

  // // Renderer callback with condition
  // const renderer = ({ seconds, completed }) => {
  //   if (solved) {
  //     const completedTime = [];
  //     completedTime.push(seconds);
  //     console.log(completedTime, "this works!!!!");
  //     return <span>{completedTime}"this works!!!!"</span>;
  //   } else if (completed) {
  //     // Render a complete state
  //     return <Completionist />;
  //   } else {
  //     // Render a countdown
  //     return <span>{seconds}</span>;
  //   }
  // };

  return (
    <>
      {/* <MyTimer solved={solved} finalSuccess={finalSuccess} /> */}
      <CustomStopWatch solved={solved} finalSuccess={finalSuccess} />
      <BasicModal
        solved={solved}
        finalSuccess={finalSuccess}
        gameOver={gameOver}
      />
      {/* {!solved ? "" : <div className="solved">CONGRATS!</div>} */}
      {!errorMessage ? (
        ""
      ) : (
        <div className="errorMessage">Word not found. Please try again.</div>
      )}
      {/* <Countdown renderer={renderer} date={Date.now() + 30000} /> */}
      {finalSuccess.length > 0 ? (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            {randomAnswer.map((item, i) => (
              <Paper
                key={i}
                style={{ backgroundColor: finalSuccess[0][i] }}
                variant="outlined"
                square
              >
                <div className="textSquare">
                  {filteredTriesWorking[0].split("")[i]}
                </div>
              </Paper>
            ))}

            <br />
          </Box>
        </Grid>
      ) : null}
      {/* --------------------------- */}
      {finalSuccess.length > 2 ? (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            {randomAnswer.map((item, i) => (
              <Paper
                key={i}
                style={{ backgroundColor: finalSuccess[2][i] }}
                variant="outlined"
                square
              >
                <div className="textSquare">
                  {filteredTriesWorking[2].split("")[i]}
                </div>
              </Paper>
            ))}

            <br />
          </Box>
        </Grid>
      ) : null}
      {/* --------------22222-----this works below------------ */}
      {finalSuccess.length > 4 ? (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            {randomAnswer.map((item, i) => (
              <Paper
                key={i}
                style={{ backgroundColor: finalSuccess[4][i] }}
                variant="outlined"
                square
              >
                <div className="textSquare">
                  {filteredTriesWorking[4].split("")[i]}
                </div>
              </Paper>
            ))}

            <br />
          </Box>
        </Grid>
      ) : null}
      {/* --------------33333----------------- */}
      {finalSuccess.length > 6 ? (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            {randomAnswer.map((item, i) => (
              <Paper
                key={i}
                style={{ backgroundColor: finalSuccess[6][i] }}
                variant="outlined"
                square
              >
                <div className="textSquare">
                  {filteredTriesWorking[6].split("")[i]}
                </div>
              </Paper>
            ))}

            <br />
          </Box>
        </Grid>
      ) : null}
      {/* --------------444444----------------- */}
      {finalSuccess.length > 8 ? (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            {randomAnswer.map((item, i) => (
              <Paper
                key={i}
                style={{ backgroundColor: finalSuccess[8][i] }}
                variant="outlined"
                square
              >
                <div className="textSquare">
                  {filteredTriesWorking[8].split("")[i]}
                </div>
              </Paper>
            ))}

            <br />
          </Box>
        </Grid>
      ) : null}
    </>
  );
};

export default GridBox;
