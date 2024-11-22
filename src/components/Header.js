import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
  const [header, setHeader]= useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  }
  )
  return (
<header className={`${header ? 'bg-accent py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
  <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between'> 
    {/* logo
    <a href='/'>
      {
        header ? <img className='w-[160px]' src={}/> : <img className='w-[160px]' src={}/>
      }
    </a> */}
    <nav className={`${header ? 'text-white' : 'text-white'} flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] items-center uppercase`}> 
      <Link to="/"  className='hover:text-accent transition'>Home</Link>
      <Link to="/restaurante"  className='hover:text-accent transition'>Restaurantes</Link>
      <Link to="/habitaciones" className='hover:text-accent transition'>Habitaciones</Link>
    </nav>
  </div>
</header>)
};  

export default Header;
