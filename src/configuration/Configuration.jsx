import React from 'react'
import {
  Switch,
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
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/how-it-works" component={WorkingPrinciple} />
            <Route exact path="/review-detection" component={ReviewDetection} />
            {/* review-detection */}
            </Switch>
        </>
    )
}

export default Configuration
