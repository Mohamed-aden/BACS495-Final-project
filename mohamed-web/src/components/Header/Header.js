import React, { Component } from "react";
import "./Header.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar
        className="navbar "
        bg="dark"
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className=" nav text-center mr-5">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contacts">Contact</Nav.Link>
              <Nav.Link href="#Home">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
