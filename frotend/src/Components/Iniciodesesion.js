import React from "react";
import "../Estilo/Iniciodesesion.css";
import { Container } from "react-bootstrap";

export const Iniciodesesion = () => {
  return (
    <div className="Iniciodesesion py-5">
      <Container className="text-center">
        <h3 class="mb-2 font--normal">Nuestro Nucleo</h3>
        <form className="form-signin">
          <img
            class="mb-4"
            src="./Imagenes_ppi/Logo.jpg"
            alt=""
            width="92"
            height="92"
          />
          <h2 class="h3 mb-3 font--normal">Iniciar sesion</h2>
          <label for="inputEmail" class="sr-only">
            Usuario
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Usuario "
            required=""
            autofocus=""
          />
          <label for="inputPassword" class="sr-only">
            Contraseña
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Contraseña"
            required=""
          />
          <div className="form-signin  ">
            <select
              name="priority"
              className="form-control py-2"
              value=""
              onChange=""
            >
              <option>Estudiante</option>
              <option>Profesor </option>
              <option>Admininistrador</option>
            </select>
          </div>

          <div class="checkbox mb-3"></div>

          <button class="btn btn-outline-primary btn-block" type="submit">
            Acceder
          </button>
          <button class="btn btn-outline-primary btn-block" type="submit">
            Registrarse
          </button>
          <h4 class="mt-5  text-muted">2020</h4>
        </form>
      </Container>
    </div>
  );
};
