import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { httpPostWithoutHeaders } from './HTTPFetch';


function Login()
{
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    let navigate = useNavigate();

    const loginApi=()=>{
        if(email == ""){
            alert("Email should not be empty")
            return;
        }else if(password == ""){
            alert("Email should not be empty")
            return;
        }
        let req = {
            "email":email,
            "password":password
            }

            //common library
            httpPostWithoutHeaders("login", req)
          .then(res=>{
            if(!res.ok){
                throw res
            }
            res.json().then(res=>{
                localStorage.setItem("full_response",JSON.stringify(res));
                localStorage.setItem("token",res['token']);
                localStorage.setItem("userId",res['id']);
                alert("Login success!")
                console.log("Login success!");
                navigate("/t1");
                console.log(res);
            })
    
          }
            ).catch(err=>{
                alert("Error while login");
                //err.json().then(alert("Error while login"))
            })
          
       }

    return(
        <>
        <Header/>
        <div className="component_margins">

        <h2>Please Login</h2>
        <div>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email"></input>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter password"></input>
            <p></p>
            <button onClick={loginApi}>Login</button>
        </div>
        
        </div>
        </>
        )
    
}

export default Login;