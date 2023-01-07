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
    })
    
}