// import React, {useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import RegistrationCall from "../service/RegistrationCall";
// import "../style/Login.css";

// export default function Login() {
//   const [emailid, setEmailID] = useState("");
//   const [password, setPassword] = useState("");
//   const [checkout, setCheckout] = useState(false);
//   const navigate = useNavigate();

//   const logInEmployee = () => {
//     const emp = {
//       emailid: emailid,
//       password: password,
//       checkout: checkout,
//     };
//     RegistrationCall.doLogin(emp)
//       .then((response) => {
//         console.log(response);
//         if (response.data === "success") {
//           navigate("/showbook");
//         } else {
//           console.log("Error");
//           document.getElementById("msg").innerHTML = "Invalid Login! Please try again!";
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     // console.log("Login page");
//     <div className="login">
//       <Link to="/registration" className="active" ><h3>sign up</h3></Link>
//       <h2 className="active"> sign in </h2>
//       <form>
        
//         <input type="text" className="text" onChange={e => setEmailID(e.target.value)} value={emailid}/>
//         <span>Email Id</span>
//         <br />
//         <p id="msg"></p>
//         <br />
//         <input type="password" className="text" onChange={e => setPassword(e.target.value)} value={password}/>
//         <span>Password</span>
//         <br />
//         <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" onChange={e => setCheckout(e.target.value)} value={checkout} />
//         <label htmlFor="checkbox-1-1">Keep me Signed in</label>
//         <button className="signin" type = "button" onClick={logInEmployee}>
//           Sign In
//         </button>
//         {/* <hr /> */}
//         {/* <a href="/">Forgot Password?</a> */}
//       </form>
//     </div>
//   );
// }






import React, { useState } from 'react';
import '../style/Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
