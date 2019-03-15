import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import River from "../img/river.jpg";

export default class LowerHeader extends Component {
   // clickHandler = e => {
   //    if (e.target.id === 1) {
   //       this.setState({
   //          url: "../img/weather.jpg"
   //       });
   //    } else if (e.target.id === 2) {
   //       this.setState({
   //          url: "../img/snow.jpg"
   //       });
   //    } else if (e.target.id === 3) {
   //       this.setState({
   //          url: "../img/river.jpg"
   //       });
   //    }
   // };

   render() {
      return (
         <React.Fragment>
            <img
               className="link-bg-img"
               src={River}
               alt="Background related to tab chosen"
            />
            <header className="lower-header">
               <ul>
                  <NavLink
                     to="/maincontent/weather"
                     id="1"
                     onClick={this.clickHandler}
                  >
                     Local Weather
                  </NavLink>
                  <NavLink
                     to="/maincontent/snow"
                     id="2"
                     onClick={this.clickHandler}
                  >
                     Snow Report
                  </NavLink>
                  <NavLink
                     to="/maincontent/river"
                     id="3"
                     onClick={this.clickHandler}
                  >
                     River Flows
                  </NavLink>
               </ul>
            </header>
         </React.Fragment>
      );
   }
}
