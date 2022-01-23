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
  const [attempts, setAttempts] = useState([]);

  const tries = [];

  const handleSubmit = (e) => {
    //setUserInput(e.target.value);
    console.log("from submit", userInput);
    e.preventDefault();
    tries.push(userInput);
    setAttempts(...userInput);
    console.log("tries", tries);
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  };

  //console.log("userInput", userInput);
  // console.log("tries", tries);
  console.log("attempts", attempts);

  return (
    <div className="App">
      <h1>{tries[0]}</h1>
      <h1>{tries[1]}</h1>
      <h1>{tries[0]}</h1>
      <h1>{tries[3]}</h1>
      <h1>{tries[4]}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Guess:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {/* <TextField
            //   error
            //   label="Error"
            defaultValue=""
            placeholder="guess here!"
            //   helperText="Incorrect entry."
            variant="standard"
            inputProps={{ maxLength: 5 }}
            onChange={handleChange}
          /> */}

          {/* <Button variant="contained">Submit</Button> */}
        </div>
        {/* <h1>3rd is{userInput[3]}</h1> */}
      </Box>
      {/* <Input /> */}
      <GridBox userInput={userInput} attempts={attempts} />
    </div>
  );
}

export default App;
