import React from "react";

import { Menu } from "../Components/Menu";
import { Iniciodesesion } from "../Components/Iniciodesesion";
import { Registro } from "../Components/Registro";
import { Perfil } from "../Components/Perfil";
import { Sobrenosotros } from "../Components/Sobrenosotros";
import { Msjdeconfirm } from "../Components/Msjdeconfirm";
import { Horcupdoc } from "../Components/Horcupdoc";
import { Instituciones } from "../Components/Instituciones";

export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
      <Menu />
      <Iniciodesesion />
      <Registro />
      <Perfil />
      <Sobrenosotros />
      <Instituciones />
      <Horcupdoc />
      <Msjdeconfirm />
    </div>
  );
}