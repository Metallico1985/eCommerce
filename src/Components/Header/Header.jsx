/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar/Navbar'

function Header() {

  return (
    <div className='flex items-center justify-around'>
        <div><h1 className='text-2xl font-semibold' ><a href="/">eCommerce</a></h1></div>
        <Navbar/>
    </div>
  )
}

export default Header