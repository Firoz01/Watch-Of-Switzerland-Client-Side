import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='nav-bg'>
        <Container>
          <Navbar.Brand href="/home" className="d-inline w-75">
            <img
              className="img-fluid w-25 d-flex justify-content-start"
              src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link className="nav-link" href="#pricing">
                Pricing
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
