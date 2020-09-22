import React from "react";
import "../Estilo/Sobrenosotros.css";
import { Container, Navbar,Nav} from "react-bootstrap";

export const Sobrenosotros = () => {
  return (
    <div className="Sobrenosotros">

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
      <Container className="text-center">
        <h1 className="mt-5">Quienes somos</h1>
        <h3>
          Con este proyecto buscamos que los padres de familia y las personas
          encargadas de las matriculas, tengan una mejor comodidad la hora de
          matricular a los estudiantes, cambiando por completo la forma
          tradicional. Disminuyendo el desorden, la congestión y las numerosas
          filas que se forman en estos lugares..
        </h3>
      </Container>
      <div align="center"><img src="../Imagenes_ppi/Hola.jpg" className="d-block" alt=""/></div>
      <footer className="text-center">
    <p className="mb-6 text-center"></p>
    <p>©2020 NUESTRO NUCLEO · <p href="/">Prom 2020 Desarrollo De Software</p></p>
  </footer>
    </div>
    
  );
};
