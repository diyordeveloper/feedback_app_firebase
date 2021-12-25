import React from "react";
import Message from "./Message";
function Chat({ i, index }) {
  return (
    <>
      <Message i={i} index={index} />
    </>
  );
}

export default Chat;
