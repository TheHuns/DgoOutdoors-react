import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LowerHeader extends Component {
   render() {
      return (
         <header className="lower-header">
            <ul>
               <NavLink to="/maincontent/weather">Local Weather</NavLink>
               <NavLink to="/maincontent/snow">Snow Report</NavLink>
               <NavLink to="/maincontent/river">River Flows</NavLink>
            </ul>
         </header>
      );
   }
}
