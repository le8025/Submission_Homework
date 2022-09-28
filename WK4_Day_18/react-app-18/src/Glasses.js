import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function Glasses(){
    
    const [glassList, setGlassList] = useState([
        {"name":"Classic Tint", "price":90, "image":"images/glass1.png"}, 
        {"name":"Snazzy Blue", "price":100, "image":"images/glass2.png"}, 
        {"name":"Cool Black", "price":120, "image":"images/glass3.png"}, 
        {"name":"Smart High-Cross", "price":100, "image":"images/glass4.png"}, 
        {"name":"Stylish Side", "price":100, "image":"images/glass5.png"}, 
        {"name":"Antique Round", "price":90, "image":"images/glass6.png"}, 
        {"name":"Slim & Suave", "price":110, "image":"images/glass7.png"}, 
        {"name":"Comfort Half", "price":110, "image":"images/glass8.png"}  
    ]);

    return(
        <>
        <Header menu="glasses"/>

      <div className="glasses">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>Our Glasses</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                        e et dolore magna aliqua. Ut enim ad minim veniam, qui
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="container-fluid">
            <div className="row">

         {
            glassList.map((glass, index)=>{
                return(
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="glasses_box">
                       <figure><img src={glass.image} alt="#"/></figure>
                       <h3><span className="blu">$</span>{glass.price}</h3>
                       <p>{glass.name}</p>
                    </div>
                 </div>
                )
            })
         }


          

               <div className="col-md-12">
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>


        <Footer/>
        </>
    )
}

export default Glasses;