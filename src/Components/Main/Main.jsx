/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState,} from 'react'
import { Link } from 'react-router-dom';
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
    
    <div className=''>
      <Header /> 
      <SearchBar />
      <div className=' grid grid-cols-4 gap-12 place-items-center p-44 text-center'>
        {products.map((item) => (
          <> 
            <Link to={`detalle/${item.id}`}>
              <Card title={item.title}
                image={item.image}
                price={item.price}
              />
            </Link>
          </>
        ))}
      </div>
    </div>

  )
}

export default Main