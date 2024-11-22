import React, { useContext } from 'react';
import Room from '../components/Room';
import { RoomContext } from '../context/RoomContext';

const Rooms = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <section className='py-24'>
      <div className='container mx-auto lg:px-o'>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:max-0'>
          {rooms.map((room) => (
            <Room room={room} key={room.ID_habitacion} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rooms;