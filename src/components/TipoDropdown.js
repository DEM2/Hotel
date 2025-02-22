import React, {useContext} from 'react';
import {RoomContext} from '../context/RoomContext'
import {Menu} from "@headlessui/react"
import {BsChevronCompactDown} from "react-icons/bs"

const  lis = [
   {name: 'Ordinaria'},
   {name: 'Compartida'},
   {name: 'Ordinaria Doble'},
]
const Tipo_de_Habitacion = () => {
  const {Tipo, setTipo}=useContext(RoomContext)
  return <Menu as="div" className="w-full h-full bg-white relative  ">
     <Menu.Button className="w-full h-full flex items-center justify-between px-8 hover:bg-accent/30">
         {Tipo}
        <BsChevronCompactDown className='text-base text-accent-hover'/>
     </Menu.Button>

     <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
       {lis.map((li,index)=>{
         return <Menu.Item onClick={()=>setTipo(li.name)} as="li" className="border-b last-of-type: border-b-0 h12 
         hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
          key={index}>{li.name}</Menu.Item>
       })}
     </Menu.Items>
    </Menu>;
};

export default Tipo_de_Habitacion;