/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineShoppingCart as Cart} from '@react-icons/all-files/ai/AiOutlineShoppingCart'

function Navbar() {

  const navigate = useNavigate();
  return (
    <div className='flex p-10 gap-10'>
        <button className='hover:text-white hover:bg-black rounded-lg p-2' onClick={()=>navigate("/login")}>Inciar Sesión</button>
        <button className='hover:text-white hover:bg-black rounded-lg p-2' onClick={()=>navigate('/contacto')}>Ayuda</button>
        <button className='' onClick={()=>navigate('/carrito')}><Cart size={30}/></button>
    </div>
  )
}

export default Navbar