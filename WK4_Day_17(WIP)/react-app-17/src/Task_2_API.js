import React from "react";
import GetAPIResponse from "./GetAPIResponse";
import Header from "./Header";

class Task_2_API extends React.Component{

    constructor(){
        super();

        this.state={
            //for GET API
            "firstName":"",
            "lastName":"",
            "email":"",
            "avatar":"",
            "employeeList":[],
            "pageNo": 0,

            //for POST API
            "name": "",
            "job": "",
            "createdAt": "",
            "id": 0 ,

            //for conditional class
            "styleClass":"",
            "peopleList":[
                {"name": "Alice", "age": 15}, 
                {"name": "Bernard", "age": 51},
                {"name": "Cassandar", "age": 63},
                {"name": "Dennis", "age": 30},
            ]

        }
    }


    render(){

        return(
            <>
                <Header current="t2-1"/>
                <div className="component_margins">

                    <h2>Conditional Class</h2>
                    <p><i>Still working on this</i></p>

                     <h2>GET API</h2>
                     <p><i>Progress: got the result in GetAPI but employeeList not showing: </i></p>
                    Select a page: <select onChange={(e)=>this.setState({"pageNo":e.target.value})}>
                                        <option defaultValue={""} hidden></option>
                                        <option value="1">Page 1</option>
                                        <option value="2">Page 2</option>
                                        <option value="3">Page 3</option>
                                    </select>
                    <p />

                    {
                        (this.state.pageNo != 0)? <GetAPIResponse pageNo = {this.state.pageNo}/>:<h1> No Data Yet</h1>                    
                        
                    }

                    
                    <h2> POST API </h2>
                    <p><i>still working on this</i></p>
     
                    <h2>New Employee Card Preview</h2>
                    <div className="box">
                    </div>


             </div>

            </>
        )
    }

}

export default Task_2_API;


