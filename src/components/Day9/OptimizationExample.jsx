import React, { useState, useCallback, useMemo } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const PRODUCTS = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Cherry", price: 25 },
];

export const OptimizationExample = () => {
  const [cart, setCart] = useState([]);

  // useCallback: Only render once on component load
  // Make it stable reference to pass down
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  // useMemo: Only re-compute total when cart changes
  //const total = 0;
  // ans:
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div>
      <h1>🛒 Shopping Cart</h1>
      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <Cart items={cart} total={total} />
    </div>
  );
};
