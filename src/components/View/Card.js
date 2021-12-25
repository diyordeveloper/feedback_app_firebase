import { Button, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaComment } from "react-icons/fa";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";
import ViewkModal from "./ViewModal";
import EditedModal from "./EditedModal";
import IconButton from "@mui/material/IconButton";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,setDoc
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import Planned from "./pages/Planned";
import Progress from "./pages/Progress";
import Live from "./pages/Live";
function Card({
  map,
  ViewtoggleModal,
  modal,
  editModal,
  EditedtoggleModal,
  setMap,
}) {
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const [name, setName] = useState("");
  const [bady, setBady] = useState("");
  const [btn, setBtn] = useState("");
  const [status, setStatus] = useState("");
  const [select, setSelect] = useState("");
   

  const deleteUser = async (item) => {
    if (window.confirm("Delete data ? ")) {
      const userDoc = doc(db, "map", item.id);
      await deleteDoc(userDoc);
      notify("Deleted");
    }
  }; 
  // const Edited = async (item) => {
  //   setSelect(item)
  //   EditedtoggleModal(); 
  // }; 
  return (                                                                                  
    <>          
      <div className={'containt'}  >     
        <nav className="navv">
          <div className="d1">
            <Link className={"link"} to="/">
              &larr; Go Back
            </Link>
            <span className="nav_title">Roadmap</span>
          </div>
          <div className="d2">
            <Button
            className="navaddbtn"
              type="button"
              variant="contained"
              color="secondary"
              onClick={ViewtoggleModal}
            >
              <FaPlus style={{ marginRight: "7px" }} /> Add Feedback
            </Button>
          </div>
        </nav>
        <div className="content  contentnone ">
          <Planned map={map}  deleteUser={deleteUser} />
          <Progress map={map}  deleteUser={deleteUser} />
          <Live map={map}  deleteUser={deleteUser} />
        </div>
        <div className="navlink">
          <div className="navbarr ">
            <div className="lin">
              <NavLink
                to="/view/planned"
                className={"planned"}
                activeClassName="active_planned"
              >
                Planned {"("} {" "}
                {map.filter((f) => f.status === "Planned").length} {")"}{" "}
              </NavLink>
            </div>

            <div className="lin">
              <NavLink
                to="/view/progress"
                className={"progress"}
                activeClassName="active_progress"
              >
                In-Progress {"("} {" "}
                {map.filter((f) => f.status === "In-Progress").length} {")"}{" "}
              </NavLink>
            </div>

            <div className="lin">
              <NavLink
                to="/view/live"
                className={"live"}
                activeClassName="active_live"
              >
                Live {"("} {" "}
                {map.filter((f) => f.status === "Live").length} {")"}{" "}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="contentblock">
          <div className="content ">
            <Switch>
              <Route path="/view/planned">
                <Planned map={map}  deleteUser={deleteUser} />
              </Route>
              <Route path="/view/progress">
                <Progress map={map}  deleteUser={deleteUser} />
              </Route>
              <Route path="/view/live">
                <Live map={map}  deleteUser={deleteUser} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <ViewkModal
        name={name}
        setName={setName}
        bady={bady}
        setBady={setBady}
        btn={btn}
        setBtn={setBtn}
        status={status}
        setStatus={setStatus}
        ViewtoggleModal={ViewtoggleModal}
        modal={modal}
      />
      <EditedModal
      name={name} 
      bady={bady} 
      btn={btn} 
      status={status}  
      
        EditedtoggleModal={EditedtoggleModal}
        editModal={editModal}
      />
    </>
  );
}

export default Card;
