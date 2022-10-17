import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css'

function Header(props){

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();

    const checkLoginStatus=()=>{
        let token = localStorage.getItem("token");
        if(token == undefined || token == ""){
            setIsLoggedIn(false);
        }else{
            setIsLoggedIn(true);
        }
    }


    const logout=()=>{
      let userId = localStorage.getItem("userId"); 
      let token = localStorage.getItem("token"); 

      fetch("http://localhost:8080/user/logout/"+userId,{
         method:"POST",
         headers:{
            "content-type":"application/json",
            "token":token,
            "userId":userId
         }
      })
      .then(res=>{
            if(!res.ok){
               throw res;
            }
             return res.json();
            }
         )
         .then(res2=>{
              //clear the token and navigate to login page after success logout
              localStorage.clear();
              alert("Log out success! Redirecting...")
              console.log("Log out success! Redirecting...")
              navigate("/login");

         }).catch(e=>{
         e.json().then(er=>{
            console.log("Eror while fetching the records",er)
            alert("Eror while fetching the records");
         });
         
      })
    }

    useEffect(checkLoginStatus,[]) //will be triggered during the page for tokenvalidation


    return(
        <div>
            <div className='nav'>
                <ul className='menu'>
                    <li><a href="t1"><div>Home</div></a></li>
                    {/* <li><a href="t2"><div>Task 2</div></a></li> */}
                    <li><a href="t3"><div>Others</div></a></li>

                    {isLoggedIn?
                        <>
                          <li onClick={logout}><a href="login"><div>Logout</div></a></li>
                        </>
                        : null
                    }

                    {!isLoggedIn?
                        <>
                          <li><a href="login"><div>Login</div></a></li>
                          {/* <li><a href="login"><div>Register</div></a></li> */}
                        </>
                        : null
                    }

                </ul>
            </div>

            <div>
                
            </div>
        </div>

    )
}

export default Header;