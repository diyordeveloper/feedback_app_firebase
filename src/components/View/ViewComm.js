import { collection, getDocs } from "firebase/firestore";
import React,{useState,useEffect} from "react";
import Load from '../../load/Loader';
import {  Link,useParams } from "react-router-dom";
import {db} from '../../Firebase/Firebase'
import ComCard from "./ComCard";
import './StyleComment.scss';
import ComMessages from "./ComMessages";
function ViewComment() {
  const { id } = useParams();
  const usersCollectionRef = collection(db, "map");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoad(false);
    };
    getUsers();
  }, []);
  return (
    <>
       
      {
         load ? <Load/> : 
         <div className="commentview">
          <Link className="commentBack" to="/view">&larr; Back</Link>
          {
          data
            .filter((f) => f.id === id)
            .map((item, idx) => (
               <ComCard  item={item} idx={idx} />
            ))} 
            <ComMessages  />
        </div> 
      } 
    </>
  );
}

export default ViewComment;
