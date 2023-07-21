import React, {useState} from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-brands-svg-icons";
import law from "../images/law.png";
// import { Link } from 'react-router-dom';


const Signup = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const handlechange = e => {
  e.preventDefault();
  const {name, value} = e.target;
  setUser({
    ...user,
    [name]: value
  })
}

const Login = () => {
    const {email, password} = user
    if(email && password){
      alert("Account Created")
    } else{
      alert("Invalid Input")
    }
  }

  return (
    <div className="Container">


{console.log(user)}


      <div className="row">
        <div className="col-lg-5  left-col">
          <img className="login-lawimg" src={law} alt="" />
        </div>
        <div className="col-lg-7 right-col">

          <h2>Login To JusticePortal</h2>
          <div className="input-container">

            <input
              className="Login-email"
              type="email"
              name="email" onChange={handlechange} value={user.email} 
              placeholder="Email Address" required
            />
            <br />

            <input
              className="Login-email"
              type="password"
              name="password" onChange={handlechange} value={user.password} 
              placeholder="Password" required
            />
            <p className="Forgot_pass">Forgot Password ?</p>
           </div>
          <button id="Login-btn-continue" onClick={Login}>Login</button>
          <p>
           <b>Don't have Account? <span className="privacy-policy">Create New Account</span></b>
          </p>
          <p className="orbtw">OR</p>
          <button className="Login-btn-google social-width">
            <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
          </button>
          <button className="Login-btn-microsoft social-width">
            <FontAwesomeIcon icon={faMicrosoft} /> Sign up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
