/* eslint-disable no-unused-vars */
import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='main-searchBar'>
        <input type="text" placeholder='Encontrar' />
        <select name="" id="">
            <option value="PeqMedianoueño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
        </select>
        <button className='btn' id='btn-aplicar'>Aplicar</button>
    </div>
  )
}

export default SearchBar