import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
