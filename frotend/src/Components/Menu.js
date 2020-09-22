import React from "react";
import "../Estilo/Menu.css";
import { Navbar, Nav } from "react-bootstrap";

export const Menu = () => {
  return (
    <div className="Menu">
      <Navbar className="Menu" expand="lg">
        <Navbar.Brand href="#home">
          <img className="Logo" src="./Imagenes_ppi/Logo.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
            <Nav.Link className="text-white"></Nav.Link>
           <Nav.Link className="text-white" href="#link">Instituciones</Nav.Link>
            <Nav.Link className="text-white" href="#link">Agendar turno </Nav.Link>
            <Nav.Link className="text-danger" href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link className="text-danger" href="#link">Perfil</Nav.Link>
            <Nav.Link className="text-danger" href="#link">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
