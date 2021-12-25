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
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { EditUser } from "../design/AA";
import "./ModalStyle.scss";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ViewkModal({
  editModal,
  EditedtoggleModal,  
}) {
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  //   const AddFeedBack = async (e) => {
  //     const usersCollectionRef = collection(db, "map");
  //     e.preventDefault();
  //     // const {} = auth.currentUser;

  //     if (name !== "" && bady !== "" && btn !== "" && status !== "") {
  //       await addDoc(usersCollectionRef, {
  //         id: map.length + 1,
  //         name,
  //         bady,
  //         btn,
  //         status,
  //         data:
  //           new Date().getDate() +
  //           "-day " +
  //           new Date().getHours() +
  //           ":" +
  //           new Date().getMinutes(),
  //       });
  //       setName("");
  //       setBady("");
  //       setBtn("");
  //       setStatus("");
  //       EditedtoggleModal();
  //       notify("Data Edited");
  //     } else {
  //       error("Fill in the field");
  //     }
  //   };

  const usersCollectionRef = collection(db, "map");
  const [map, setMap] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMap(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const EditFeedBack  = async (e)=>{
    e.preventDefault(); 
    EditedtoggleModal()
    const a = e.target[0].value
    console.log(a);
    // map.map((item, index) => {
    //   if (item.id === select.id) {
    //     item.name = a; 
    //   }
    // });
    // await updateDoc(doc(db, "tasks", task.id), { completed: !task.completed });
     
  }
  return (
    <div>
      <Dialog
        fullScreen
        open={editModal}
        onClose={EditedtoggleModal}
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
              onClick={EditedtoggleModal}
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
              Edited
            </Typography>
            <Button
              className={"exit  "}
              form={"addfeedbackkk12"}
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
          <h3 className="titlechik">Edited</h3>
          <Toolbar className={"tolbar"}>
            <Button
              className={"exit btnexitmodal"}
              edge="start"
              color="error"
              variant="contained"
              onClick={EditedtoggleModal}
              aria-label="close"
              startIcon={<FaArrowLeft className="iconmodal" />}
              endIcon={<FaWindowClose className="iconmodal" />}
            ></Button>

            <Button
              className={"exit btnsavedmodal"}
              form={"addfeedbackkk12"}
              type="submit"
              startIcon={<FaArrowDown className="iconmodal" />}
              variant="contained"
              color="info"
            >
              Add <span className="fednone"> Feedback</span>
            </Button>
          </Toolbar>
        </AppBar>

        <form onSubmit={EditFeedBack} id={"addfeedbackkk12"}>
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
                  // defaultValue={select.name} 
                    // onChange={(e) => setName(e.target.value)}
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
                  // defaultValue={select.bady}
                    // onChange={(e) => setBady2(e.target.value)}
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
                    // defaultValue={select.btn}
                    // onChange={(e) => setBtn2(e.target.value)}
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
                    // defaultValue={select.status} 
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
