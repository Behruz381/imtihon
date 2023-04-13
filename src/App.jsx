import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Fovourites from './pages/Fovourites/Fovourites';
import Home from "./pages/Home/Home"
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fovourites" element={<Fovourites />} />
        <Route path="/single/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;