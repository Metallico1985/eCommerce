/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Card({
  title,
  image,
  price,
})
{
  return (
    <div className='max-w-xl rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 p-6'>
      <div className='text-lg h-3'>{title}</div>
      <div className='w-80 h-80 flex content-center justify-center p-10'><img className='  pt-4' src={image} alt="" /></div>
      <div className='text-xl'>Precio: ${price}</div>
    </div>
  )
}

export default Card