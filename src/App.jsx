import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (<div>
    Hello there
    <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* The default page that will be loaded, becuase it is checking the url and checking which of these paths are present */}

        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    {/* so from the main header when the web loads, this page will be shown as the first page.
    so when, we add any of these paths to the main URL,then it will redirect. 
    Like http://localhost:5173 -> http://localhost:5173/contact will open component Contact along with the Navbar */}

  </div>);
}

export default App;