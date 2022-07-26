import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ storeName }) => {
  const categories = [
    { name: "Abstracto", id: 0, route: "/category/abstracto" },
    { name: "Familiar", id: 1, route: "/category/familiar" },
    { name: "Gestión", id: 2, route: "/category/gestion" },
    { name: "Infantil", id: 3, route: "/category/infantil" },
    { name: "Party", id: 4, route: "/category/party" },
    { name: "Temático", id: 5, route: "/category/tematico" },
  ];

  return (
    <Navbar expand="lg" className="containerProject" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="title">
            <img src={logo} alt="logo" className="logo" />
            {storeName}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-md-0" navbarScroll>
            {categories.map((category) => (
              <NavLink className="nav-link" key={category.id} to={category.route}>
                {category.name}
              </NavLink>
            ))}
            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
