import './App.css';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Blog(){

    //array of objects
    const [postList, setPostList] = useState([
        {"title":"NEW CHILLS FOR SUMMER", "content":"You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.", 
		"date": "November 28, 2023", "username":"Admin", "image":"images/new-chills.png"}, 
        {"title":"BERRIES ON THE GROVE", "content":"You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.",
		"date": "November 28, 2023", "username":"Admin", "image":"images/berries.png"}
    ]);

    return(
        <>
        <Header menu="blog"/>
        <div id="body">
			<div className="header">
				<div>
					<h1>Blog</h1>
				</div>
			</div>
			<div className="blog">
				<div className="featured">
					<ul>
                        {/* iterated array */}
                        {   
                            postList.map((post, index) =>{
                                return(
                                <li>
							        <img src={post.image} alt=""/>
							    <div>
								    <h1>{post.title}</h1>
								    <span>By {post.username} on {post.date}</span>
								    <p>{post.content}</p>
                                    <NavLink to="/singlepost" className="more">Read More</NavLink>
							    </div>
						    </li>)
                            })
                        }
					</ul>
					<NavLink to="/blog" className="load">Load More</NavLink>
				</div>
				<div className="sidebar">
					<h1>Recent Posts</h1>
					<img src="images/on-diet.png" alt=""/>
					<h2>ON THE DIET</h2>
					<span>By Admin on November 28, 2023</span>
					<p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                    <NavLink to="/singlepost" className="more">Read More</NavLink>
				</div>
			</div>
		</div>
        <Footer/>

        </>

    )
}

export default Blog;