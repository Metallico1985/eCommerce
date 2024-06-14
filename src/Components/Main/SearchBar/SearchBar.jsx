/* eslint-disable no-unused-vars */
import React from 'react'

function SearchBar() {
  return (
    <div className='flex justify-evenly items-center content-evenly mt-8'>
        <input className='border' type="text" placeholder='Encontrar' />
        <select name="" id="">
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
        </select>
        <button className='hover:text-white hover:bg-black rounded-lg p-2' id='btn-aplicar'>Buscar</button>
    </div>
  )
}

export default SearchBar