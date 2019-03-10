import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import "../public/css/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MainContent from "./components/MainContent";

const noaaToken = "zwIdTocxXquXRrPQuyLJMWCOEKVCEgzQ";

class App extends Component {
   state = {
      data: null
   };

   componentDidMount() {
      fetch("https://api.weather.gov/points/37.26881, 107.8843")
         .then(response => response.json())
         .then(data => this.setState({ data }))
         .then(console.log(this.state.data));
   }

   render() {
      const { data } = this.state;
      return (
         <BrowserRouter>
            <React.Fragment>
               <Header />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/maincontent" component={MainContent} />
                  <Route component={NotFound} />
               </Switch>
            </React.Fragment>
         </BrowserRouter>
      );
   }
}

export default App;
