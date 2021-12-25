import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import { FaPlus, FaEdit, FaTrashAlt, FaComment } from "react-icons/fa"; 
import { db } from "../../Firebase/Firebase"; 
import {Link } from "react-router-dom";
function MessCard({ i, index }) {
  // const navigate = useNavigate();
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
   
  const deleteUser = async (id) => {
    if (window.confirm("Delete data ? ")) {
      const userDoc = doc(db, "feedback", id);
      await deleteDoc(userDoc);
      notify("Deleted");
    }
    // navigate("/");
  };

  return (
    <>
      <div className={"cardd"} key={index}>
      <div className="d1">
            <span className={"index"}>{i.number}</span>
          </div>
        <div className="d2">
          <span className={"title"}>{i.title}</span>
          <span className={"body"}>{i.body}</span>
          <button className={"btn"}>{i.select}</button>
        </div>

        <div className="edited">
           

          <IconButton
            onClick={() => deleteUser(i.id)}
            aria-label="delete"
            size="small"
          >
            <FaTrashAlt className={"delete"} />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default MessCard;
