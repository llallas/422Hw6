import React from "react";

export default function DrinkCard({ name, price, description, onAdd }) {
  return (
    <div className="drink-card">
      <h3>{name}</h3>
      <p className="desc">{description}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={onAdd}>Add to order</button>
    </div>
  );
}
