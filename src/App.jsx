import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allproducts from './pages/Allproducts';
import Home from './pages/Home';
import Footer from './components/Footer'
import About from './components/About';
import './App.css'


function App() {
  return (
    <div className="bg-aura-black text-aura-white min-h-screen">
      <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allproducts' element={<Allproducts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
