
//common reusable library

export const httpPostWithHeaders=(endpointurl, requestParam)=>{
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    
    return  fetch("http://localhost:8080/user/"+endpointurl,{
        method:"POST",
        headers:{
           "content-type":"application/json",
           "token":token,
           "userId":userId
        }, body:JSON.stringify(requestParam)
     },)
}

export const httpGetWithHeaders=(endpointurl)=>{
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");

        fetch("http://localhost:8080/user/" + endpointurl, {
            method: "GET",
            headers:{
                "content-type":"application/json",
                "token":token,
                "userId":userId
            }
        })

}

export const httpPostWithoutHeaders=(endpointurl, requestParam)=>{
    return  fetch("http://localhost:8080/user/"+endpointurl,{
        method:"POST",
        body:JSON.stringify(requestParam),
        headers:{
           "content-type":"application/json",
        }
     })
    
}

export const checkLoginToken=()=>{
    let token = localStorage.getItem("token");
    if(token == undefined || token == ""){
        return false;
    }else{
        return true;
    }
}