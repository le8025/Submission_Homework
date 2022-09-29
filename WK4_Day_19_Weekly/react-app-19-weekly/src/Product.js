import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Product(){

    const [yoghurtList, setYoghurtList] = useState([
        {"title":"All Time classNameic", "types": [{"name":"Kiwi", "image":"images/kiwi.jpg"}, {"name":"Mango", "image":"images/mango.jpg"}, {"name":"Cantaloupe", "image":"images/cantaloupe.jpg"}]},
        {"title":"Berry Special", "types": [{"name":"Blackberry", "image":"images/blackberry.jpg"}, {"name":"Strawberry", "image":"images/strawberry.jpg"}, {"name":"Blueberry", "image":"images/blueberry.jpg"}]},
        {"title":"Fruit Blast", "types": [{"name":"Grapes", "image":"images/grapes.jpg"}, {"name":"Green Apple", "image":"images/green-apple.jpg"}, {"name":"Pineapple", "image":"images/pineapple.jpg"}]}
    ])    
    
    return(
        <>
        <Header menu="product"/>
        <div id="body">
			<div className="header">
				<div>
					<h1>Products</h1>
				</div>
			</div>
			<div>
                {
                yoghurtList.map((yoghurts, index)=>{
                        return(
                            <ul>
                                <li>
                                    <h1>{yoghurts.title}</h1>
                                    <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
                                </li>
                                {/* iterating types array */}
                                {yoghurts.types.map((yog, idx)=>{  
                                    return(
                                        <li key={idx}>
                                        <img src={yog.image} alt=""/>
                                        <h2>{yog.name}</h2>
                                    </li>
                                    );
                                })}
                            </ul>
                        )
                    })
                }
			</div>
		</div>
        <Footer/>

        </>

    )
}

export default Product;