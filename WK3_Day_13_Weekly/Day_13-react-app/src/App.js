import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import './Style.css'

function App() {
  return (
    <>
    <div class="home_header">
      <h1> Welcome </h1>
    </div>

    {/* Navigation menu */}
    <Header />
    
    {/* Routing */}
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route> 
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>

    <Footer />

    </>
  );
}

export default App;