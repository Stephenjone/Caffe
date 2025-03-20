import React from 'react';
import Navbar from "../Components/Navbar";
import Items from "../Components/Items";
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Items />
    </div>
  );
}

export default Home;
