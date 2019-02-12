import React from "react";
import Particles from "react-particles-js";
import {Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/LandingPage/HomePage";
import Dashboard from "./components/dashboard/Dashboard";
import AvatarPage from "./components/Avatar/AvatarPage";

const particleOpt = {
    particles: {
        number: {
            value: 200,
            enable: true,
            value_area: 800
        }
    }
}

const App = () => {
    return(
        <div> 
            <Navbar/>
             <Particles 
                params={particleOpt} className="particles"  />
            <Switch>
                <Redirect exact from="/" to="/dashboard" />
                <Route exact path="/" component={HomePage}  />
                <Route  path="/dashboard" component={Dashboard} />
                <Route  path="/avatar" component={AvatarPage} />
            </Switch>
       </div>
    );
}

export default App;