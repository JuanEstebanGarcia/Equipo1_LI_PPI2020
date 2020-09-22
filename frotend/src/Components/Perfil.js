import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export const Perfil = () => {
  return (
    <div className="Perfil">
      <Navbar className="Menu" expand="lg">
        <Navbar.Brand href="#home">
          <img className="Logo" src="./Imagenes_ppi/Logo.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
            <Nav.Link className="text-white"></Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Instituciones
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Agendar turno{" "}
            </Nav.Link>
            <Nav.Link className="text-danger" href="#link">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link className="text-danger" href="#link">
              Perfil
            </Nav.Link>
            <Nav.Link className="text-danger" href="#link">
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="mb-6 text-center">Perfil </h1>
      <div align="center">
        <img
          src="../Imagenes_ppi/p.PNG"
          className="d-block"
          alt=""
          width="200"
          height="200"
        />
      </div>
      <h3 className="mb-6 text-center"> Juan Esteban </h3>
      <h3 className="mb-6 text-center">Garcia Valencia</h3>
      <h3 className="mb-6 text-center">Juanes666@gmail.com</h3>
    </div>
  );
};
