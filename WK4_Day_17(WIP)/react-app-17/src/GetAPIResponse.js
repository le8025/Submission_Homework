import { useEffect, useState } from "react";

function GetAPIResponse (props){
    let employeeList =[];

    fetch("https://reqres.in/api/users?page=" + props.pageNo)
    .then(result=>result.json())
    .then(result=>{
        employeeList=result['data'];
        console.log(employeeList);
    })

    return(
        <>
            <ol>
                <li>Checking</li>
                {
                    employeeList.map((employee, index)=>{
                        return <li>Hi, I am {employee.email}</li>
                    })
                }
            </ol>
        </>
    )

}

export default GetAPIResponse;


// let employeeList = [];

// fetch("https://reqres.in/api/users?page=" + props.pageNo)
// .then(result=>result.json())
// .then(result=>{
//     employeeList=result['data'];
//     console.log(employeeList);
//     })

//     return(
//     <>
//         <ol>
//             <li>checking</li>
//         {
//             employeeList.map((employee, index)=>{
//                  return <li>Hi, I am {employee.email} </li>
//              })
//         }  
//         </ol>
//     </>
//     )
