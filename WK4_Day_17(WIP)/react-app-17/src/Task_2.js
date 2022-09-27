import React from "react";
import GetAPIResponse from "./GetAPIResponse";

class Task_2 extends React.Component{

    constructor(){
        super();

        this.state={
            //for GET API
            "firstName":"",
            "lastName":"",
            "email":"",
            "avatar":"",
            "employeeList":[],
            "pageNo":0,

            //for POST API
            "name":"",
            "job":"",
            "createdAt":"",
            "id":0,

            //for conditional class
            "styleClass":"",
            "peopleList":[
                {"name":"Alice", "age":15},
                {"name":"Bernard", "age":51},
                {"name":"Cassidy", "age":63},
                {"name":"Dennis", "age":30}            
            ]
        }
   
    }


    render(){
        return(
            <>
            </>
        )
    }
}