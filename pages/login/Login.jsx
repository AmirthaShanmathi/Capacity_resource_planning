import "./login.css";
import React from "react";
//import { LoginContext } from "../../components/helper/Context";
import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
//import Home from "./pages/home/Home";

export default function Login() {
  const [email1,setEmail1]=useState('');
  const [password1,setPassword1]=useState('');
 // const [loggedin, setLoggedin ] = useContext(LoginContext);
  
  const handleEmail=(value)=>{
    setEmail1(value);
  }
  const handlePassword=(value)=>{
    setPassword1(value);
  }
  const navigate = useNavigate();    
  const handleSave=()=>{
    
    const data = {
      email : email1,
      password: password1,
    };
    const url='http://localhost:57827/api/Login';
  
    axios.post(url,data).then((result)=>{
      alert(result.data);
      if(result.data==="success"){
       // setLoggedin(true);
        navigate('home');
      }
    }).catch((error)=>{
      //setLoggedin(false);
      alert(error);
    })
    //console.log(loggedin+" from login");
  }

  return (
    <>
      
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">ADMIN LOGIN</h3>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email"  className="loginInput" onChange={(e)=>handleEmail(e.target.value)}/>
              <input placeholder="Password" type="password" className="loginInput" onChange={(e)=>handlePassword(e.target.value)}/>
              
              <button className="loginButton" onClick={()=> handleSave()}>Log In</button>
                
              <span className="loginForgot" >Forgot Password?</span>
              <button className="loginRegisterButton">
              <Link to="register">Create a New Account</Link> 
              </button>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}
