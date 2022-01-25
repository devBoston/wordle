import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",

  borderRadius: "45px",
  boxShadow: 24,
  p: 6,
};

export default function BasicModal({ solved, finalSuccess, gameOver }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, [solved, gameOver]);

  console.log("solved is", solved);
  console.log("from MODAL FINAL SUCCESS", finalSuccess);
  return (
    <div>
      {!solved ? (
        ""
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              <div
                style={{
                  color: "#538e4e",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                WINNER!
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <div
                style={{
                  color: "#538e4e",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                You guessed the word in {finalSuccess.length / 2} tries!
              </div>
            </Typography>
          </Box>
        </Modal>
      )}
      {!gameOver ? (
        ""
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              <div
                style={{
                  color: "#EF9613",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Better luck next time!
              </div>
            </Typography>
            <Typography
              component={"span"}
              id="modal-modal-description"
              sx={{ mt: 1 }}
            >
              <div
                style={{
                  color: "#EF9613",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                You ran out of guesses.
              </div>
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}
