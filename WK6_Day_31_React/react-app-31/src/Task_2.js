import { useState } from "react";
import './Style.css'

function Task_2(){

    //array of objects
    let candidateList=[
        {"name": "Amber", "gender": "F", "age": 21},
        {"name": "Bernard", "gender": "M", "age": 51},
        {"name": "Cassandra", "gender": "F", "age": 63},
        {"name": "Donny", "gender": "M", "age": 35},
        {"name": "Elliot", "gender": "M", "age": 28},
    ]

    //const[headingClassName, setHeadingClassName] = useState('')

    return(
        <div className="component_margins">
            
        {/* <h2 className={headingClassName}>{name}</h2>

        <button onClick={()=>setHeadingClassName("heading_2")}>Heading Class 2</button>
        <button onClick={()=>setHeadingClassName("heading_4")}>Heading Class 4</button> */}
        <h2>Prospective New Hires</h2>

            <table className="cand_list">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>

                {
                    candidateList.map((candidate, index)=>{
                        return <tr className={candidate.age>50?"age_red":"age_aqua"}>
                            <td>{candidate.name}</td>
                            <td>{candidate.gender}</td>
                            <td><span className={candidate.age>50?"age_bold":""}>{candidate.age}</span></td>
                            </tr>
                    })
                }
            </table>   
            <p />         
            
        </div>
    )

}

export default Task_2;