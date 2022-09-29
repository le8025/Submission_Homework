import { NavLink } from "react-router-dom";

function Header(props){
    return(
      <div id="header">
      <div>
         <NavLink to="/"><img src="images/logo.png" alt=""/></NavLink>
         <ul id="navigation">
            <li className={props.menu == "home"? "selected":"menu"}>
               <NavLink to="/home">Home</NavLink>
            </li>
            <li className={props.menu == "about"? "menu selected":"menu"}>
               <NavLink to="/about">About</NavLink>
               <ul id={props.menu == "product"? "selected":""} className="primary">
                  <li>
                     <NavLink to="/product">Product</NavLink>
                  </li>
               </ul>
            </li>
            <li className={props.menu == "blog"? "menu selected":"menu"}>
               <NavLink to="/blog">Blog</NavLink>
               <ul id={props.menu == "singlepost"? "selected":""} className="secondary">
                  <li>
                     <NavLink to="/singlepost">Single post</NavLink>
                  </li>
               </ul>
            </li>
            <li className={props.menu == "contact"? "menu selected":"menu"}>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
      </div>
   </div>
    )
}

export default Header;