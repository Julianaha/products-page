import React, { useState, useEffect } from "react";
import "./style.css";

function Card() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="card-product">
            <img src={product.image} className="card-img"></img>
            <p className="card-name">{product.name}</p>
            <p>{product.description}</p>
            <p>De: R${product.oldPrice}</p>
            <p className="card-focus">Por: R$ {product.price},00</p>
            <p>
              ou {product.installments.count}x de R${product.installments.value}
            </p>
            <button className="card-button">Comprar</button>
          </div>
        );
      })}
    </>
  );
}

export default Card;
