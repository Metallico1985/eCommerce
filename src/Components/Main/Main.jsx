/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Main.css'
import Header from '../Header/Header'
import Card from '../Card/Card';
import SearchBar from './SearchBar/SearchBar';

function Main() {

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

  return (
    <div className='main-container'>
      <Header />
      <SearchBar />
      <div className='grid-main'>
        {products.map((item) => (
          <div className='grid-item' >
            <Link to={`detalle/${item.id}`}>
              <Card title={item.title}
                image={item.image}
                price={item.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Main