import './App.css';
import './images/law.png'
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
// import {Router, RouterProvider, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Login/>
      <Signup/>
      <ForgotPassword/>
    </div>
  );
}

export default App;
