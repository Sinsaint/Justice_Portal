import React, {useState} from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import {faCircleExclamation} from "@fortawesome/free-brands-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import law from "../images/law.png";

const ForgotPassword = () => {

    const [user, setUser] = useState({
      email: "",
    });
  
  const handlechange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  
  const Submit = () => {
      const {email} = user
      if(email){
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
          {/* <h3 className="login-heading-left">"Join The Legal Community Today"</h3> */}
          <img className="forgot-lawimg" src={law} alt="" />
        </div>
        <div className="col-lg-7 right-col">
          <div className="iconCircle">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              size="4x"
              className="ExclamationCircle"
            />
          </div>
        <div className="heading-para-forgot-password">
          <h2>Forgot Password</h2>
          <p>Enter your email and we'll send you an OTP to reset your password</p>
          </div>
          <div className="input-container">
            {/* <label htmlFor="Email">Email</label> */}
            <input
               className="Login-email"
              type="email"
              name="email"
              onClick={handlechange}
              placeholder="Email Address" required/>
          </div>
          {/* <input type="checkbox" id="privacy" name="privacy" value="agree"/>
  <label for="privacy"> I agree to the <span className="privacy-policy"><b>Terms of Services</b> </span>and <span className="privacy-policy"><b>Privacy Policy.</b></span></label><br></br> */}
          <button id="Login-btn-continue" onClick={Submit}>Submit</button>
          {/* <p>
           <b>Back to Login<span className="privacy-policy">Create New Account</span></b>
          </p> */}
          <p className="Forget-pass-login"> Back to Login</p>
          {/* <button className="Login-btn-google social-width">
            <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
          </button>
          <button className="Login-btn-microsoft social-width">
            <FontAwesomeIcon icon={faMicrosoft} /> Sign up with Microsoft
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
