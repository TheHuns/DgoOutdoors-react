import React, { Component } from "react";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";
import {
  Nav,
  NavItem,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Collapse
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const style = {
      display: "flex",
      color: "dodgerblue"
    };
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={style}>
          <i className="fas fa-mountain fa-2x" />
          <h1>SwCo Outdoors</h1>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AboutModal />
            </NavItem>
            <NavItem>
              <ContactModal />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
