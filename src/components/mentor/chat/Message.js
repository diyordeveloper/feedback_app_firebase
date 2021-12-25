import React from "react";
import { FaComment } from "react-icons/fa"; 
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase"; 
import { Link,  useParams } from "react-router-dom";
function Message({ i, index }) {
  const [msg, setMsg] = React.useState([]);
  const usersCollectionRef = collection(db,"feedback", i.id, "comment");
  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setMsg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <>
      <>
        <div className={"card"} key={index}>
          <div className="d1">
            <span className={"index"}>{i.number}</span>
          </div>
          <div className="d2">
            <span className={"title"}>{i.title}</span>
            <div className="w">
            <span className={"body"}>{i.body}</span>
            </div>
            <button className={"btn"}>{i.select}</button>
          </div>
          <div className="d3">
            <Link to={`/comment/${i.id}`}>
              <FaComment className={"iconcom"} />
            </Link>
            <span className={"len"}>{msg.length}</span>
          </div>
        </div>
      </>
    </>
  );
}

export default Message;
