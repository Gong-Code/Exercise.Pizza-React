import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h1>Gong's Pizzeria</h1>
        <p> You're the only topping I need for my pizza </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home