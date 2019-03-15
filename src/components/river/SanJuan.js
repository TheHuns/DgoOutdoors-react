import React, { Component } from "react";

export default class SanJuan extends Component {
   getDate = () => {
      let time = new Date().getTime();
      return time;
   };

   render() {
      return (
         <React.Fragment>
            <h3>San Juan at Pagosa Springs</h3>
            <img
               src={`http://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=09342500&parm_cd=00060&period=7&cacheTime=${this.getDate()}`}
               height="90%"
               width="90%"
               alt="Hydrograph for site 09361500 and parameter 00060. Click to see a full size."
               title="Hydrograph for site 09361500 and parameter 00060. Click to see a full size."
            />
         </React.Fragment>
      );
   }
}
