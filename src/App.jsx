import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Services from './components/Pages/Services/Services';
import Contact from './components/Pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>
  );
}

export default App
