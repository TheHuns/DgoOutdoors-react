import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import river from "../img/river.jpg";
import snow from "../img/snow.jpeg";
import weather from "../img/weather.jpg";

export default class LowerHeader extends Component {
  state = {
    imgUrl: river
  };

  clickHandler = e => {
    const { imgUrl } = this.state;
    if (e.target.id === 1) {
      this.setState(imgUrl => ({
        imgUrl: weather
      }));
    } else if (e.target.id === 2) {
      this.setState({
        imgUrl: snow
      });
    } else if (e.target.id === 3) {
      this.setState({
        imgUrl: river
      });
    }
    console.dir(e.target);
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
              onClick={this.clickHandler}
            >
              Local Weather
            </NavLink>
            <NavLink to="/maincontent/snow" id="2" onClick={this.clickHandler}>
              Snow Report
            </NavLink>
            <NavLink to="/maincontent/river" id="3" onClick={this.clickHandler}>
              River Flows
            </NavLink>
          </ul>
        </header>
      </React.Fragment>
    );
  }
}
