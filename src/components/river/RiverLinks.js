import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
// import RiverTemplate from "./RiverTemplate";
import AnimasDurango from "./AnimasDurango";
import Piedra from "./Piedra";
import SanJuan from "./SanJuan";

export default class RiverLinks extends Component {
   render() {
      return (
         <div className="links-container">
            <div className="main-nav">
               <ul>
                  <li>
                     <NavLink to="/maincontent/river/animasdurango">
                        Animas at Durango
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/maincontent/river/piedra">Piedra</NavLink>
                  </li>
                  <li>
                     <NavLink to="/maincontent/river/sanjuan">San Juan</NavLink>
                  </li>
               </ul>
            </div>
            <div className="display-area">
               <Route
                  exact
                  path="/maincontent/river"
                  render={() => (
                     <Redirect to="/maincontent/river/animasdurango" />
                  )}
               />
               <Route
                  path="/maincontent/river/animasdurango"
                  component={AnimasDurango}
               />
               <Route path="/maincontent/river/piedra" component={Piedra} />
               <Route path="/maincontent/river/sanjuan" component={SanJuan} />
            </div>
         </div>
      );
   }
}
