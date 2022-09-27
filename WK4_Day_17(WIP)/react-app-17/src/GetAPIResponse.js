import { useEffect, useState } from "react";

function GetAPIResponse (props){
    const [employeeList, setEmployeeList] = useState([]); //must declare as array to use .map

    //to change the UI - useEffect
    useEffect(()=> {
        fetch("https://reqres.in/api/users?page="+ props.pageNo)
        .then(result=>result.json())
        .then(result=>{
            setEmployeeList(result['data']);
            console.log(employeeList);
        })
    },
    [props.pageNo]) // it's the pageNo that changes not the employeeList
    return(
        <>
        {
            employeeList.length == 0 ? 
            <h4>No Data Found</h4>:
            <ol>
                {
                    employeeList.map((employee, index)=>{
                        return <li key={employee.id}>Hi, I am {employee.first_name} {employee.last_name}. Contact me at {employee.email}</li>
                    })
                }
            </ol>
            
        }
        </>
    )

}

export default GetAPIResponse;