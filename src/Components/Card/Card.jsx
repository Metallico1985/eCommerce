/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import './Card.css'

function Card({
  title,
  image,
  price,
})
{
  return (
    <div className='w-xl rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 '>
      <div className='card-title'>{title}</div>
      <div className='w-80 flex content-center justify-center p-10'><img className='w-36 h-48' src={image} alt="" /></div>
      <div className='card-price'>Precio: ${price}</div>
    </div>
  )
}

export default Card