import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import './Style.css'
import Task_1 from './Task_1';
import Task_2_API from './Task_2_API';

function App() {
  return (
    <>
    <div className="home_header">
      <h1> 1 and 2.4 done only </h1>
    </div>

    <Router>
      <Routes>
        <Route path="/t1" element={<Task_1/>}></Route>
        <Route path="/t2-1" element={<Task_2_API/>}></Route> 
        <Route path="/" element={<Task_1/>}></Route> 
      </Routes>
    </Router>

    <Footer />

    </>
  );
}

export default App;