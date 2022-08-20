import React from "react";
import styles from "./Card.module.css";

function Card({product}) {
  if (!product) return (<></>)

  return (
    <>
      <div key={product.id} className={styles.cardProduct}>
        <img src={product.image} className={styles.cardImage}></img>
        <p className={styles.cardName}>{product.name}</p>
        <p>{product.description}</p>
        <p>De: R${product.oldPrice}</p>
        <p className={styles.cardFocus}>Por: R$ {product.price},00</p>
        <p>
          ou {product.installments.count}x de R$
          {product.installments.value}
        </p>
        <button className={styles.btnCard}>Comprar mais</button>
      </div>
    </>
  );
}

export default Card;
