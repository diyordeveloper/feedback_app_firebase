import React, { useState, useEffect, useRef } from "react";
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
import "./modalstyle.scss";
import { FaWindowClose, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, googleAuth } from "../../Firebase/Firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FeedbackModal({
  OpenFeedbackModal,
  feedbackModal,
  history,
}) {
  const OpenFeedbackModall = () => {
    OpenFeedbackModal();
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [select, setSelect] = useState("");
  const dummy = useRef();
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const [messages, setMessages] = useState([]);
  const usersCollectionRef = collection(db, "feedback");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  const AddFeedBack = async (e) => {
    const usersCollectionRef = collection(db, "feedback");
    e.preventDefault();
    if (title !== "" && body !== "" && select !== "") {
      await addDoc(usersCollectionRef, {
        number: messages.length + 1,
        title,
        body,
        select,

        data:
          new Date().getDate() +
          "-day " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      });
      setTitle("");
      setBody("");
      dummy.current?.scrollIntoView({ behavior: "smooth" });
      setSelect("");
      OpenFeedbackModal();
      notify("Data saved");
    } else {
      error("Fill in the field");
    }
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={feedbackModal}
        onClose={OpenFeedbackModall}
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
              onClick={OpenFeedbackModal}
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
              form={"addfeedbackk"}
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
              onClick={OpenFeedbackModal}
              aria-label="close"
              startIcon={<FaArrowLeft className="iconmodal" />}
              endIcon={<FaWindowClose className="iconmodal" />}
            ></Button>

            <Button
              className={"exit btnsavedmodal"}
              form={"addfeedbackk"}
              type="submit"
              startIcon={<FaArrowDown className="iconmodal" />}
              variant="contained"
              color="info"
            >
              Add <span className="fednone"> Feedback</span>
            </Button>
          </Toolbar>
        </AppBar>

        <form onSubmit={AddFeedBack} id={"addfeedbackk"}>
          <Container className="SavedFeedback" style={{ marginTop: "20px" }}>
            <h2 className={"exit"} className={"modal_title"}>
              Feedback Title
            </h2>
            <p className={"exit"} className={"modal_body"}>
              Add a short, descriptive headline
            </p>
            <List style={{ marginTop: "7px" }}>
              <Divider />
              <ListItem button>
                <TextField
                  maxRows={10}
                  className={"exit"}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Title..."
                  variant="outlined"
                />
              </ListItem>
            </List>
            <h2 className={"exit"} className={"modal_title"}>
              Feedback Body
            </h2>
            <p className={"exit"} className={"modal_body"}>
              Write your opinion yourself
            </p>
            <List style={{ marginTop: "7px" }}>
              <Divider />
              <ListItem button>
                <TextField
                  className={"exit inputchik"}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Body..."
                  variant="outlined"
                />
              </ListItem>
            </List>
            <h2 className={"exit"} className={"modal_title"}>
              Feedback Category
            </h2>
            <p className={"exit"} className={"modal_body"}>
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
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
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
          </Container>
        </form>
      </Dialog>
    </div>
  );
}
