import React from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">SEER</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/submit">Submit New Evidence</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
