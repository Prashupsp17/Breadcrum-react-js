import React from 'react'
import {useEffect,useState} from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("https://dummyjson.com/products")
  .then(res=> res.json())
  .then((res) => {
    setProducts(res.products);
  })
    },[]);
return (
    <>
  <div>Home Page</div>
  <span>Trending Products 🔥</span>
  <div className="product-grid">
      {
          products.map((product) => {
              return(
                  <div className="product-card" key={product.id}>
                     <Link to={`/products/${product.id}`}>
                     <img src={product.thumbnail} alt={product.title}></img>
                     <h3>{product.title}</h3>
                     <h3>${product.price}</h3>
                     </Link>
                  </div>
              )
          })
      }
  </div>
  <Link to="/products">
      <button style={{width:"100%",padding:10}}>View All Products</button>
  </Link>
  </>
)
}

export default ProductListing