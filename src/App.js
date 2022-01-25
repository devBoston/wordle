import GridBox from "./components/gridbox/GridBox";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

import { wordList } from "./wordList";

function App() {
  const [userInput, setUserInput] = useState([]);
  const [randomAnswer, setrandomAnswer] = useState("");
  const [seconds, setSeconds] = useState(30);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const rndInteger = Math.floor(Math.random() * 5000) + 1;
    const UEanswer = wordList[rndInteger].split("");
    console.log(UEanswer, "fromn useeffect");
    setrandomAnswer(UEanswer);
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value.length == 5) {
      e.target.value = "";
    }
  };

  if (userInput.length == 5) {
    setTimeout(() => {
      setUserInput("");
    }, 10);
  }

  console.log("randomAnswer", randomAnswer);
  console.log("userInput", userInput);

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            defaultValue=""
            placeholder="Take a guess!"
            variant="standard"
            inputProps={{ maxLength: 5 }}
            onChange={handleChange}
          />
        </div>
      </Box>

      <GridBox userInput={userInput} randomAnswer={randomAnswer} />
    </div>
  );
}

export default App;
