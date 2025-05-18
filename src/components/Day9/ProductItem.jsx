import React from "react";

// memo: Avoid re-rendering if props don’t change
const ProductItem = React.memo(({ product, addToCart }) => {
  console.log(`🍎 Rendering ${product.name}`);

  return (
    <li>
      {product.name} - ₱{product.price}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
});

export default ProductItem;
