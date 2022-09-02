import "./register.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
export default function Register() {

  const [name1,setName1]=useState('');
  const [email1,setEmail1]=useState('');
  const [password1,setPassword1]=useState('');
  const [confirmpassword1,setConfirmpassword1]=useState('');

  const handleName=(value)=>{
    setName1(value);
  }
  const handleEmail=(value)=>{
    setEmail1(value);
  }
  const handlePassword=(value)=>{
    setPassword1(value);
  }
  const handleConfirmpassword=(value)=>{
    setConfirmpassword1(value);
  }
  const handleSave=()=>{
    const data = {
      name : name1,
      password: password1,
      confirmpassword: confirmpassword1,
      email:email1
    };
   // alert(data.name);
    const url='http://localhost:57827/api/User/AddUser';
    axios.post(url,data).then((result)=>{
      alert(result.data.email);
    }).catch((error)=>{
      alert(error);
    })
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Register Here!</h3>
          </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" id="name" className="loginInput" onChange={(e)=>handleName(e.target.value)}/>
            <input placeholder="Email" id="email" className="loginInput" onChange={(e)=>handleEmail(e.target.value)} />
            <input type="password" placeholder="Password" id="password" className="loginInput" onChange={(e)=>handlePassword(e.target.value)}/>
            <input type="password" placeholder="Password Again" id="confirmpassword" className="loginInput" onChange={(e)=>handleConfirmpassword(e.target.value)} />
            <button className="loginButton" onClick={()=> handleSave()}>Sign Up</button>
            <button className="loginRegisterButton">
             <Link to={"/"}>Log into Account</Link> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}