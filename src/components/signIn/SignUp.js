import React, { useRef } from "react";
import { useUserContext } from "../../Context"; 
import '../../style/Input.scss';
import { toast } from "react-toastify";
const SignUp = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser,loading } = useUserContext();
  const notify = (a) => {
    toast.success(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const error = (a) => {
    toast.error(a, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value; 
    if(email !== '' && password !== '' && name !== ''){
      if (email && password && name) registerUser(email, password, name);
      notify("You passed successfully");
    }else{  
      error("Fill in the field");
    }
    
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
      <span className="logologin"> New User </span>
      <form  onSubmit={onSubmit}   >
      <div class="roww">
  <span>
    <input class="basic-slide" ref={nameRef}  id="name" type="text" placeholder="Your best name" /><label for="name">Name</label>
  </span>
  <span>
    <input class="basic-slide"   ref={emailRef} id="email" type="email" placeholder="Your favorite email" /><label for="email">Email</label>
  </span>
  <span>
    <input class="basic-slide" ref={psdRef} id="phone" type="password" placeholder="You can trust us" /><label for="phone">Password</label>
  </span>
</div>
<button class="btn_sign_in" type="submit">{loading ? "Uploading..." : "Sign In"}</button>   
      </form>
    </div>
  );
};

export default SignUp;
