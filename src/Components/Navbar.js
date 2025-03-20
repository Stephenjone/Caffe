import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <a href="/">
          <h2 className="caffe-name">Caffe</h2>
        </a>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
