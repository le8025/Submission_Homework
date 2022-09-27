import { useEffect, useState } from "react";

function GetAPIResponse (props){
   

    const [employeeList, setEmployeeList] = useState([]); //must declare [] inside bracket to use .map

    const [oneEmployee, setOneEmployee] = useState( //need to include the attributes otherwise will error straighaway when changing pages in Details
                                        {"id":null,
                                        "first_name":"",
                                        "last_name":"",
                                        "email":"",
                                        "img":""
                                        });

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

    //trial and error until it worked, so not sure why it works.
    useEffect(()=>{
        console.log(oneEmployee)
    }, [oneEmployee])

    return(
        <>
        {
            employeeList.length == 0 ? 
            <h4>No Data Found</h4>:
            <table className="emp_list">
                {
                    employeeList.map((employee, index)=>{
                        return <tr onClick={()=>setOneEmployee(employee)}
                                key={employee.id}>
                                <td>Hi, I am {employee.first_name} {employee.last_name}.</td>
                                <td><img src={employee.avatar}/></td> 
                                </tr>
                    })
                }
            </table>
            
        }
        
        {/* only able to clear for Page 3, unable to remove when changing between Page 1 and Page 2 */}
        
        {
            employeeList.length == 0 ?
            null : <div className="box_half">
            <p><i>Id: {oneEmployee.id}</i></p>
            <p>First Name: {oneEmployee.first_name}</p>
            <p>Last Name: {oneEmployee.last_name}</p>
            <p>Email: {oneEmployee.email}</p>
            <img src={oneEmployee.avatar}/>
        </div>
        }

        </>
    )

}

export default GetAPIResponse;