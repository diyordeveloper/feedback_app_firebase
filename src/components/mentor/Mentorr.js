import React, { useState, useEffect } from "react";
import LogoLamPochka from "../../img/LogoLampochka.png";
import Section from "../mentor/Section";
import Button from "@mui/material/Button";
import { FaPlus, FaBars, FaTimes } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Loading from "../../load/Loading";
import Undefined from "./chat/Undefined";
import FeedbackModal from "../Modal/FeedbackModal";
import SignOut from "../signOut/SignOut";
import Chat from "./chat/Chat";
import { db } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Modal from '../../Modal';
function Mentorr() {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [load, setLoad] = useState(true);
  const [qidir, setQidir] = useState("");
  function OpenFeedbackModal() {
    setFeedbackModal((p) => !p);
  }
  const [messages, setMessages] = useState([]);
  const usersCollectionRef = collection(db, "feedback");
  const usersCollectionRef2 = collection(db, "map");
  const [map, setMap] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoad(false);
    };
    getUsers();

    const getUsers2 = async () => {
      const dataa = await getDocs(usersCollectionRef2);
      setMap(dataa.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers2();
  }, []);
  function handleCkeck() {
    setClick(!click);
  }
  return (
    <>
    <Modal/>
      {
        <>
          {
            load ? (
              <Loading />
            ) :
            <div className="container-fluid">
              <div className="container">
                <div className="navbar">
                  <div className="fixed">
                    <div className="logo">
                      <span className="my_text">Frontend Mentor</span>
                      <span className="text_title">Feedback Board</span>
                    </div>
                    <IconButton
                      aria-label="fingerprint"
                      className="click"
                      onClick={handleCkeck}
                    >
                      {click ? <FaTimes /> : <FaBars />}
                    </IconButton>
                  </div>
                  <div className={click ? "nav_menu active " : "nav_menu"}>
                    <div className="dizayn_group">
                      <span className={"filterspan"}>Seek feedback</span>
                      <TextField
                        type="search"
                        className={"input"}
                        onChange={(e) => setQidir(e.target.value)}
                        label="Title search..."
                      />
                      <FormControl className={"Select"} fullWidth>
                        <InputLabel
                          className={"menuitem"}
                          id="demo-simple-select-label"
                        >
                          Feedback filter
                        </InputLabel>
                        <Select
                          onChange={(e) => setQidir(e.target.value)}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Feedback filter"
                          className={"bor"}
                        >
                          <MenuItem className={"menuitem"} value="">
                            {" "}
                            All{" "}
                          </MenuItem>
                          <MenuItem className={"menuitem"} value="Feature">
                            {" "}
                            Feature{" "}
                          </MenuItem>
                          <MenuItem className={"menuitem"} value="UI">
                            UI{" "}
                          </MenuItem>
                          <MenuItem className={"menuitem"} value="UX">
                            UX{" "}
                          </MenuItem>
                          <MenuItem className={"menuitem"} value="Enhancement">
                            Enhancement{" "}
                          </MenuItem>
                          <MenuItem className={"menuitem"} value="Bug">
                            {" "}
                            Bug{" "}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="road_map">
                      <div className="d_f">
                        <span>Roadmap</span>
                        <Link to="/view">View</Link>
                      </div>
                      <ul>
                        <li className={"li1"}>Planned</li>
                        <span className={"number1"}>
                          {map.filter((ff) => ff.status === "Planned").length}
                        </span>
                      </ul>
                      <ul>
                        <li className={"li2"}>In-Progress</li>
                        <span className={"number2"}>
                          {
                            map.filter((ff) => ff.status === "In-Progress")
                              .length
                          }
                        </span>
                      </ul>
                      <ul>
                        <li className={"li3"}>Live</li>
                        <span className={"number3"}>
                          {map.filter((ff) => ff.status === "Live").length}
                        </span>
                      </ul>
                    </div>
                    <div className="sign_out">
                      <Link to="/design">
                        <Button
                          className="signout"
                          color="primary"
                          variant="contained"
                        >
                          DIZAYN SYSTEM
                        </Button>
                      </Link>
                    </div>
                    <div className="sign_out">
                      <SignOut />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="fron_end_mentor">
                    <span className="my_text">Frontend Mentor</span>
                    <span className="text_title">Feedback Board</span>
                  </div>
                  <div className="dizayn_group">
                    <span className={"filterspan"}>Seek feedback</span>
                    <TextField
                      type="search"
                      className={"input"}
                      onChange={(e) => setQidir(e.target.value)}
                      fullWidth
                      label="Title search..."
                      id="fullWidth"
                    />
                    <FormControl className={"Select"} fullWidth>
                      <InputLabel
                        className={"menuitem"}
                        id="demo-simple-select-label"
                      >
                        Feedback filter
                      </InputLabel>
                      <Select
                        onChange={(e) => setQidir(e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Feedback filter"
                        className={"bor"}
                      >
                        <MenuItem className={"menuitem"} value="">
                          {" "}
                          All{" "}
                        </MenuItem>
                        <MenuItem className={"menuitem"} value="Feature">
                          {" "}
                          Feature{" "}
                        </MenuItem>
                        <MenuItem className={"menuitem"} value="UI">
                          UI{" "}
                        </MenuItem>
                        <MenuItem className={"menuitem"} value="UX">
                          UX{" "}
                        </MenuItem>
                        <MenuItem className={"menuitem"} value="Enhancement">
                          Enhancement{" "}
                        </MenuItem>
                        <MenuItem className={"menuitem"} value="Bug">
                          {" "}
                          Bug{" "}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="road_map">
                    <div className="d_f">
                      <span>Roadmap</span>
                      <Link to="/view">View</Link>
                    </div>
                    <ul>
                      <li className={"li1"}>Planned</li>
                      <span className={"number1"}>
                        {map.filter((ff) => ff.status === "Planned").length}
                      </span>
                    </ul>
                    <ul>
                      <li className={"li2"}>In-Progress</li>
                      <span className={"number2"}>
                        {map.filter((ff) => ff.status === "In-Progress").length}
                      </span>
                    </ul>
                    <ul>
                      <li className={"li3"}>Live</li>
                      <span className={"number3"}>
                        {map.filter((ff) => ff.status === "Live").length}
                      </span>
                    </ul>
                  </div>
                  <div className="sign_out">
                    <Link to="/design">
                      <Button
                        className="signout"
                        color="primary"
                        variant="contained"
                      >
                        DIZAYN SYSTEM
                      </Button>
                    </Link>
                  </div>
                  <div className="sign_out">
                    <SignOut />
                  </div>
                </div>
                <div className="col-7">
                  <div className="nav">
                    <div className="div1">
                      <img src={LogoLamPochka} alt="LogoLamPochka" />
                      <span className={"num"}>
                        {messages.length} Suggestions
                      </span>
                    </div>
                    <div className="div2">
                      <Button
                        className={"addbtn"}
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={OpenFeedbackModal}
                      >
                        <FaPlus className="addplus" /> Add
                        <span className="addfed"> Feedback</span>
                      </Button>
                    </div>
                  </div>
                  <div className="kard">
                    <div className="chat">
                      {messages.length === 0 ? (
                        <Undefined
                          OpenFeedbackModal={OpenFeedbackModal}
                          feedbackModal={feedbackModal}
                        />
                      ) : (
                        <>
                          {messages
                            .filter((itm) => {
                              if (qidir === "") {
                                return itm;
                              } else if (
                                itm.select
                                  .toUpperCase()
                                  .includes(qidir.toUpperCase())
                              ) {
                                return itm;
                              } else if (
                                itm.title
                                  .toUpperCase()
                                  .includes(qidir.toUpperCase())
                              ) {
                                return itm;
                              }
                            })
                            .map((i, index) => (
                              <Chat i={i} index={index} />
                            ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          <FeedbackModal
            OpenFeedbackModal={OpenFeedbackModal}
            feedbackModal={feedbackModal}
          />
        </>
      }
    </>
  );
}

export default Mentorr;
