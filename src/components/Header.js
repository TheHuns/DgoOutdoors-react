import React, { Component } from "react";

export default class Header extends Component {
   render() {
      return (
         <header className="main-header">
            <h1>SwCo Outdoors</h1>
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
