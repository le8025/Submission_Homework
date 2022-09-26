import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import './Style.css'
import Task_1 from './Task_1';
import Task_2 from './Task_2';
import Task_3 from './Task_3';

function App() {
  return (
    <>
    <div className="home_header">
      <h1> Hello </h1>
    </div>
    <Header />

    <Router>
      <Routes>
        <Route path="/t1" element={<Task_1/>}></Route>
        <Route path="/t2" element={<Task_2/>}></Route>
        <Route path="/t3" element={<Task_3/>}></Route> 
      </Routes>
    </Router>

    <Footer />

    </>
  );
}

export default App;