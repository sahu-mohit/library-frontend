import React, { useState } from "react";
import "../style/Login.css";
import { Link, useNavigate} from "react-router-dom";
import RegistrationCall from "../service/RegistrationCall";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login clicked");

    const emp = {
      emailid: username,
      password: password,
    };
    RegistrationCall.doLogin(emp)
      .then((response) => {
        console.log(response);
        if (response.data === "success") {
          navigate("/allbooks");
        } else {
          console.log("Error");
          document.getElementById("msg").innerHTML =
            "Invalid Login! Please try again!";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p className="text-center" style={{color:'red'}} id="msg"></p>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/registration">
          <p className="text-center">I don't have account</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
