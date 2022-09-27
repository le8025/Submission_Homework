import { useState, useEffect } from 'react';
import './Style.css'

function Header(props){

    const [isExist, setIsExist] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("username") != undefined && localStorage.getItem("username") != ''){
            setIsExist(true);
        }
        else{
            setIsExist(false);
        }
    },[localStorage.getItem("username")])


    return(
        <div>
            <div className='nav'>
                <ul className='menu'>
                    <li className={props.current == "t1"?"active":''}><a href="t1"><div>Task 1</div></a></li>
                    <li className={props.current == "t2-1"?"active":''}><a href="t2-1"><div>Task 2 API</div></a></li>
                    {isExist ? <li><a href="#"><div>Logout</div></a></li>: null}
                </ul>
            </div>

            <div>
                
            </div>
        </div>

    )
}

export default Header;