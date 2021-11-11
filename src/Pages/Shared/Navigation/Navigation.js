import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-bg">
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
              {user?.email ? (
                <>
                  <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/payment">
                      Payment
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/myorders">
                      My Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/review">
                      Review
                    </NavDropdown.Item>
                  </NavDropdown>
                  <span className="fw-bold d-flex justify-content-center align-items-center user-name text-info ">
                    {user?.displayName}
                  </span>
                  <Nav.Link
                    className="nav-link login-btn"
                    as={Link}
                    to="/login"
                  >
                    <Button onClick={logOut} variant="danger">
                      Logout
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="nav-link login-btn"
                    as={Link}
                    to="/login"
                  >
                    <Button variant="success">Login</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
