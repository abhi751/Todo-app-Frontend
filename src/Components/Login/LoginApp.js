import React, { useState } from "react";
import "./LoginApp.css"
import {useNvigate} from "react-router-dom"
import {setToken,getToken} from "../../setLocalstorage"


const URL=process.env.API_URL || "http://localhost:3000";

const login=()=>{
    const navigate=useNvigate()
    const[data,setData]=useState({
        email:"",
        password:"",
    });
    const[errormsg,setErrormsg]=useState("");
    const[show,setShow]=useState("")
    const[message,setMessage]=useState("")
    const[passwordErrorMessage,setPasswordErrorMessage]=useState("")

    const emailChangeHandler=(e)=>{
        setData({...data,email:e.target.value})
        if(!e.target.value.match(/[^a-zA-Z0-9]/)|| !e.target.value.includes("@")|| !e.target.value.endWith(".com")){
          setErrormsg("Please enter a valid email id")
      } else{
        setErrormsg("")
      }
    }  

    
}
