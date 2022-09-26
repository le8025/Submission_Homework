import { useState } from "react";

function Task_1(){
    
    //for POST API
    const[name, setName]= useState("");
    const[job, setJob]= useState("");
    const[id, setId]=useState("");
    const[createdAt, setCreatedAt]=useState("");

    //validation
    const greeting=()=>{
        if (name==""){
            alert("Please enter name");
        }
        else if (job==""){
            alert("Please enter job");
        }
        else{
            postAPIResponse(name, job);        
        }
    }

    //POST API
    const postAPIResponse=(inputName, inputJob)=>{

        let param = {
            "name":inputName,
            "job":inputJob
        }

        fetch(
        "https://reqres.in/api/users?page=2",
        {method: "POST", 
        body:JSON.stringify(param)}
        ).then(res=>res.json())
        .then(res=>{
            var postId = res['id'];
            var postCreatedAt = res['createdAt'];

            setId(postId);
            setCreatedAt(postCreatedAt);

            console.log("Name: " + name + " Job: " + job 
            + " Id: " + id + " CreatedAt: " + createdAt);

        })
    }

    return(
        <div className="component_margins">

        <h2>Enter Details</h2>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name"></input>
        <input onChange={(e)=>setJob(e.target.value)} type="text" placeholder="Enter job"></input>
        <button onClick={greeting}>Submit</button>

        <h2>New Employee Card Preview</h2>
        <div className="box">
            <p>Id: {id}</p>
            <p>I am <b>{name}</b></p>
            <p>My job is <b>{job}</b></p>
            <p><i>Date of creation: {createdAt}</i></p>
        </div>
        </div>
    )
}

export default Task_1;