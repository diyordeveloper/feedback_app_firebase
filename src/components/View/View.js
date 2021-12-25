import React, { useState, useEffect } from "react";
import "./View.scss";
import ViewkModal from "./ViewModal";
import Loadd from "../../load/Loader";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import Card from "./Card";
function View() {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  function ViewtoggleModal() {
    setModal(!modal);
  }
  function EditedtoggleModal() {
    setEditModal(!editModal);
  }
  const [loadd, setLoadd] = useState(true);
  const [map, setMap] = useState([]);
  const usersCollectionRef = collection(db, "map");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMap(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoadd(false);
    };
    getUsers();
  }, []);

  return (
    <>
      {
      loadd ?  <Loadd /> : 
        <Card
          editModal={editModal}
          EditedtoggleModal={EditedtoggleModal} 
          ViewtoggleModal={ViewtoggleModal}
          modal={modal}
          map={map}
        />
      }
    </>
  );
}

export default View;
