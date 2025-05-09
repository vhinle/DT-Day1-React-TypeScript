import React, { useState } from "react";
import ProductList from "./ProductList";
import CheckoutButton from "./CheckoutButton";
import PromoCode from "./PromoCode";

// Initial list of products including quantity (default to 0)
const initialProducts = [
  {
    id: 1,
    name: "Lavender Soap",
    description: "Gentle and fragrant soap for daily use.",
    price: 50.0,
    quantity: 0,
  },
  {
    id: 2,
    name: "Shaving Cream",
    description: "Smooth lather for a clean shave.",
    price: 71.5,
    quantity: 0,
  },
  {
    id: 3,
    name: "Hand Lotion",
    description: "Moisturizing lotion for dry hands.",
    price: 66.25,
    quantity: 0,
  },
];

export default function CheckoutPage() {
  const [products, setProducts] = useState(initialProducts);
  const [promoCode, setPromoCode] = useState("");
  const [onCheckout, setOnCheckout] = useState(false);

  const DISCOUNT_AMOUNT = 0.5; // 50% discount

  // TODO: Create a function that updates quantity of a specific product by its ID.
  //       This should either increase or decrease the quantity (but never go below 0 or above 10).
  const updateQuantity = (id, action) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity =
            action === "increase"
              ? Math.min(product.quantity + 1, 10)
              : Math.max(product.quantity - 1, 0);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };


  // TODO: Calculate total amount based on products with quantity > 0.
  //       If promoCode is exactly 'MAYTHE4THBWU', apply a 50% discount.

  // .reduce(...): This array method is used to accumulate a value 
  // Ref: https://www.programiz.com/javascript/library/array/reduce
  // total: This is the accumulator that holds the running total.
  // product: This is the array of products being processed
  const subTotal = products.reduce((total, product) => {
    return total + (product.quantity > 0 ? product.quantity * product.price : 0);    
  }, 0);

  const discount = promoCode === "MAYTHE4THBWU" ? DISCOUNT_AMOUNT : 0;
  const cartTotal = subTotal * (1 - discount);

  // TODO: Determine if the checkout button should be disabled.
  //       It should be disabled if all quantities are 0.
  const isCheckoutDisabled = cartTotal === 0 ? true : false;

  return (
    <div>
      {!onCheckout ? (
        <>
          <h1>🛒 Order Products</h1>

          {/* Promo code input field */}

          {/* List of product cards, pass handler to change quantities */}
          <ProductList products={products} onQuantityChange={updateQuantity} />
          <PromoCode promoCode={promoCode} setPromoCode={setPromoCode} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* TODO: Replace $0.00 with computed total (with or without discount) */}
            <div>
              <strong>Total: ${cartTotal.toFixed(2)}</strong>
            </div>
            {/* TODO: Replace false with logic to check if button should be disabled */}
            <CheckoutButton
              disabled={isCheckoutDisabled}
              setOnCheckout={setOnCheckout}
            />
          </div>
        </>
      ) : (
        <div>
          <h1>Thank you for your order!</h1>
          <p>Your order has been successfully placed.</p>
          <button onClick={() => setOnCheckout(false)}>Back to Shopping</button>
        </div>
      )}
    </div>
  );
}
