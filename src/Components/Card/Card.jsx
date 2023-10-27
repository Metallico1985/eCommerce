/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Card.css'

function Card({
  title,
  image,
  price,
})
{
  return (
    <div className='main-card'>
      <div className='card-title'>{title}</div>
      <div className='card-image'><img src={image} alt="" /></div>
      <div className='card-price'>Precio: ${price}</div>
    </div>
  )
}

export default Card