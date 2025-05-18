import React from "react";

// memo: Avoid re-rendering unless cart or total changes
const Cart = React.memo(({ items, total }) => {
  console.log("🛍 Rendering Cart");

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ₱{item.price}
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total: ₱{total}</strong>
      </p>
    </div>
  );
});

export default Cart;
