import React, { useRef } from "react";
import { useUserContext } from "../../Context"; 
import "../../style/Input.scss";
import { toast } from "react-toastify";
const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword ,loading} = useUserContext();
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if(email !== '' && password !== '' ){
      if (email && password) signInUser(email, password);
      notify("You entered");
    }else{  
      error("Fill in the field");
    }
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="formsignIn">
      <span className="logologin"> Login </span>
      <form onSubmit={onSubmit}  >
      <div class="roww">
        <span>
          <input 
          ref={emailRef}
            class="gate"
            defaultValue={"@gmail.com"}
            id="class"
            type="text"
            placeholder="Email"
          />
          <label for="class">Email</label>
        </span>
        <span>
          <input ref={psdRef} class="swing" id="artist" type="text" placeholder="Password" />
          <label for="artist">Password</label>
        </span>
      <button class="btn_login" type="submit">{loading ? "Uploading..." : "Log In"}</button> 
      </div> 
      </form>
    </div>
  );
};

export default Signin;
