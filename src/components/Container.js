import React, { Component } from "react";
import MainInfo from "./MainInfo";
import LeftLinks from "./LeftLinks";
import RightLinks from "./RightLinks";

export default class Container extends Component {
   render() {
      return (
         <div className="container">
            <LeftLinks />
            <MainInfo />
            <RightLinks />
         </div>
      );
   }
}
