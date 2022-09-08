import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";

const WorkingPrinciple = () => {
  return (
    <>
      <Banner pageName="How It Works" pageLink="/how-it-works" />
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1 className="text-center">How It Works</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis similique aliquam rerum suscipit? Molestias eum debitis
            enim, assumenda expedita a id nihil, quo velit quasi magnam
            necessitatibus illo ab, omnis minima voluptate? Dolore nobis harum
            sed numquam repellendus in reprehenderit?
          </p>
          <div className="text-center">
         < Link to="/review-detection">
          <button type="button" className="btn btn-primary mt-5">
            Check Product
          </button>
          </Link>
          </div>
          
        </div>
        
        
      </div>
    </>
  );
};

export default WorkingPrinciple;
