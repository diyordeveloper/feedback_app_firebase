import React from 'react'
import { FaPlus, FaEdit, FaTrashAlt, FaComment } from "react-icons/fa";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import {Link } from "react-router-dom";
import {db} from '../../Firebase/Firebase'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
function ComCard({item,idx}) {
    const Edited = async (item, id) => {
        const UserDoc = doc(db, "feedback", id);
      };
      const deleteUser = async (id) => {
        if (window.confirm("Delete data ? ")) {
          const userDoc = doc(db, "feedback", id);
          await deleteDoc(userDoc); 
        } 
      };
       
    return (
        <>
             <div className="block">
                <div className="cardd" key={idx}> 
                  <p className="titl">{item.name}</p>
                  <span className="badyy">{item.bady}</span>
                  <div className="dff">
                    <button className="btnn">{item.btn}</button>  
                  </div> 
                </div> 
              </div> 
              
        </>
    )
}

export default ComCard
