import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Weatherstate from './components/context/Weatherstate';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
function App() {
  return (
    <>
    <Router>
      <Weatherstate>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </Weatherstate>
    </Router>
    </>
  );
}

export default App;
