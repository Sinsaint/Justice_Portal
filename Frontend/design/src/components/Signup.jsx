import React, { useState } from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import law from "../images/law.png";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    privacyPolicy:""
  });

const handlechange = e => {
  e.preventDefault();
  const {name, value} = e.target;
  setUser({
    ...user,
    [name]: value
  })
}

  const createAccount = () => {
    const {name, email, password,privacy, reEnterPassword} = user
    if(name && email && password && privacy && (password === reEnterPassword)){
      alert("Account Created")
    } else{
      alert("Invalid Input")
    }
  }

  return (
    <div className="Container">
      <div className="row">
        <div className="col-lg-5  left-col">
          {console.log("User", user)}
          <h3 className="heading-left">"Join The Legal Community Today"</h3>
          <img className="lawimg" src={law} alt="" />
        </div>
        <div className="col-lg-7 right-col">
          <h2>Create An Account</h2>

          <div className="input-container">
            <input className="Login-email" type="text" name="name" onChange={handlechange} value={user.name} placeholder="Full Name" required
            />
            <br />
            <input className="Login-email" type="email" name="email" onChange={handlechange} value={user.email} placeholder="Email Address" required
            />
            <br />
            <input className="Login-email" type="password" name="password" onChange={handlechange} value={user.password} placeholder="Password" required
            />
            <br />
            <input className="Login-email" type="password" name="reEnterPassword" onChange={handlechange} value={user.reEnterPassword} placeholder="Re-enter Password" required
            />
          </div><br />
          <div className="signup-inline">
          <input type="checkbox" id="privacy" name="privacy" onChange={handlechange} value={true} />{" "}
          <label htmlFor="privacy" className="privacy-lenght"> I agree to the <span className="privacy-policy"><b>Terms of Services</b>{" "}</span> and{" "} <span className="privacy-policy"><b>Privacy Policy.</b> </span></label><br></br>
          </div>
          <button id="Login-btn-continue"  onClick={createAccount}>Create Account</button>
          <p>
            <b>
              Already have an account?{" "}
              <span className="privacy-policy">Log in</span>
            </b>
          </p>
          <p className="orbtw">OR</p>
          <button className="Login-btn-google social-width">
            <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
          </button>
          <button className="Login-btn-microsoft social-width">
            <FontAwesomeIcon icon={faMicrosoft} /> Sign up with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
