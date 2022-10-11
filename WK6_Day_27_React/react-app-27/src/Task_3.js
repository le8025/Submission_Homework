import { useState } from "react";

function Task_3(){
    
    const[id, setId]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[message, setMessage]=useState("");


    const getAPIResponse=(pageNo)=>{ //linked to WK6_Day_27_Java folder
        fetch("http://localhost:8080/user/pathVar/" + pageNo)
        .then(result=>result.json())
        .then(result=>{
                console.log(result);
                setId(result['id']);
                setEmail(result['email']);
                setPassword(result['password']);
                setMessage(result['message']);
        })
    }


    return(
        <div className="component_margins">

        <h2>Find User</h2>
        Select a number: <select onChange={(e)=>getAPIResponse(e.target.value)}>
            <option defaultValue={""} hidden></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6 (does not exist in database)</option>
            <option value="7">7 (does not exist in database)</option>

        </select>
        <p />
        
        <h2>User Details</h2>
        <div className="box">
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p><i>{message}</i></p>
        </div>
    
    

        </div>
    )
}

export default Task_3;