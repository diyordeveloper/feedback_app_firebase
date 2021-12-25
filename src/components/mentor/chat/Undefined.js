import React from "react";
import Error from "../../../img/NotDefaind.png";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa";
import "./Undefined.scss";
function Undefined({ OpenFeedbackModal, feedbackModal }) {
  return (
    <>
      <div className="undefined">
        <img className={"gandonkalla"} src={Error} alt="Error!" />
        <span className="h1">There is no feedback yet.</span>
        <span className="p">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </span>
        <Button
          variant="contained"
          className={"btnaddd"}
          onClick={OpenFeedbackModal}
          color="secondary"
        >
          <FaPlus style={{ marginRight: "7px" }} /> Add Feedback
        </Button>
      </div>
    </>
  );
}

export default Undefined;
