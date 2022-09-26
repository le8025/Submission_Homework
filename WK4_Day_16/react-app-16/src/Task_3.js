import { useState } from "react";

function Task_3(){
    
    const[employeeList, setEmployeeList] = useState("");

    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email, setEmail]=useState("");
    const[avatar, setAvatar]=useState("");
    const[id, setId]=useState("");

    //set counter for clearing details box
    const[count, setCount]=useState("");

    const getAPIResponse=(pageNo)=>{
        fetch("https://reqres.in/api/users?page=" + pageNo)
        .then(result=>result.json())
        .then(result=>{
                setEmployeeList(result['data']);
                console.log(result);
        })
    }

    //get details of employee
    const getDetails=(employee)=>{
        console.log(employee);
        setFirstName(employee.first_name);
        setLastName(employee.last_name);
        setId(employee.id);
        setEmail(employee.email);
        setAvatar(employee.avatar);
        setCount(1);
    }

    //clear details box
    const clearDetails=()=>{
        setFirstName("");
        setLastName("");
        setId("");
        setEmail("");
        setAvatar("");
        setCount(0);
    }

    return(
        <div className="component_margins">
        <h2>Current Employees List</h2>
        Select a page: <select onChange={(e)=>getAPIResponse(e.target.value)}>
            <option defaultValue={""} hidden></option>
            <option value="1">Page 1</option>
            <option value="2">Page 2</option>
            <option value="3">Page 3</option>
        </select>
        <p />
        
        {(employeeList && employeeList.length <= 0)? <h1>No Data Found</h1>:
            <table className="emp_list">
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            {
                employeeList && employeeList.map((employee, index)=>{
                    return <tr onClick={()=>getDetails(employee)} key={index}>
                        <td>{employee.first_name}</td>
                        <td><img src={employee.avatar} alt="employee_photo"/></td>
                        </tr>
                })
            }
            </table>

        }

        <div className="box_half">
            <p> Hi I am <b>{firstName} {lastName}</b>.</p>
            <p> Contact me at <a href={email}>{email}</a></p>
            <p> Employee Id: {id}</p>
            <p><img src={avatar}></img></p> 
            {
                count == 1?<button onClick={clearDetails}>Clear</button>:'' 

            }
            
        </div>        

        </div>
    )
}

export default Task_3;