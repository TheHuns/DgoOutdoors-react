import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
   return (
      <div className="home">
         <img src="./img/home.jpg" alt="" />
         <NavLink id="start-button" to="/maincontent">
            Get Started!
         </NavLink>
      </div>
   );
}
