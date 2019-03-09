import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import "../public/css/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LowerHeader from "./components/LowerHeader";
import MainContent from "./components/MainContent";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <React.Fragment>
               <Header />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/maincontent" component={MainContent} />
                  <Route component={NotFound} />
               </Switch>
               <LowerHeader />
            </React.Fragment>
         </BrowserRouter>
      );
   }
}

export default App;
