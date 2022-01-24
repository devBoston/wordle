import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./GridBox.css";
import Grid from "@mui/material/Grid";
import { wordList } from "../../wordList";

const triesWorking = [];
const finalSuccess = [];

const GridBox = ({ userInput, randomAnswer }) => {
  let successArray = [];
  for (let i = 0; i < randomAnswer.length; i++) {
    if (userInput[i] == randomAnswer[i]) {
      console.log("success at ", i);

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
    randomAnswer = wordList[getRndInteger()].split("");
  };
  getRandomWord();

  console.log("userInput from gridbox", userInput);
  if (userInput.length == 5) triesWorking.push(userInput);

  if (userInput.length == 5) finalSuccess.push(successArray);

  console.log("successArray", successArray);

  const filteredTriesWorking = triesWorking.filter((item) => item.length > 4);
  console.log("filteredTriesWorking", filteredTriesWorking);
  console.log("finalSuccess", finalSuccess);
  console.log("randomAnswer from gridbox", randomAnswer);
  return (
    <>
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
              style={{ backgroundColor: successArray[i] }}
              variant="outlined"
              square
            >
              <div className="textSquare">{userInput[i]}</div>
            </Paper>
          ))}

          <br />
        </Box>
      </Grid>
      {/* --------------------------- */}
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
