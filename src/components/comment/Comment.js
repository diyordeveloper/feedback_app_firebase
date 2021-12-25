import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { Link, useParams } from "react-router-dom";
import Load from "../../load/Loader";
import "./Comment.scss";
import MessCard from "./MessCard";
import SendMess from "./SendMess";
function Comment() {
  const usersCollectionRef = collection(db, "feedback");
  const [messages, setMessages] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoad(false);
    };
    getUsers();
  }, []);
  const { id } = useParams();

  return (
    <>
    {
      load ?   <Load /> : 
      <>
      <div className="containern">
          <Link className="commentBack" to="/">&larr; Back</Link>
          {
          messages
            .filter((f) => f.id === id)
            .map((i, index) => ( 
                <MessCard i={i} index={index} /> 
            ))}
            <SendMess    />
            </div>
        </>
      }
      </>
  );
}

export default Comment;
