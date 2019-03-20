import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import Durango from "./Durango";
import WolfCreek from "./WolfCreek";
import Moab from "./Moab";
import Silverton from "./Silverton";

export default class WeatherLinks extends Component {
  render() {
    return (
      <div className="links-container">
        <div className="main-nav">
          <ul>
            <li>
              <NavLink to="/maincontent/weather/durango">Durango</NavLink>
            </li>

            <li>
              <NavLink to="/maincontent/weather/moab">Moab</NavLink>
            </li>
            <li>
              <NavLink to="/maincontent/weather/silverton">Silverton</NavLink>
            </li>
            <li>
              <NavLink to="/maincontent/weather/wolfcreek">Wolf Creek</NavLink>
            </li>
          </ul>
        </div>
        <div className="display-area">
          <Route
            exact
            path="/maincontent/weather"
            render={() => <Redirect to="/maincontent/weather/durango" />}
          />
          <Route path="/maincontent/weather/durango" component={Durango} />
          <Route path="/maincontent/weather/wolfcreek" component={WolfCreek} />
          <Route path="/maincontent/weather/moab" component={Moab} />
          <Route path="/maincontent/weather/silverton" component={Silverton} />
        </div>
      </div>
    );
  }
}
