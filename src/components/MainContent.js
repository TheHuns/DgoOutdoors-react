import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import WeatherLinks from "./weather/WeatherLinks";
import SnowLinks from "./snow/SnowLinks";
import RiverLinks from "./river/RiverLinks";
import LowerHeader from "./LowerHeader";

export default class MainContent extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="container">
               <Route
                  exact
                  path="/maincontent"
                  render={() => <Redirect to="/maincontent/weather" />}
               />
               <Route path="/maincontent/weather" component={WeatherLinks} />
               <Route path="/maincontent/snow" component={SnowLinks} />
               <Route path="/maincontent/river" component={RiverLinks} />
            </div>
            <LowerHeader />
         </React.Fragment>
      );
   }
}
