import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";

export default class Header extends Component {
   render() {
      return (
         <header className="main-header">
            <NavLink className="home-logo" to="/">
               <i className="fas fa-mountain fa-2x" />
               <h1>SwCo Outdoors</h1>
            </NavLink>
            <ul>
               <li>
                  <a href="/">About</a>
               </li>
               <li>
                  <a href="/">Contact</a>
               </li>
            </ul>
         </header>
      );
   }
}
