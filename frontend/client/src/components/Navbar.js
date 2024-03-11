import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo.png";
function NavBar() {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleSelect = (selectedKey) => {
    setSelectedItem(selectedKey);
  };
  return (
    <div>
      <Navbar expand="lg" data-bs-theme="light" className="bg-light">
        <Container>
          <Navbar.Brand href="/">
            <img //aspect-ratio = 1250:582
              src={logo}
              width="125vw"
              height="58.2vh"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={selectedItem} onSelect={handleSelect}>
              <Nav.Link className="main-nav mx-1" href="/" eventKey="dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link className="main-nav mx-1" href="/categories" eventKey="categories">
                Categories
              </Nav.Link>
              <Nav.Link className="main-nav mx-1" href="/books" eventKey="books">
                All Books
              </Nav.Link>
              <Nav.Link className="main-nav mx-1" href="/racks" eventKey="racks">
                All Racks
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{ color: "black" }} />
    </div>
  );
}

export default NavBar;
