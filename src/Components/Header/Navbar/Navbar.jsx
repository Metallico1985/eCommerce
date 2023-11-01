/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import {AiOutlineShoppingCart as Cart} from '@react-icons/all-files/ai/AiOutlineShoppingCart'

function Navbar() {

  const navigate = useNavigate();
  return (
    <div className='main-nav'>
        <button className='navbar-btn' onClick={()=>navigate("/login")}>Inciar Sesión</button>
        <button className='navbar-btn' onClick={()=>navigate('/contacto')}>Ayuda</button>
        <button className='navbar-btn' onClick={()=>navigate('/carrito')}><Cart size={25}/></button>
    </div>
  )
}

export default Navbar