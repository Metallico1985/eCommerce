/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart as Cart} from '@react-icons/all-files/ai/AiOutlineShoppingCart'

function Navbar() {
  return (
    <div className='main-nav'>
        <button className='navbar-btn'>Inciar Sesión</button>
        <button className='navbar-btn'>Ayuda</button>
        <button className='navbar-btn'><Cart size={23}/></button>
    </div>
  )
}

export default Navbar