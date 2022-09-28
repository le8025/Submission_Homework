import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Glasses from './Glasses';
import Contact from './Contact';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/glasses" element={<Glasses/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>


    </>
  );
}

export default App;