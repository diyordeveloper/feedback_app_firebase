import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { FaArrowLeft } from "react-icons/fa";
import { googleAuth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SignOut() {
  const [open, setOpen] = React.useState(false);

  function Modal() {
    setOpen((p) => !p);
  }
  return (
    <>
      <Button
        onClick={Modal}
        className="signout"
        variant="contained"
        color="error"
        startIcon={<FaArrowLeft className="iconexit" />}
      >
        Sign Out
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={Modal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Sign Out"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If you want to exit the chat, click exit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="signout"
            onClick={Modal}
            variant="contained"
            color="info"
          >
            Cancel
          </Button>
          <Button
            className="signout"
            onClick={() =>
              signOut(googleAuth)
                .then(() => {
                  console.log("logged out"); 
                })
                .catch((error) => {
                  console.log(error);
                })
            }
            type="submit"
            variant="contained"
            color="error"
          >
            Sign Out
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
