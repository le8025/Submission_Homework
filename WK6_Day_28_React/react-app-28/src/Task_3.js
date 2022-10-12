import { useState } from "react";

function Task_3(){
    
    const[id, setId]=useState("");
    const[email, setEmail]=useState("");
    const[mobile, setMobile]=useState("");
    const[address, setAddress]=useState("");
    const[name, setName]=useState("");
    const[message, setMessage] = useState("(message)");

    const listAllAPI=()=>{ 
        fetch("http://localhost:8080/user/listuser")
        .then(result=>result.json())
        .then(result=>{
                console.log(result);
        })
    }

    const findAPI=(pageNo)=>{ //linked to WK6_Day_28_Java folder
        fetch("http://localhost:8080/user/listuser/" + pageNo)
        .then(result=>result.json())
        .then(result=>{
                console.log(result);
                setId(result['id']);
                setEmail(result['email']);
                setMobile(result['mobile']);
                setAddress(result['address']);
                setName(result['name']);
                setMessage(result['message']);
        })
    }

    const updateAPI=()=>{
            let update = {
                "id":id,
                "email":email,
                "name":name,
                "mobile":mobile,
                "address":address
            }
            fetch("http://localhost:8080/user/update",{
                method:"POST", headers:{"content-type":"application/json"},
                body: JSON.stringify(update)
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

    const deleteAPI=()=>{        
        let update = {
            "id":id,
        }
        fetch("http://localhost:8080/user/delete/" + id,{
            method:"POST", headers:{"content-type":"application/json"},
            body: JSON.stringify(update)
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

    return(
        <div className="component_margins">

        <button onClick={listAllAPI}>See All User (in Console)</button>

        <h2>Find User</h2>
        Select a number: <select onChange={(e)=>findAPI(e.target.value)}>
            <option defaultValue={""} hidden></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11 (does not exist)</option>
        </select>
        <button onClick={deleteAPI}>Delete User</button>
        <p />

        <h2>User Details</h2>
        <div className="box">
            <p>ID: {id}</p>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email" value={email}></input>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" value={name}></input>
            <input onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="mobile" value={mobile}></input>
            <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="addreess" value={address}></input>
        </div>
        <button onClick={updateAPI}>Update User</button>

        <h4>Message Box</h4>
        <div className="box">
            <p><i>{message}</i></p>
        </div>
    
        </div>
    )
}

export default Task_3;