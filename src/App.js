import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar'; 
import Items from './Components/Items';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
      </Router >
  );
}

export default App;
