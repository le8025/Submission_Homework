import { useState } from "react";

function Task_1()
{
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[mobile, setMobile]=useState("");
    const[address, setAddress]=useState("");
    const[name, setName]=useState("");
    const[message, setMessage] = useState("(message)");

    //register
    const registerAPI=()=>{
        if(email==undefined || email == ""){alert("Please enter an email");}
        else if(password==undefined || password ==""){alert("Please enter a password");}
        else{
            let request = {
                "email":email,
                "password":password,
                "name":name,
                "mobile":mobile,
                "address":address
            }

            fetch("http://localhost:8080/user/register",{
                method:"POST", headers:{"content-type":"application/json"},
                body: JSON.stringify(request)
            }).then(res=>{
                //below is other 200
                if(!res.ok){throw res;}
                else{res.json().then(res2=>{
                    console.log(res2)
                    setMessage(res2['message'])
                });}
            }).catch(err=>{err.json().then(e=>{
                    console.log(e)
                    alert(e.message)
            }
                )})
        }
    }
    
    //login
    const loginAPI=()=>{
        if(email==undefined || email == ""){alert("Please enter an email");}
        else if(password==undefined || password ==""){alert("Please enter a password");}
        else{
            let request = {
                "email":email,
                "password":password
            }

            fetch("http://localhost:8080/user/login",{
                method:"POST", headers:{"content-type":"application/json"},
                body: JSON.stringify(request)
            }).then(res=>{
                //below is other 200
                if(!res.ok){throw res;}
                else{res.json().then(res2=>{
                    console.log(res2)
                    setMessage(res2['message'])
                });}
            }).catch(err=>{err.json().then(e=>{
                    console.log(e)
                    alert(e.message)
            }
                )})
        
        }
    }


    return(
        <div className="component_margins">

        <h2>1. Register New User</h2>
        <div>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email"></input>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter password"></input>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name"></input>
            <input onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="Enter mobile"></input>
            <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Enter address"></input>
            <p></p>
            <button onClick={registerAPI}>Register New User</button>
        </div>

        <h2>2. Login </h2>
        <div>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email"></input>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter password"></input>
            <button onClick={loginAPI}>Login</button>
        </div>
        <p></p>

        <h4>Message Box</h4>
        <div className="box">
            <p><i>{message}</i></p>
        </div>
        
        </div>
        )
    
}

export default Task_1;