import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import { FaWindowClose, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import "./ModalStyle.scss";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ViewkModal({
  modal,
  ViewtoggleModal,
  name,
  setName,
  bady,
  setBady,
  btn,
  setBtn,
  status,
  setStatus,
}) {
  const [map, setMap] = useState([]);
  const usersCollectionRef = collection(db, "map");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMap(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const AddFeedBack = async (e) => {
    const usersCollectionRef = collection(db, "map");
    e.preventDefault();
    // const {} = auth.currentUser;

    if (name !== "" && bady !== "" && btn !== "" && status !== "") {
      await addDoc(usersCollectionRef, {
        number: map.length + 1,
        name,
        bady,
        btn,
        status,
        data:
          new Date().getDate() +
          "-day " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      });
      setName("");
      setBady("");
      setBtn("");
      setStatus("");
      ViewtoggleModal();
      notify("Data saved");
    } else {
      error("Fill in the field");
    }
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={modal}
        onClose={ViewtoggleModal}
        TransitionComponent={Transition}
      >
        <AppBar
          className="Appbarmodal"
          sx={{ position: "relative" }}
          color="secondary"
        >
          <Toolbar>
            <Button
              className={"exit  "}
              edge="start"
              color="error"
              variant="contained"
              onClick={ViewtoggleModal}
              aria-label="close"
              startIcon={<FaArrowLeft className=" " />}
              endIcon={<FaWindowClose className=" " />}
            ></Button>
            <Typography
              style={{ textAlign: "center" }}
              sx={{ ml: 0, flex: 1 }}
              variant="h6"
              component="div"
              className={"exit  "}
            >
              Create New Feedback
            </Typography>
            <Button
              className={"exit  "}
              form={"addfeedbackkk"}
              type="submit"
              startIcon={<FaArrowDown className="iconmodal" />}
              variant="contained"
              color="info"
            >
              Add <span className="fednone"> Feedback</span>
            </Button>
          </Toolbar>
        </AppBar>

        <AppBar
          className="ModalAppBar"
          sx={{ position: "relative" }}
          color="secondary"
        >
          <h3 className="titlechik">Create New Feedback</h3>
          <Toolbar className={"tolbar"}>
            <Button
              className={"exit btnexitmodal"}
              edge="start"
              color="error"
              variant="contained"
              onClick={ViewtoggleModal}
              aria-label="close"
              startIcon={<FaArrowLeft className="iconmodal" />}
              endIcon={<FaWindowClose className="iconmodal" />}
            ></Button>

            <Button
              className={"exit btnsavedmodal"}
              form={"addfeedbackkk"}
              type="submit"
              startIcon={<FaArrowDown className="iconmodal" />}
              variant="contained"
              color="info"
            >
              Add <span className="fednone"> Feedback</span>
            </Button>
          </Toolbar>
        </AppBar>

        <form onSubmit={AddFeedBack} id={"addfeedbackkk"}>
          <Container className="SavedFeedback" style={{ marginTop: "20px" }}>
            <h2
              className={"exit"}
              className={"modaltitle"}
              className={"modal_title"}
            >
              Feedback Title
            </h2>
            <p
              className={"exit"}
              className={"modalbody"}
              className={"modal_body"}
            >
              Add a short, descriptive headline
            </p>
            <List style={{ marginTop: "7px" }}>
              <Divider />
              <ListItem button>
                <TextField
                  className={"exit"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Title..."
                  variant="outlined"
                />
              </ListItem>
            </List>
            <h2
              className={"exit"}
              className={"modaltitle"}
              className={"modal_title"}
            >
              Feedback Body
            </h2>
            <p
              className={"exit"}
              className={"modalbody"}
              className={"modal_body"}
            >
              Write your opinion yourself
            </p>
            <List style={{ marginTop: "7px" }}>
              <Divider />
              <ListItem button>
                <TextField
                  className={"exit"}
                  value={bady}
                  onChange={(e) => setBady(e.target.value)}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Body..."
                  variant="outlined"
                />
              </ListItem>
            </List>
            <h2
              className={"exit"}
              className={"modaltitle"}
              className={"modal_title"}
            >
              Feedback Category
            </h2>
            <p
              className={"exit"}
              className={"modalbody"}
              className={"modal_body"}
            >
              Category Choose a category for your feedback{" "}
            </p>
            <List style={{ marginTop: "7px" }}>
              <Divider />
              <ListItem button>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Feedback
                  </InputLabel>
                  <Select
                    className={"exit"}
                    value={btn}
                    onChange={(e) => setBtn(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Feedback"
                  >
                    <MenuItem value={"Feature"}>Feature</MenuItem>
                    <MenuItem value={"UI"}>UI</MenuItem>
                    <MenuItem value={"UX"}>UX</MenuItem>
                    <MenuItem value={"Enhancement"}>Enhancement</MenuItem>
                    <MenuItem value={"Bug"}>Bug</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </List>
            <h2
              className={"exit"}
              className={"modaltitle"}
              className={"modal_title"}
            >
              Status
            </h2>
            <p
              className={"exit"}
              className={"modalbody"}
              className={"modal_body"}
            >
              Status selection{" "}
            </p>
            <List style={{ marginTop: "7px" }}>
              <Divider />
              <ListItem button>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    className={"exit"}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                  >
                    <MenuItem value={"Planned"}>Planned</MenuItem>
                    <MenuItem value={"In-Progress"}>In-Progress</MenuItem>
                    <MenuItem value={"Live"}>Live</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </List>
            <br />
            <br />
            <br />
          </Container>
        </form>
      </Dialog>
    </div>
  );
}
