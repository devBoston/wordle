import GridBox from "./components/gridbox/GridBox";
import Input from "./components/input/Input";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [userInput, setUserInput] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("from submit", userInput);
  // };
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

  //console.log("userInput", userInput);

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <label>
          Guess:
          <input type="text" onChange={handleChange} />
        </label>
  
      </form> */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            defaultValue=""
            placeholder="guess here!"
            variant="standard"
            inputProps={{ maxLength: 5 }}
            onChange={handleChange}
            // onSubmit={handleSubmit}
          />
        </div>
      </Box>

      <GridBox userInput={userInput} />
    </div>
  );
}

export default App;
