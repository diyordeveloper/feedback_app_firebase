import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton"; 
import Typography from "@mui/material/Typography";
import { FaWindowClose } from "react-icons/fa";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <FaWindowClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);
 
  const toggle = () => {
    setOpen(!open);
  }; 

  return (
    <> 
      <BootstrapDialog
        onClose={toggle} 
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={toggle}
        >
        The concept of email
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          You do not have to sign in with a registered email address from Google
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" color="primary"  onClick={toggle}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
