import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import LowerHeader from "./components/LowerHeader";
import Container from "./components/Container";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <Header />
            <LowerHeader />
            <Container />
         </React.Fragment>
      );
   }
}

export default App;
