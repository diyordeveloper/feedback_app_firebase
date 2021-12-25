import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import Kosmo from "../../img/kosmo.jpg";
import {
  addDoc,
  doc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, googleAuth } from "../../Firebase/Firebase";
import { useParams } from "react-router-dom";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import IconButton from "@mui/material/IconButton";
import { FaPlus, FaEdit, FaTrashAlt, FaComment } from "react-icons/fa";
import moment from "moment";
function ComMessages() {
  const dummy = useRef();
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const [msg, setMsg] = useState([]);
  const [text, setText] = useState("");
  const { id } = useParams();
  const ref = collection(db, "map");
  const usersCollectionRef = collection(db, "map", id, "comment"); 
  const [img, setImg] = useState("");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMsg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  
  const SendComment = async (e) => {
    const {
      uid,
      photoURL,
      displayName,
      email,
    } = googleAuth.currentUser;
    e.preventDefault(); 
    if (text !== "") {
      await addDoc(collection(db, "map", id, "comment"), {
        timestamp:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          " " +
          new Date().getDate() +
          "-day" +
          " " +
          new Date().getFullYear() +
          "-year",
        text,
        uid,
        photoURL,
        displayName,
        email,
      });
      setText("");
      notify("Comment saved");
      dummy.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      error("Fill in the field");
    }
  };

  const deleteUser = async (idd) => {
    if (window.confirm("Delete data ? ")) {
      const userDoc = doc(db, "map", id, "comment", idd);
      await deleteDoc(userDoc);
      notify("Deleted");
    }
  };
  // const Edited = async (idb) => {
  //   const UserDoc = doc(db, "map", id, "comment", idb);
  //   const name = prompt("Edited");
  //   const payload = { name };
  //   await updateDoc(UserDoc, payload);
  // };  
  return (
    <>
      <div className="commentt">
        <span className="com_len">{msg.length} Comments</span>

        {msg.map((i, idx) => (
          <>
            <div className="chiziq"></div>
            <div   className={`kard  ${i.uid === googleAuth.currentUser.uid ? 'sent' : 'received'} `} key={idx}>
              <div className="row_img">
                <div className="fluid">
                  <img src={i.photoURL || Kosmo} />
                </div>
              </div>
              <div className="row_text">
                <div className="profil">
                  <div className="email">
                    <span className={"displayname"}>{i.displayName}</span>
                    <span className="gm">{i.email}</span>
                  </div>
                  <div className="reply">
                    <span className="rep">Reply</span>{" "}
                    <span ref={dummy}></span>
                    <div className="edited">
                      {/* <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => Edited(i.id)}
                      >
                        <FaEdit className={"edit"} />
                      </IconButton> */}

                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => deleteUser(i.id)}
                      >
                        <FaTrashAlt className={"delete"} />
                      </IconButton>
                    </div>{" "}
                  </div>
                </div>
                <div className="text">
                  <span className="textvalue">{i.text}</span>
                </div>
              </div>
            </div>
            <div className="time"><span className="dat">{i.timestamp}</span></div>
           
          </>
        ))}
      </div>
      <div className="sendcomment">
        <span className="title_span">Add Comment</span>
        <form className="form" onSubmit={SendComment} id={"formsend"}>
          <textarea
            maxLength={250}
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="textarea"
            placeholder={"Type your comment here"}
            className={"textaera"}
          ></textarea>
        </form>
        <div className="d_flex">
          <span className="chearts">Must not exceed 250 characters</span>
          <span className="chearts">{text.length}</span>
          <Button
            className="sendBtn"
            disabled={!text}
            form={"formsend"}
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<FaTelegramPlane />}
          >
            Post Comment
          </Button>
        </div>
      </div>
    </>
  );
}

export default ComMessages;