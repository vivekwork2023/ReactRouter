import React from 'react';
import Navbar from './components/Navbar';
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* this index does not work until we include the {Outlet} in the RootLayout.
        When ever this renders, first it renders the RootLayout and then the rest */}

        <Route path='products' element={<Products />} />
        {/* so in here first the / is checked and later all these paths are checkedd */}

        <Route path='about' element={<About />} />

        <Route path='contact' element={<ContactLayout />} >
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>

      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
  
}

export default App;