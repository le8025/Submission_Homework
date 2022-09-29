import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Blog from './Blog';
import Singlepost from './Singlepost';
import Contact from './Contact';



function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/singlepost" element={<Singlepost/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>


    </>
  );
}

export default App;