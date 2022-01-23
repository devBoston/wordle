import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";
function Input() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  console.log("userInput", userInput);
  return (
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
          //   error
          //   label="Error"
          defaultValue=""
          placeholder="guess here!"
          //   helperText="Incorrect entry."
          variant="standard"
          inputProps={{ maxLength: 5 }}
          onChange={handleChange}
        />
      </div>
      <h1>hi{userInput}</h1>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));
export default Input;
