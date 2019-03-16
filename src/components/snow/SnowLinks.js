import React from "react";
import { NavLink, Route, Redirect } from "react-router-dom";

import Purgatory from "./Purgatory";
import WolfCreekSki from "./WolfCreekSki";
import Telluride from "./Telluride";

export default function SnowLinks() {
   return (
      <div className="links-container">
         <div className="main-nav">
            <ul>
               <li>
                  <NavLink to="/maincontent/snow/purgatory">Purgatory</NavLink>
               </li>
               <li>
                  <NavLink to="/maincontent/snow/wolfcreek">Wolf Creek</NavLink>
               </li>
               <li>
                  <NavLink to="/maincontent/snow/telluride">Telluride</NavLink>
               </li>
            </ul>
         </div>
         <div className="display-area">
            <Route
               exact
               path="/maincontent/snow"
               render={() => <Redirect to="/maincontent/snow/purgatory" />}
            />
            <Route path="/maincontent/snow/durango" component={Purgatory} />
            <Route
               path="/maincontent/snow/wolfcreek"
               component={WolfCreekSki}
            />
            <Route path="/maincontent/snow/moab" component={Telluride} />
         </div>
      </div>
   );
}
