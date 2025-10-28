import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return ( <div>
    Hello there
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    {/* so from the main header when the web loads, this page will be shown as the first page.
    so when, we add any of these paths to the main URL,then it will redirect. 
    Like http://localhost:5173 -> http://localhost:5173/contact will open component Contact along with the Navbar */}
    
  </div> );
}
 
export default App;