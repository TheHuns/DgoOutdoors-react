import React, { Component } from "react";

export default class Dolores extends Component {
  getDate = () => {
    let time = new Date().getTime();
    return time;
  };

  render() {
    return (
      <React.Fragment>
        <h3>Dolores near Slickrock</h3>
        <img
          src={`http://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=09168730&parm_cd=00060&period=7&cacheTime=${this.getDate()}`}
          height="90%"
          width="90%"
          alt="Hydrograph for site 09168730 and parameter 00060."
          title="Hydrograph for site 09168730 and parameter 00060."
        />
      </React.Fragment>
    );
  }
}
