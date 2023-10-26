import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(!inCart);
  };
  const liClassName = inCart ? "in-cart" : "";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
