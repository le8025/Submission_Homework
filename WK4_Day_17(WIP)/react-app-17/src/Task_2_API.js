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
            "id":"", 
            "avatar":"",
            "employeeList":[],
            "pageNo": 0,

            //for POST API
            "name": "",
            "job": "",
            "createdAt": "",
            "p_id": null ,
            "exist": false,

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

    postApiResponse = (name, job)=>{

        let param = {
            "name": this.state.name,
            "job": this.state.name,
        }

        fetch("https://reqres.in/api/users?page=2",
                {method: "POST",
                body:JSON.stringify(param),
                }).then(result=>result.json())
                .then(result=>{
                    console.log(result);
                    this.setState({"p_id":result["id"]});
                    this.setState({"createdAt":result["createdAt"]});
                })
                this.setState({"exist":true })
        
    }

    render(){

        return(
            <>
                <Header current="t2-1"/>
                <div className="component_margins">

                    <h2>Conditional Class</h2>
                    <p><i>Still working on this</i></p>

                     <h2>GET API</h2>
                    Select a page: <select onChange={(e)=>this.setState({"pageNo":e.target.value})}>
                                        <option defaultValue={""} hidden></option>
                                        <option value="1">Page 1</option>
                                        <option value="2">Page 2</option>
                                        <option value="3">Page 3</option>
                                    </select>
                    <p />

                    {
                        (this.state.pageNo != 0)? <GetAPIResponse pageNo = {this.state.pageNo}/>:<h4> No Data Yet. Please select a page.</h4>                    
                        
                    }

                    <h2> POST API </h2>
                    <input type="text" value={this.state.name} onChange={(e)=>this.setState({"name":e.target.value})} placeholder="Enter name"></input>
                    <input type="text" value={this.state.job} onChange={(e)=>this.setState({"job":e.target.value})} placeholder="Enter job"></input>
                    <button onClick={()=>this.postApiResponse(this.state.name, this.state.job)}>Submit</button>
                    <h4>New Employee Card Preview</h4>
                    <div className="box">
                        {
                            (!this.state.exist)?
                            <h5>Nothing to display</h5>:
                            <div>
                                <p><b>Id: {this.state.p_id}</b></p>
                                <p>Hi, I am {this.state.name}.</p>
                                <p>I am a {this.state.job}.</p>
                                <p><i>Created at: {this.state.createdAt}</i></p>
                            </div>
                        }
                    </div>


             </div>

            </>
        )
    }

}

export default Task_2_API;


