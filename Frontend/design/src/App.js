import './App.css';
import './images/law.png';
import React ,{useState}from 'react';
// import {Route, Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

const App=()=> {
  const[activeForm,setActiveForm]=useState(null);
  return (
    <div className="App">
        {/* <Login/>
      <Signup/>
      <ForgotPassword/> */}
      
        

         {/* Buttons to toggle the forms */}
      <button onClick={() => setActiveForm('signup')}>Sign Up</button>
      <button onClick={() => setActiveForm('login')}>Login</button>
      {/* <button onClick={() => setActiveForm('forgotPassword')}>Forgot Password</button> */}

      {/* Displaying the forms based on the activeForm state */}
      {activeForm === 'signup' && <Signup/>}
      {activeForm === 'login' && <Login />}
      {/* {activeForm === 'forgotPassword' && <ForgotPassword />} */}


    </div>
  );
}

export default App;
