/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/cartContext'
import Header from '../Header/Header'

function Cart() {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


  return (
    <div>
      <Header />
      <div className=''>
        <h1 className="text-2xl font-bold">Carro de compras de: usuario </h1>
        </div>
      <div className="flex items-center content-around justify-center bg-white gap-8 p-10 text-black text-sm">
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <img src={item.image} alt={item.title} className="rounded-md h-24" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    removeFromCart(item)
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  clearCart()
                }}
              >
                Vaciar el carrito
              </button>
              
            </div>
          ) : (
            <h1 className="text-lg font-bold">Tu carro está vacio...</h1>
          )
        }
      </div>
    </div>
  )
}

export default Cart