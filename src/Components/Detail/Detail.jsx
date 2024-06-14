/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect , useContext} from 'react';
import Header from '../Header/Header'
import { CartContext } from '../../Contexts/Cart'


function Detail() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const item = products.find((item) => {
    console.log(item.title)
    return item.id == id;

  });

  const { addToCart } = useContext(CartContext)

  return (

    <div>
      <Header />
      <div className='h-screen flex text-center items-center justify-center'>
        {item ? (
          <div className='flex items-center justify-center flex-col'>
            <p className='text-xl p-4'>{item.title}</p>
            <img className='h-96 p-6' src={item.image} alt="" />
            <span className='text-2xl' >{`Precio:  US$${item.price}`}</span>
            <button onClick={() => addToCart(item)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
          </div>
        ) : <></>}
      </div>
    </div>

  )
}

export default Detail