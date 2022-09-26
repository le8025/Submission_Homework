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

    return(
        <div className="component_margins">
            
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