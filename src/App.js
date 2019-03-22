import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./main";

// import "../public/css/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MainContent from "./components/MainContent";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  // componentDidMount() {
  //    fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?zip=81301,us&appid=${
  //          api.key
  //       }`
  //    )
  //       .then(res => res.json())
  //       .then(
  //          result => {
  //             this.setState({
  //                isLoaded: true,
  //                items: result
  //             });
  //          },
  //          // Note: it's important to handle errors here
  //          // instead of a catch() block so that we don't swallow
  //          // exceptions from actual bugs in components.
  //          error => {
  //             this.setState({
  //                isLoaded: true,
  //                error
  //             });
  //          }
  //       );
  // }

  render() {
    const { items } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/maincontent"
              render={() => <MainContent data={items} />}
            />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
