import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import Formulario from "../components/formulario";
import Header from "../components/Header";

import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  
  const Room = rooms.find((room) => {
    return room.ID_habitacion === Number(id);
  });

  const { tipo_habitacion, descripcion, facilities, imagen , tipo_cama} = Room;
  return (
    <>
    <Header />
    <section className="">
      <div className="bg-room bg-cover h-[560px] relative flex justify-center items-center bg-center ">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-7xl text-white z-20 font-primary text-center">
          {tipo_habitacion} Detalles
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6 ">
            <h2 className="h2 ">{tipo_cama}</h2>
            <p className="mb-8">{descripcion}</p>
            <img className="mb-8" src={imagen} alt="" />

            <div className="mt-12">
              <h3 className="h3 mb-3">Room facilities</h3>
              <p className="mb-12"></p>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name } = item;
                  const renderIcon = (name)=>{
                    switch (name) {
                      case "wifi":
                        return <FaWifi />;
                      case "gym":
                        return <FaStopwatch />;
                      case 'Coffee':
                        return <FaCoffee />;
                      case  'Breakfast':
                        return <FaHotdog /> ;
                      case 'Drinks':
                        return <FaCocktail />;
                      case 'Bath':
                        return <FaBath/>
                      case 'Swimming Pool':
                        return <FaSwimmingPool/>
                      case 'Parking Space': 
                         return <FaParking/>
                      default:
                           return null; // En caso de que no haya una correspondencia de icono
                     }
                  }
                  return (
                    <div key={index} className="flex items-center gap-x-3  flex-1">
                      <div className="text-3x1 text-accent">{renderIcon(name)}</div>
                      <div className="text-3x1 text-accent">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-full lg:w-[40%] ">
           <div className="py-8 px-6 bg-accent/20 mb-12">
            <div className="flex flex-col space-y-4 mb-4">
              <h3>Tu Reservacion</h3>
               <div><Formulario/></div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default RoomDetails;