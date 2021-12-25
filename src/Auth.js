import React, { useState } from "react";
import Signin from "./components/signIn/SignIn";
import Signup from "./components/signIn/SignUp";
import Button from "@mui/material/Button";
import {FaGoogle} from 'react-icons/fa'
import Alert from '@mui/material/Alert';
import "./style/Form.scss";
import Email from './Email' 
import { useUserContext } from "./Context";
const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const { signInWithGoogle, signInWithGithub,error } = useUserContext();
  return (
    <>
    <Email/>
      <div className="glavni">
        <div className="fixed">
          <span className="fm">Frontend Mentor</span>
          <div className="div" onClick={toggleIndex}>
          {!index ? <span className="login">Log In</span> : <span className="signin">Sign In</span>}
          </div>
        </div>
        <div className="ModalFullWidth">
          
      <p className="error"> {error} </p>
        <div className="registerModal">
          {!index ? <Signin /> : <Signup />}
          <Button
            type="submit"
            onClick={signInWithGoogle}
            variant="contained"
            color="primary"
            startIcon={ <FaGoogle/>}
            fullWidth
            className={'btnGoogle'}
          >
            Continue with Google
          </Button>
          <p className="newUser" onClick={toggleIndex}>
            {!index ? "New user? Click here " : "Already have an acount?"}
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Auth;
