import React from "react";
import { Link } from "react-router-dom";
import './home.css'
const Home = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
      <div className="row align-items-center hero-section">
        <div className="col">
            <h1>
                Love Everything you buy
            </h1>
            <p >
            Spot and avoid shady sellers, products with dishonest reviews and scam websites for free with Fakespot for Chrome, Firefox, iOS and Android.
            </p>
            <div className="d-grid gap-2">
            <Link to="/review-detection">
  <button className="btn btn-primary" type="button">
      
      Check The Product 
      </button>
      </Link>
</div>
        </div>
        <div className="col">
            <img src="https://www.fakespot.com/assets/home/home_main-724b7792addf5c21d3e63f4dcba5aa8bb4b3563ceb270fa9d4bbba699129908b.png" alt=""
             width= "745px"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
