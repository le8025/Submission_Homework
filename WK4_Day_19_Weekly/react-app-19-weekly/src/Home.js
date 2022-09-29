import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";


function Home(){

    return(
        <>
        <Header menu="home"/>

        <div id="body" className="home">
			<div className="header">
				<img src="images/bg-home.jpg" alt=""/>
				<div>
					<a href="product.html">Freeze Delight</a>
				</div>
			</div>
			<div className="body">
				<div>
					<div>
						<h1>NEW PRODUCT</h1>
						<h2>The Twist of Healthy Yogurt</h2>
						<p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
					</div>
					<img src="images/yogurt.jpg" alt=""/>
				</div>
			</div>
			<div className="footer">
				<div>
					<ul>
						<li>
                     <NavLink to="/product" className="product"/>
							<h1>PRODUCTS</h1>
						</li>
						<li>
                     <NavLink to="/about" className="about"/>
							<h1>OUR STORY</h1>
						</li>
						<li>
                     <NavLink to="/product" className="flavor"/>
							<h1>FLAVORS</h1>
						</li>
						<li>
                     <NavLink to="/contact" className="contact"/>
							<h1>OUR LOCATION</h1>
						</li>
					</ul>
				</div>
			</div>
		</div>
        <Footer/>
        </>
    )
}

export default Home;