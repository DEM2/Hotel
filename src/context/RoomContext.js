import React, { createContext, useState } from 'react';
import { roomData2 } from '../data2';
import { reservas } from '../dataReserva';
import moment from 'moment';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData2.habitaciones);
  const [tipo, setTipo] = useState('Ordinario');
  const [checkInDate, setCheckInDate] = useState(moment());
  const [checkOutDate, setCheckOutDate] = useState(moment());

  const handleClick = (e) => {
    e.preventDefault();

    // Filtrar las habitaciones por tipo
    const newRooms = roomData2.habitaciones.filter((room) => {
      return tipo.toLowerCase() === room.tipo_habitacion.toLowerCase();
    });

    // Filtrar las habitaciones por las fechas de reserva
    const filteredRoomsByDates = newRooms.filter((room) => {
      const isAvailable = reservas.reservas.every((reserva) => {
        if (room.ID_habitacion === reserva.habitacion_id) {
          const reservaInicio = moment(reserva.fecha_inicio, 'DD/MM/YYYY');
          const reservaFin = moment(reserva.fecha_fin, 'DD/MM/YYYY');
          const checkIn = checkInDate.clone();
          const checkOut = checkOutDate.clone();

          // Verificar si las fechas se superponen de alguna forma
          return (
            checkOut.isSameOrBefore(reservaInicio) ||   // No hay superposición
            checkIn.isSameOrAfter(reservaFin)         // Superposición total
          );
        }
        return true;
      });
      return isAvailable;
    });

    setRooms(filteredRoomsByDates);
  };

  return (
    <RoomContext.Provider value={{ rooms, tipo, setTipo, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, handleClick }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;