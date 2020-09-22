import React from "react";
import "../Estilo/Msjdeconfirm.css";

export const Msjdeconfirm = () => {
  return (
    <div align="center">
      <img
        className="mb-4"
        src="./Imagenes_ppi/2705.png"
        alt=""
        width="92"
        height="92"
      />
      <h4 className="mb-4">Te recordamos tu cita</h4>
      <h4 className="mb-4">
        Juan, te recordamos tu proxima cita el 13/04/021 a las 3:30 pm ¿No
        puedes asistir? Cancela tu cita y vuelve a programarla.{" "}
      </h4>
      <button class="btn btn-outline-danger btn-block" type="submit">
    Cancelar cita
        </button>
        
        <div align="center">
      <img
        className="mb-4"
        src="./Imagenes_ppi/x.jpg"
        alt=""
        width="92"
        height="92"
      />

      <h4 className="mb-4">Tu cita se ha cancelado exictosamente</h4>
      <button class="btn btn-outline-primary btn-block" type="submit">
 Volver 
        </button>
    </div>
    </div>
    
  );
};
