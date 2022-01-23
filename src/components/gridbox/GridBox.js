import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./GridBox.css";
import Grid from "@mui/material/Grid";

const answer = ["p", "r", "i", "y", "a"];

// let attempts = [];

const GridBox = ({ userInput, attempts }) => {
  let successArray = [];
  for (let i = 0; i < answer.length; i++) {
    if (userInput[i] == answer[i]) {
      console.log("success at ", i);
      successArray.push("#538E4E");
    } else if (answer.includes(userInput[i])) {
      successArray.push("#B49F3B");
    } else {
      successArray.push("#3A3A3C");
    }
  }

  console.log("userInput from gridbox", userInput);
  console.log("attempts from gridbox", attempts);
  // attempts.push(userInput);
  // console.log("attempts", attempts);
  // console.log("successArray", successArray);
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
          {answer.map((item, i) => (
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
      {/* --------------22222----------------- */}
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
          {answer.map((item, i) => (
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
      {/* --------------33333----------------- */}
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
          {answer.map((item, i) => (
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
    </>
  );
};

export default GridBox;
