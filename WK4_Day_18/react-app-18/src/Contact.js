import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Contact(){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNo, setPhoneNo] = useState("");
    const[message, setMessage] = useState("");

    const validateAndGet = ()=>{

        if (name == ""){
            alert("Please let us know who we may be addressing ;)")
        }
        else if (email == "" || phoneNo == ""){
            alert("Please leave us some way to get in touch with you")
        }
        else if (message == ""){
            alert("Please let us know what you want to ask - we can't read blank boxes, y'know")
        }
        else{
            getAPI();
            alert("Thank you! We will get in touch soon.")
        }
    }

    //not logging in console though?
    const getAPI = ()=>{
        fetch("https://reqres.in/api/users?page=2",)
        .then(result=>result.json())
        .then(result=>{
            console.log(result);
            console.log(name);
        })
    } 


    return(
        <>
        <Header menu="contact"/>
        <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <h3>Contact Us</h3>
                        </div>
                        <div className="col-md-12 ">
                            <input className="contactus" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"></input>
                           {/* <input className="contactus" placeholder="Name" type="type" name="Name"/>  */}
                        </div>
                        <div className="col-md-12">
                            <input className="contactus" onChange={(e)=>setPhoneNo(e.target.value)} type="text" placeholder="Phone Number"></input>
                        </div>
                        <div className="col-md-12">
                            <input className="contactus" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email"></input>
                        </div>
                        <div className="col-md-12">
                        <input className="contactus" onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="Message"></input>

                        </div>
                        <div className="col-md-12">
                           <button className="send_btn" onClick={validateAndGet}>Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="map_section">
               <div id="map">
               </div>
            </div>
         </div>
      </div>
        <Footer/>

        </>

    )
}

export default Contact;