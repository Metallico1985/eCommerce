/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'


function Header() {
  return (
    <div className='main-header'>
        <div><h1>eCommerce</h1></div>
        <Navbar/>
    </div>
  )
}

export default Header