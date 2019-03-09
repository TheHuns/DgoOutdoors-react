import React, { Component } from "react";

export default class Header extends Component {
   render() {
      return (
         <header className="main-header">
            <img src="./img/logo1.png" alt="" />
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
