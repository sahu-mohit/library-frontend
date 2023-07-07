import React, {useState } from "react";
import { useNavigate } from 'react-router-dom';
import RegistrationCall from "../service/RegistrationCall";
// import { Route, Router, Routes } from "react-router";

export default function Registration() {

    // const [id, setId] = useState(0);
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const [emailid, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    const [checkout, setCheckout] = useState(false);
    const navigate = useNavigate();

const saveEmpoyee = (event)=>{
  const emp = {
    id:0,
    firstname:firstname,
    lastname: lastname,
    emailid : emailid,
    password : password,
    checkout : checkout
  }
  RegistrationCall.doRegistration(emp).then((response)=>{
    console.log(response);
    if(response.data === "successefully"){
      setFname("");
      setLname("");
      setEmailID("");
      setPassword("");
      setCheckout(false);
      navigate('/login');      
    }else{
      alert("Please Check the terms and Conditions");
    }
  }).catch(error=>{
    console.log(error);
    
  })
}

  return (
    <div className="container mt-5">
      {/* <div>{console.log("Helo")}</div> */}
        <div className="text-center"><h1>Please Register Yourself</h1></div>
      <form>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            value={firstname}
            onChange={e => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            value={lastname}
            onChange={e => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={emailid}
            onChange={e => setEmailID(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={e => setCheckout(e.target.checked)} value={checkout} />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button className="btn btn-primary" type="button" onClick={saveEmpoyee}>
          Submit
        </button>
      </form>
    </div>
  );
}
