import { useState } from "react";

function Task_1(){
    
    //for POST API
    const[email, setEmail]= useState("");
    const[password, setPassword]=useState("");
    const[message, setMessage] = useState("verifying..."); //get message back from Spring Boot API

    //POST API
    const postAPIResponse=()=>{

        let param = {
            "email": email,
            "password": password
        }

        fetch( //linked to WK6_Day_27_Java folder
        "http://localhost:8080/user/validateReact",
        {method: "POST", 
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(param)}
        ).then(res=>res.json())
        .then(res=>{
            console.log(res);
            setMessage(res['message']);
        })
    }

    return(
        <div className="component_margins">

        <h2>Login</h2>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email"></input>
        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter password"></input>
        <button onClick={postAPIResponse}>Post to Spring Boot</button>

        <h2>Input</h2>
        <div className="box">
            <p><i>{message}</i></p>
        </div>
        </div>
    )
}

export default Task_1;