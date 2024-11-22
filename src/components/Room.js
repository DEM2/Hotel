import React from "react";
import { Link } from "react-router-dom";
import { BsPeopleFill, BsArrowsFullscreen } from "react-icons/bs";

const Room = ({ room }) => {
  const { ID_habitacion, tipo_habitacion , imagen, size, maxCama, descripcion, precio } = room;
  return (
    <div className="bg-gray-100 shadow-2x1 min-h-[500px] group rounded">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full "
          src={imagen}
          alt=""
        />
      </div>

      <div
        className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px]
     -translate-y-1/2  flex justify-center items-center uppercase font-tertiary tracking-[1px]
     font-semibold text-base rounded-full"
      >
        <div className="flex justify-between w-[80%]">
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>{size}m2</div>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeopleFill className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>{maxCama}</div>
              <div>personas</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <Link to={`/room/${ID_habitacion}`}>
          <h3 className="h3">{tipo_habitacion}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {descripcion}
        </p>
      </div>

      <Link
        to={`/room/${ID_habitacion}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
      >
        Book Now from {precio}
      </Link>
    </div>
  );
};

export default Room;
