import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import river from "../img/river.jpg";
import snow from "../img/snow.jpeg";
import weather from "../img/weather.jpg";

export default class LowerHeader extends Component {
  state = {
    imgUrl: weather
  };

  clickHandler = url => {
    this.setState({
      imgUrl: url
    });
  };

  render() {
    let styles = {
      backgroundImage: `url(${this.state.imgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "0% 70%",
      overflow: "hidden"
    };
    return (
      <React.Fragment>
        <div
          className="link-bg-img"
          style={styles}
          alt="Background related to tab chosen"
        />
        <header className="lower-header">
          <ul>
            <NavLink
              to="/maincontent/weather"
              id="1"
              onClick={() => this.clickHandler(weather)}
            >
              Local Weather
            </NavLink>
            <NavLink
              to="/maincontent/snow"
              id="2"
              onClick={() => this.clickHandler(snow)}
            >
              Snow Report
            </NavLink>
            <NavLink
              to="/maincontent/river"
              id="3"
              onClick={() => this.clickHandler(river)}
            >
              River Flows
            </NavLink>
          </ul>
        </header>
      </React.Fragment>
    );
  }
}
