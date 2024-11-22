import React from "react";
import { Link} from "react-router-dom";

const navegacion = () => {
  return (
    <ul class="nav justify-center font-tertiary tracking-[3px] text-xl flex flex-wrap mt-4">
      <li class="nav-item text-white mx-4">
        <Link class=" active  " aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li class=" text-white mx-4">
        <Link class=" hover:text-accent" to="/habitaciones">
          Habitaciones
        </Link>
      </li>
      <li class="nav-item text-white mx-4">
        <Link class="hover:text-accent" to="/restaurante">
          Restaurantes
        </Link>
      </li>
      
    </ul>
  );
};
export default navegacion;