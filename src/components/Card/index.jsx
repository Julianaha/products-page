import React, { useState, useEffect } from "react";
import "./style.css";

function Card() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
    )
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="card-product">
            <img src={product.image} className="card-img"></img>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>De: R${product.oldPrice}</p>
            <p>Por: R${product.price}</p>
            <button>Comprar</button>
          </div>
        );
      })}
    </>
  );
}

export default Card;
