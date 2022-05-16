import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "../assets/Home.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Homeimg})` }}>
      <div className="headerContainer">
        <h1 style= {{ fontSize: 64, letterSpacing: 2 }}> MIRCH MASALA </h1>
        <p style= {{ letterSpacing: 15 }}> Flavours of India</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
