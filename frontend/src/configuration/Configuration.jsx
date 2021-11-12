import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import ReviewDetection from '../pages/ReviewDetection/ReviewDetection';
import Team from '../pages/Team/Team';
import WorkingPrinciple from '../pages/WorkingPrinciple/WorkingPrinciple';
const Configuration = () => {
    return (
        <>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/team" element={<Team/>} />
            <Route exact path="/how-it-works" element={<WorkingPrinciple/>} />
            <Route exact path="/review-detection" element={<ReviewDetection/>} />
            {/* review-detection */}
            </Routes>
        </>
    )
}

export default Configuration
