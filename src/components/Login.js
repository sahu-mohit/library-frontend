import React, {useState } from "react";
import { useNavigate } from 'react-router-dom';
import RegistrationCall from "../service/RegistrationCall";
import "../style/Login.css"

export default function Login() {
  const [emailid, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [checkout, setCheckout] = useState(false);
  const navigate = useNavigate();

  const logInEmployee = () => {
    const emp = {
      emailid: emailid,
      password: password,
      checkout: checkout,
    };
    RegistrationCall.doLogin(emp)
      .then((response) => {
        console.log(response);
        if (response.data === "success") {
          navigate("/registration");
        } else {
          console.log("Error");
          document.getElementById("msg").innerHTML = "Invalid Login! Please try again!";
          // alert("Invalid Login! Please try again!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // console.log("Login page");
    <div className="login">
      <h2 className="active"> sign in </h2>
      <h2 className="nonactive"> sign up </h2>
      <form>
        
        <input type="text" className="text" onChange={e => setEmailID(e.target.value)} value={emailid}/>
        <span>Email Id</span>
        <br />
        <p id="msg"></p>
        <br />
        <input type="password" className="text" onChange={e => setPassword(e.target.value)} value={password}/>
        <span>Password</span>
        <br />
        <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" onChange={e => setCheckout(e.target.value)} value={checkout} />
        <label htmlFor="checkbox-1-1">Keep me Signed in</label>
        <button className="signin" type = "button" onClick={logInEmployee}>
          Sign In
        </button>
        <hr />
        <a href="/">Forgot Password?</a>
      </form>
    </div>
  );
}
