import React from "react";
import { FaPlus, FaEdit, FaTrashAlt, FaComment } from "react-icons/fa";
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
function Planned({map ,  deleteUser}) {
  return (
    <>
      <div className="block">
            <div className="statu">
              <span className="title_leng">
                Planned {"("} {map.filter((f) => f.status === "Planned").length}{" "}
                {")"}
              </span>
              <span className="bodye">Ideas prioritized for research</span>
            </div>
            {map
              .filter((v) => v.status === "Planned")
              .map((item, idx) => (
                <div className="cardd" key={idx}>
        <div className="rang" style={{ background: "#F49F85" }}></div>
        <div className="cont">
          <ul>
            <li className="name" style={{ color: "#F49F85" }}>
              <span>Planned</span>
            </li>
          </ul>
          <p className="titl">{item.name}</p>
          <span className="badyy">{item.bady}</span>
          <div className="dff">
            <button className="btnn">{item.btn}</button>
            <div className="f">
              <Link to={`/mapcomment/${item.id}`}>
                <FaComment className={"iconcom"} />
              </Link> 
            </div>
          </div>
          <div className="edited"> 

            <IconButton
              onClick={() => deleteUser(item)}
              aria-label="delete"
              size="small"
            >
              <FaTrashAlt className={"delete"} />
            </IconButton>
          </div>
        </div>
      </div>
              ))}
          </div>
    </>
  );
}

export default Planned;
